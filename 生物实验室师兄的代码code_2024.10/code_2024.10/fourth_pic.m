clear, close all
clc

loading;

windowSize = 2048;    % STFT窗口大小
noverlap = 1024;      % 重叠部分
nfft = 2048;          % FFT点数
fs = samplerate;      % 采样率

numChannels = size(X, 1);  
targetChannel = numChannels;  % 第六个通道作为目标通道         
stftWindow = hamming(windowSize);

% 初始化相干性矩阵 (频率 x 时间 x 通道)
coherenceMatrix = [];

% 平滑窗口设置 (移动平均)
numSegments = 10;  % 每个时间段用几个窗口平均

% 遍历每个信号通道（与目标通道比较）
for channel = 1:numChannels-1
    % 计算两个信号的STFT
    [S1, F, T] = spectrogram(X(channel,:), stftWindow, noverlap, nfft, fs);
    [S2, ~, ~] = spectrogram(X(targetChannel,:), stftWindow, noverlap, nfft, fs);

    % 初始化 Pxy, Pxx, Pyy 容器
    Pxy = S1 .* conj(S2);  % CPSD
    Pxx = abs(S1).^2;      % PSD of signal 1
    Pyy = abs(S2).^2;      % PSD of signal 6

    % 平滑处理：计算平均 Pxy, Pxx, Pyy
    mean_Pxy = movmean(Pxy, numSegments, 2);  % 2是时间轴方向
    mean_Pxx = movmean(Pxx, numSegments, 2);
    mean_Pyy = movmean(Pyy, numSegments, 2);

    % 计算相干性
    Cxy = abs(mean_Pxy).^2 ./ (mean_Pxx .* mean_Pyy);

    % 存储每个通道的相干性
    coherenceMatrix(:, :, channel) = Cxy;
end

% 绘制相干性热图
for channel = 1:numChannels-1
    figure;
    imagesc(T, F, coherenceMatrix(:,:,channel));
    axis xy;
    xlabel('Time (s)');
    ylabel('Frequency (Hz)');
    title(['Time-Frequency Coherence: Channel ' num2str(channel) ' vs Channel ' num2str(targetChannel)]);
    colorbar;
    ylim([0 20]);  % 只关心0-20Hz的频率范围
end
