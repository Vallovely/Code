fs = samplerate;  
data = X;  
lowFreq = 6;  
highFreq = 9;  

timePoints = [3, 6, 9, 12, 15]; 
timeIndices = round(timePoints * fs); 
windowSize = 4000;  

numChannels = size(data, 1);  
numTimePoints = length(timeIndices);  
peak_coherence = zeros(numChannels - 1, numTimePoints);  

for channel = 1:numChannels - 1  
    for t = 1:numTimePoints
        startIdx = max(1, timeIndices(t) - windowSize / 2);
        endIdx = min(size(data, 2), timeIndices(t) + windowSize / 2 - 1);
        
        segmentData = data(channel, startIdx:endIdx);
        lastChannelData = data(end, startIdx:endIdx);
        
        [Cxy, F] = mscohere(segmentData', lastChannelData', hamming(512), 256, 512, fs);
        
        freqRangeIdx = F >= lowFreq & F <= highFreq;
        peakCoherenceInRange = max(Cxy(freqRangeIdx));
        
        peak_coherence(channel, t) = peakCoherenceInRange;
    end
end

resultTable = array2table(peak_coherence, 'VariableNames', ...
    arrayfun(@(x) sprintf('Segment%d', x), 1:numTimePoints, 'UniformOutput', false), ...
    'RowNames', arrayfun(@(x) sprintf('Channel%d', x), 1:numChannels-1, 'UniformOutput', false));

writetable(resultTable, 'peak_coherence003.csv', 'WriteRowNames', true);
disp('Peak coherence results saved to peak_coherence003.csv');

peak_coherence_data = readtable('peak_coherence003.csv', 'ReadRowNames', true);

mean_peak_coherence = mean(peak_coherence_data.Variables, 2);  

[numChannels, numSegments] = size(peak_coherence_data);

figure;
hold on;

bar(mean_peak_coherence, 'FaceColor', [0.2, 0.6, 0.8]); 

for channel = 1:numChannels
    scatter(repmat(channel, numSegments, 1), peak_coherence_data{channel, :}, 40, 'filled', 'MarkerEdgeColor', 'k');
end

xticks(1:numChannels);
xticklabels(peak_coherence_data.Properties.RowNames);  % 横坐标为通道名称
xlabel('Channel');
ylabel('Peak Coherence');
title('Peak Coherence for Each Channel with Time Segments');
legend({'Mean Peak Coherence', 'Individual Segment Coherence'}, 'Location', 'northeast');
grid on;
hold off;
