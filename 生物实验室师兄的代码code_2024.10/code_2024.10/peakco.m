loading;

fs = samplerate;
data = X;
lowFreq = 6; % 
highFreq = 9; % 

timePoints = [50, 100, 150, 200, 250, 300]; 

% 计算时间点对应的采样索引
timeIndices = round(timePoints * fs);

% define the window size
windowSize = 50000; 

% storage
numChannels = size(data, 1);
numTimePoints = length(timeIndices);
peak_coherence = zeros(numChannels - 1, numTimePoints);

% Calculate coherence
for channel = 1:size(data, 1)-1  
    for t = 1:length(timeIndices)
        startIdx = max(1, timeIndices(t) - windowSize/2);
        endIdx = min(size(data, 2), timeIndices(t) + windowSize/2 - 1);
        
        % extract data
        segmentData = data(channel, startIdx:endIdx);
        lastChannelData = data(end, startIdx:endIdx);
        
        % Calculate coherence 
        [Cxy, F] = mscohere(segmentData',lastChannelData', hamming(512), 256, 512, fs);
        
        % find the peal coherence between 6 - 9 Hz
        freqRangeIdx = F >= lowFreq & F <= highFreq;
        peakCoherenceInRange = max(Cxy(freqRangeIdx));
        
        peak_coherence(channel, t) = peakCoherenceInRange;
    end
end

% 将结果保存为表格
% 每一行表示一个通道，每一列表示一个分段
resultTable = array2table(peak_coherence, 'VariableNames', arrayfun(@(x) sprintf('Segment%d', x), 1:numTimePoints, 'UniformOutput', false), ...
    'RowNames', arrayfun(@(x) sprintf('Channel%d', x), 1:numChannels-1, 'UniformOutput', false));

% 保存为CSV文件
writetable(resultTable, 'peak_coherence002.csv', 'WriteRowNames', true);

disp('Peak coherence results saved to peak_coherence.csv');