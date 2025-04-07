clear, close all;
clc;

% 假设采样率为1000Hz
fs = samplerate;  
data = X;  % 6个通道的信号数据
numChannels = size(data, 1);  
targetChannel = numChannels;  % 第六个通道作为目标通道
nfft = 512;  % 傅里叶变换点数
windowSize = 256;  % STFT窗口大小
noverlap = 128;  % 窗口重叠
freqRange = [0 20];  % 感兴趣的频率范围

% 1. 对信号进行带通滤波 (theta波段 4-8 Hz)
filt_low = 4; filt_high = 8;  
[b, a] = butter(2, [filt_low filt_high] / (fs/2), 'bandpass');  
filtered_data = filtfilt(b, a, data')';  % 对每个通道进行滤波

% 2. 对前五个通道与第六个通道计算相干性
for channel = 1:numChannels-1
    % 对两个通道计算STFT
    [spec1, faxis, taxis] = spectrogram(filtered_data(channel, :), hamming(windowSize), noverlap, nfft, fs);
    [spec2, ~, ~] = spectrogram(filtered_data(targetChannel, :), hamming(windowSize), noverlap, nfft, fs);

    % 3. 计算互功率谱密度和自功率谱密度
    cpsd12 = spec1 .* conj(spec2);  % 互谱密度
    psd1 = abs(spec1).^2;           % 自谱密度1
    psd2 = abs(spec2).^2;           % 自谱密度2

    % 4. 计算相干性
    coherence = abs(cpsd12).^2 ./ (psd1 .* psd2);  

    % 5. 绘制相干性热图
    figure;
    imagesc(taxis, faxis, coherence);
    axis xy;
    xlabel('Time (s)');
    ylabel('Frequency (Hz)');
    title(['Coherence: Channel ' num2str(channel) ' vs Channel ' num2str(targetChannel)]);
    colorbar;
    caxis([0 1]);  % 相干性范围0到1
    ylim(freqRange);  % 只展示0-20 Hz的频率
end
