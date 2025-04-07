clear, close all
clc

loading;
fs = samplerate;

thetaLow = 4;
thetaHigh = 8;

thetaFilter = designfilt('bandpassiir', 'FilterOrder', 4, ...
                         'HalfPowerFrequency1', thetaLow, 'HalfPowerFrequency2', thetaHigh, ...
                         'SampleRate', fs);

thetaWaveforms = zeros(size(X));

for i = 1:size(X, 1)  
    thetaWaveforms(i, :) = filtfilt(thetaFilter, X(i, :));  
end

timeAxis = (1:size(X, 2)) / fs;  

for i = 1:size(X, 1)
    figure;
    plot(timeAxis, thetaWaveforms(i, :));
    xlabel('Time (s)');
    ylabel('Amplitude');
    title(['Theta Waveform of Channel ' num2str(i)]);
end
