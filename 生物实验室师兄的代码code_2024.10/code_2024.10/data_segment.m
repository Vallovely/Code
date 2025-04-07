Path = 'G:\code_2024.10\Ns';
list_nsX = getAllFiles(Path, '.ns2');

% 指定保存时间点的路径
timePointsFile = fullfile(Path, 'timePoints.mat');

% 检查文件是否存在
if exist(timePointsFile, 'file')
    % 加载时间点数据
    load(timePointsFile, 'timePoints');
else
    error('timePoints.mat file not found! Please make sure it is available.');
end

allDataStruct = struct('selectedData', [], 'fileName', '', 'timePoint', []); % Store selected data, filename, and timepoints
dataIndex = 1; % Initialize index for storing data

global NS_GLOBAL;
NS_GLOBAL = struct('ASK', false);

stimulateFolder = 'G:\code_2024.10\stimulate';
if ~exist(stimulateFolder, 'dir')
    mkdir(stimulateFolder);
end

% Loop through each .ns2 file
for i = 1:length(list_nsX)
    nsXFile = list_nsX{i};  % Get file path
    
    NSx = openNSx(nsXFile);  % Load the .ns2 file
    
    nsxFile = NSx.MetaTags.Filename;  % Get the filename
    
    if isfield(timePoints, nsxFile)  % Check if timePoints exist for this file
        currentTimes = timePoints.(nsxFile);  % Get timePoints for this file
        for t = 1:length(currentTimes)
            timePoint = currentTimes(t);  % Get each time point
            % Define start and end indices for data extraction
            startIdx = max(1, timePoint * 1000 - 1 * 2000);
            endIdx = min(size(NSx.Data, 2), timePoint * 1000 + 2 * 1000 - 1);
            
            % Select data (e.g., channel 6)
            selectedData = double(NSx.Data([6], startIdx:endIdx));
            
            % Create new filename for saving extracted data
            [filePath, fileName, fileExt] = fileparts(nsXFile);
            newFileName = fullfile(stimulateFolder, [fileName, '_timePoint_' num2str(timePoint) '_selectedData.mat']);
            
            % Save the selected data
            save(newFileName, 'selectedData');
            
            % Store extracted data in allDataStruct
            allDataStruct(dataIndex).selectedData = selectedData;
            allDataStruct(dataIndex).fileName = nsXFile;
            allDataStruct(dataIndex).timePoint = timePoint;
            dataIndex = dataIndex + 1;  % Increment index
            
            % Display message for processed file
            fprintf('Processed and saved file: %s\n', newFileName);
        end
    else
        % Display message if no time points found
        fprintf('No time point information found for: %s\n', nsxFile);
    end
end

% Save summary of all selected data
summaryFileName = fullfile(Path, 'all_selectedData1s.mat');
save(summaryFileName, 'allDataStruct');
fprintf('All data has been summarized and saved to file: %s\n', summaryFileName);

% Helper function to get all .ns2 files in the directory
function files = getAllFiles(dirName, fileExt)
    dirData = dir(fullfile(dirName, ['*', fileExt]));  % Get all files with given extension
    files = {dirData.name}';  % Get the filenames
    files = fullfile(dirName, files);  % Get the full file paths
end
