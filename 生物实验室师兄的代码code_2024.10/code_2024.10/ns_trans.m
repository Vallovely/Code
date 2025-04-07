clear;
clc;

[filename, filepath] = uigetfile('*.ns*', 'Select the NS file');
if isequal(filename, 0)
    disp('User canceled file selection');
    return;
end

file = fullfile(filepath, filename);
nsObj = openNSx(file);
data = double(nsObj.Data);

fs = nsObj.MetaTags.SamplingFreq;

numSamples = size(data, 2);
timeVector = (0:numSamples-1) / fs;  

csvData = [timeVector', data'];

[~, name, ~] = fileparts(filename);
csvFilename = [name, '.csv'];

csvwrite(csvFilename, csvData);

disp(['Data saved to ' csvFilename]);
