clear, close all
clc

loading;

[M,N] = size(X);
taxis = [1:N] / samplerate;

figure,
for i = 1:M
    subplot(M,1,i), plot(taxis,X(i,:)) 
    ylabel(['x' num2str(i)])
end

%% estimate and display the coherence between channels using mscohere
figure,
for i = 1:M
    for j = 1:M
        if i == j
            [Sxx,F] = pwelch(X(i,:),hamming(nfft),noverlap,nfft,samplerate);
            subplot(M,M,(i-1)*M+j),plot(F,Sxx)
            title(['P' num2str(i) num2str(j)])
            xlim([0 20])
        else
            [Cxy,F] = mscohere(X(i,:),X(j,:),hamming(nfft),noverlap,nfft,samplerate);
            subplot(M,M,(i-1)*M+j),plot(F,Cxy)
            title(['Coh' num2str(i) num2str(j)])
            xlim([0 20])
        end
    end
end