%% Author: Lu, Chia-Feng 2013.12.05
clear, close all
clc

%% initialize parameters
path(path,'.\FastICA_25');  % add FastICA path

samplerate = 1000; % in Hz
EEGpassband = [1 50];  % passband for EEG bandpass filter
EMGpassband = [50 450];  % passband for EMG bandpass filter
forder = 6; % filter order of IIR

ICNo=10;  % the specified number of independent components
PCNo=ICNo;  % the preserved number of PCs 

dispch=3;  % channel for plot
displength=2000; % data length for plot
rejectCorrThres=0.5;

noverlap=512; % overlapping for 512 data points
nfft=1024;    % the length of each segement for welch average
              % the frequency resolution is decided by samplerate/nfft
% noverlap=0;   % overlapping for 0 data points
% nfft=512;     % the length of each segement for welch average
%               % the frequency resolution is decided by samplerate/nfft              
              
alpha=0.05;  

EEGchlabel={'F5','F3','F1','Fz','F2','F4','F6','P1','FC5','FC3','FC1','FCz','FC2','FC4','FC6','Pz','C5','C3','C1','Cz','C2','C4','C6','P2','CP5','CP3','CP1','CPz','CP2','CP4','CP6','POz','HEOG','VEOG'};
EMGchlabel={'Lt.TA','Rt.TA'};

procperiod=[];   % empty for processing full data, or assign a time range to process 
% procperiod=[1:samplerate*180];   % empty for processing full data, or assign a time range to process 

%% load EEG/EMG data and bandpass filtering
load('ConRightTA.mat')

if isempty(procperiod)
    EEGdata=data(1:34,:);   % 33 for HEOG, 34 for VEOG
    EMGdata=data(35:36,:);  % 35 for left TA, 36 for right TA, this data records right ankle dorsiflexion (continuously static contraction for 5 mins)
else
    EEGdata=data(1:34,procperiod);   % 33 for HEOG, 34 for VEOG
    EMGdata=data(35:36,procperiod);  % 35 for left TA, 36 for right TA, this data records right ankle dorsiflexion (continuously static contraction for 5 mins)
end

[EEGchno N]=size(EEGdata);
[EMGchno N]=size(EMGdata);

EEGdata=filter_2sIIR(EEGdata,EEGpassband,samplerate,forder,'bandpass');
EMGdata=abs(EMGdata);
EMGdata=filter_2sIIR(EMGdata,EEGpassband,samplerate,forder,'bandpass');
%% perform ICA on EEGdata to remove EOG components
[icasig, A, W] = fastica(EEGdata(1:32,:),'numOfIC',ICNo,'displayMode','off','firstEig',1,'lastEig',PCNo); % fast ICA

rejectICA=[];
% find the icasig with high correlations with HEOG (ch.33)
R1=[];
for i=1:ICNo
    tmp=corrcoef(icasig(i,:),EEGdata(33,:));
    R1(i)=tmp(2);
end
rejectICA=find(abs(R1)>rejectCorrThres);
% find the icasig with high correlations with VEOG (ch.34)
R2=[];
for i=1:ICNo
    tmp=corrcoef(icasig(i,:),EEGdata(34,:));
    R2(i)=tmp(2);
end
rejectICA=[rejectICA find(abs(R2)>rejectCorrThres)];
rejectICA=unique(rejectICA);
fprintf(['The icasig #' num2str(rejectICA) ' were rejected!\n'])

%%% reconstruct signal with out EOG ICs
A2=A;
icasig2=icasig;
A2(:,rejectICA)=[];
icasig2(rejectICA,:)=[];

newEEGdata=(A2*icasig2);

%% plot EOG-related ICs and compare EEG siganl before and after ICA
figure,
subplot(2,1,1),plot(EEGdata(33,1:displength)),title('HEOG') 
subplot(2,1,2),plot(EEGdata(34,1:displength)),title('VEOG')  

figure,
for i=1:length(rejectICA)
    subplot(length(rejectICA),1,i),plot(icasig(rejectICA(i),1:displength)) 
    title(['IC #' num2str(rejectICA(i)) ', R(HEOG) = ' num2str(R1(rejectICA(i))) ', R(VEOG) = ' num2str(R2(rejectICA(i)))])
end

figure,
subplot(2,1,1),plot(EEGdata(dispch,1:displength)),title('before ICA')
subplot(2,1,2),plot(newEEGdata(dispch,1:displength)),title('after ICA')

%% calculate the coherence
segmentNo=length([1:noverlap:N-nfft]);    % approximate segment number
CriticalThres=1-alpha^(1/(segmentNo-1));  % the critical threshold for coherence with 95% confidence to be statistical non-zero

%%% calculate the coherence between EEGdata and EMGdata(2,:), i.e. right TA EMG
figure('name','Coherence between EEG and right TA EMG during right ankle dorsiflexion'),
for i=1:EEGchno-2
    [Cxy,F] = mscohere(newEEGdata(i,:),EMGdata(2,:),hamming(nfft),noverlap,nfft,samplerate);
    subplot(5,7,i),plot(F,Cxy),hold on
    plot([0 samplerate/2],[CriticalThres CriticalThres],'r--')
    title(EEGchlabel{i}),xlim([0 50])
end

%%% calculate the coherence between EEGdata and EMGdata(1,:), i.e. left TA EMG
figure('name','Coherence between EEG and left TA EMG during right ankle dorsiflexion'),
for i=1:EEGchno-2
    [Cxy,F] = mscohere(newEEGdata(i,:),EMGdata(1,:),hamming(nfft),noverlap,nfft,samplerate);
    subplot(5,7,i),plot(F,Cxy),hold on
    plot([0 samplerate/2],[CriticalThres CriticalThres],'r--')
    title(EEGchlabel{i}),xlim([0 50])
end


