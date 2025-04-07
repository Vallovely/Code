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

deadtime=3;  % deadtime (in second) for removing the fake events
baselinelength=0; % in data point
eventperiod=500;  % in data point

noverlap=0; % overlapping for 512 data points
nfft=baselinelength+eventperiod;    % the length of each segement for welch average
                                    % the frequency resolution is decided by samplerate/nfft  
              
alpha=0.05;  

EEGchlabel={'F5','F3','F1','Fz','F2','F4','F6','P1','FC5','FC3','FC1','FCz','FC2','FC4','FC6','Pz','C5','C3','C1','Cz','C2','C4','C6','P2','CP5','CP3','CP1','CPz','CP2','CP4','CP6','POz','HEOG','VEOG'};
EMGchlabel={'Lt.TA','Rt.TA'};

%% load EEG/EMG data and bandpass filtering
load('TrialLeftTA.mat')

EEGdata=data(1:34,:);   % 33 for HEOG, 34 for VEOG
EMGdata=data(35:36,:);  % 35 for left TA, 36 for right TA, this data records left ankle dorsiflexion (event-related, single contraction)
Marker=data(37,:);      % the marker by pressing button

[EEGchno N]=size(EEGdata);
[EMGchno N]=size(EEGdata);

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

%% locate the event markers
ind=find(Marker~=0);
temp=ind(2:end)-ind(1:end-1);
ind2=find(temp>1000);  % identify the interval larger than 1 data point
ind2(end)=[]; % reject final one 
ind=[ind(1) ind(ind2+1)];  % locate the timepoint of pressing button

diffind=diff(ind);
repind=find(diffind<deadtime*1000);  % remove fake events
ind(repind+1)=[];

if ind(1)<baselinelength
    ind(1)=[];
end    
epochnum=length(ind);%
%% plot EMG signal with event markers
% figure, 
% subplot(2,1,1),plot(EMGdata(1,:)),hold on
% for i=1:length(ind)
%     plot([ind(i) ind(i)],[min(EMGdata(1,:)) max(EMGdata(1,:))],'r--')
% end
% 
% subplot(2,1,2),plot(EMGdata(2,:)),hold on
% for i=1:length(ind)
%     plot([ind(i) ind(i)],[min(EMGdata(2,:)) max(EMGdata(2,:))],'r--')
% end

%% EEG/EMG epoch data
EEGepoch=[];
EMGepoch=[];
for i=1:epochnum
    EEGepoch=[EEGepoch newEEGdata(:,ind(i)-baselinelength:ind(i)+eventperiod-1)];
    EMGepoch=[EMGepoch EMGdata(:,ind(i)-baselinelength:ind(i)+eventperiod-1)];
end

%% calculate the coherence
segmentSP=[1:noverlap:N-nfft];  % the startpoint of each segment
segmentNo=epochnum;    % segmentNo=trialNo
CriticalThres=1-alpha^(1/(segmentNo-1));  % the critical threshold for coherence with 95% confidence to be statistical non-zero

%%% calculate the coherence between EEGdata and EMGdata(1,:), i.e. left TA EMG
%%% <use as multiple trials>
tic,
figure('name','Coherence between EEG and right TA EMG during right ankle dorsiflexion'),
for i=1:EEGchno-2
    S=[];
    for j=1:segmentNo
        X=[EEGepoch(i,segmentSP(j):segmentSP(j)+nfft-1); EMGepoch(1,segmentSP(j):segmentSP(j)+nfft-1)];

        %model order selection
        if pcrit(1)=='a' | pcrit(1)=='m'
            [pottaic,pottmdl,aic,mdl] = mos_idMVAR(X,pmax,idMode);
            if pcrit(1)=='a'
                p=pottaic;
            else
                p=pottmdl;
            end
        else
            p=pcrit;
        end

        % model identification
        [eAm,eSu,Yp,Up]=idMVAR(X,p,idMode);

        %%% Estimated spectral functions
        [dc2,dtf2,pdc2,gpdc2,coh2,pcoh2,pcoh22,h2,s2,pp2] = fdMVAR(eAm,eSu,nfft,samplerate);
        S(:,:,:,j)=s2;
    end
    
    S=mean(S,4);
    coh2 = (S(1,2,:)) ./ sqrt(abs(S(1,1,:).*S(2,2,:)));  % average spectrum cross trials
    eCOH=abs(coh2).^2; %coherence
    COH=squeeze(eCOH)';
        
    subplot(5,7,i),plot(faxis,COH),hold on
    plot([0 samplerate/2],[CriticalThres CriticalThres],'r--')
    title(EEGchlabel{i}),xlim([0 50])
    ylim([0 max(Cxy(5:40))])
end
toc,




