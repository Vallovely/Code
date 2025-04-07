clear; close all; clc;

pset;

% load raw data
data = readtable(filepath); 

% access to the voltage data
voltageData = data{:, data_start:data_end}; 
X = transpose(voltageData);

preprocessing;

% save as mat file
save('voltageData.mat', 'X');
