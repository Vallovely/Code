clear, close all
clc

%% initialize parameters
path(path,'.\eMVAR');  % add path of eMVAR toolbox
loading;

[M,N] = size(X);
taxis = [1:N] / samplerate;

figure,
for i = 1:M
    subplot(M,1,i), plot(taxis,X(i,:)) 
    ylabel(['x' num2str(i)])
end

%% estimate the coherence between channels using MVAR
%model order selectio
if pcrit(1) == 'a' | pcrit(1) == 'm' 
    [pottaic,pottmdl,aic,mdl] = mos_idMVAR(X,pmax,idMode);
    if pcrit(1) == 'a'
        p = pottaic; 
    else
        p = pottmdl;
    end
else
    p = pcrit;
end

% model identification
[eAm,eSu,Yp,Up] = idMVAR(X,p,idMode);

%%% Estimated spectral functions
[dc2,dtf2,pdc2,gpdc2,coh2,pcoh2,pcoh22,h2,s2,pp2] = fdMVAR(eAm,eSu,nfft,samplerate);
eS = abs(s2); % spectral matrix
eP = abs(pp2); % inverse spectral matrix
eCOH = abs(coh2).^2; % coherence
ePCOH = abs(pcoh2).^2; % partial coherence

faxis = linspace(0,samplerate / 2, nfft);  % define frequency axis for plot

%% display the coherence between channels using MVAR
figure,
for i = 1:M
    for j = 1:M
        if i == j
            subplot(M,M,(i-1)*M+j),plot(faxis,squeeze(eS(i,j,:)))  
            title(['Coh' num2str(i) num2str(j)])
            xlim([0 300])            
        else
            subplot(M,M,(i-1)*M+j),plot(faxis,squeeze(eCOH(i,j,:)))
            title(['Coh' num2str(i) num2str(j)])
            xlim([0 300])
        end
    end
end

%% display the partial coherence between channels using MVAR
figure,
for i = 1:M
    for j = 1:M
        if i == j
            subplot(M,M,(i-1)*M+j),plot(faxis,squeeze(eP(i,j,:)))  
            title(['invS' num2str(i) num2str(j)]) 
            xlim([0 300])           
        else
            subplot(M,M,(i-1)*M+j),plot(faxis,squeeze(ePCOH(i,j,:)))
            title(['PCoh' num2str(i) num2str(j)])
            xlim([0 300])            
        end
    end
end

%% display the causal coherence using DTF 
figure,
for i = 1:M
    for j = 1:M
        subplot(M,M,(i-1)*M+j), 
        plot(faxis, squeeze(abs(dtf2(i,j,:)).^2));  
        title(['DTF ' num2str(j) '&' num2str(i)])  
        xlim([0 300])  
    end
end
