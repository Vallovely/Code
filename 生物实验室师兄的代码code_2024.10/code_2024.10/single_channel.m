clear, close all
clc

loading;

[spec, faxis, taxis] = spectrogram(X(channelIndex,:), hamming(nfft), noverlap, nfft, samplerate);
powerSpectrogram = abs(spec).^2;
normalizedPower = powerSpectrogram / max(powerSpectrogram(:)); 

meanNormalizedPower = mean(normalizedPower, 2);

figure;
plot(faxis, meanNormalizedPower);
xlim([0 50]);
xlabel('Frequency (Hz)');
ylabel('Normalized Power');
title(['Normalized Power Spectrum of Channel ' num2str(channelIndex)]);
grid on;