%%% basic config
filepath = '010.csv'
data_start = 2 % valid data start column
data_end = 7 % valid data end column

start_time = 60; % start time of interest
end_time = 90; % end time of interest

samplerate = 1000; % in Hz

%%% filter
high_cutoff = 30;
low_cutoff = 1;

%%% Cohere
noverlap = 1280; % overlapping for x data point
nfft = 2560; % the length of each segement for welch average

%%% MVARcohere
pcrit='aic'; % 'aic', 'mdl', or number for fixed model order
idMode = 2; % identification algorithm (see mvar.m)
pmax = 20; % maximal model order

%%% Coherence between channels
column_1 = 4;
column_2 = 6;

%%% single channel
channelIndex = 5; % the column of interest