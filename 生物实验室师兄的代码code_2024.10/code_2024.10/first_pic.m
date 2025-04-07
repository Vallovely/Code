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

last_channel = M;  
figure, hold on

for i = 1:(M-1)  
    [Cxy, F] = mscohere(X(i,:), X(last_channel,:), hamming(nfft), noverlap, nfft, samplerate);  
    plot(F, Cxy, 'DisplayName', ['Coh' num2str(i) '-' num2str(last_channel)])  
end

xlim([0 16])  
xticks(0:2:16)  
xlabel('Frequency (Hz)')
ylabel('Coherence')
title('Coherence between channels and last channel')
legend('show')  
grid on  
