function set_time_points_gui()
    dirName = 'G:\code_2024.10\Ns';
    fileExt = '.ns2';
    list_ns2 = getAllFiles(dirName, fileExt);

    f = figure('Position', [300, 300, 600, 400], 'Name', 'Set Time Points', 'NumberTitle', 'off', 'MenuBar', 'none');

    uicontrol('Style', 'text', 'Position', [20, 350, 200, 20], 'String', 'Select File');
    fileList = uicontrol('Style', 'listbox', 'Position', [20, 50, 200, 300], 'String', list_ns2, 'Max', 1, 'Callback', @selectFile);

    uicontrol('Style', 'text', 'Position', [250, 350, 150, 20], 'String', 'Enter time points (seconds), separated by commas');
    timePointsBox = uicontrol('Style', 'edit', 'Position', [250, 320, 200, 30], 'String', '');

    uicontrol('Style', 'pushbutton', 'Position', [470, 320, 100, 30], 'String', 'Add Time Point', 'Callback', @addTimePoint);

    timePointsList = uicontrol('Style', 'listbox', 'Position', [250, 50, 320, 250], 'String', {}, 'Max', 10);

    uicontrol('Style', 'pushbutton', 'Position', [470, 20, 100, 30], 'String', 'Save Settings', 'Callback', @saveSettings);

    timePoints = struct();

    function selectFile(src, event)
        selectedIdx = get(src, 'Value');
        selectedFile = list_ns2{selectedIdx};
        [~, fileName, ~] = fileparts(selectedFile);  
        if isfield(timePoints, fileName)
            set(timePointsList, 'String', num2str(timePoints.(fileName)));
        else
            set(timePointsList, 'String', {});
        end
    end

    function addTimePoint(src, event)
        selectedIdx = get(fileList, 'Value');
        selectedFile = list_ns2{selectedIdx};
        timePointStr = get(timePointsBox, 'String');
        timePointsArray = str2num(timePointStr); 
        if isempty(timePointsArray)
            errordlg('Please enter valid time points (seconds)', 'Invalid Input');
            return;
        end
        [~, fileName, ~] = fileparts(selectedFile);  
        if ~isfield(timePoints, fileName)
            timePoints.(fileName) = [];
        end
        timePoints.(fileName) = [timePoints.(fileName), timePointsArray];
        set(timePointsList, 'String', num2str(timePoints.(fileName)));
    end

    function saveSettings(src, event)
        save(fullfile(dirName, 'timePoints.mat'), 'timePoints');
        close(f);
    end
end

function files = getAllFiles(dirName, fileExt)
    dirData = dir(fullfile(dirName, ['*', fileExt]));
    files = {dirData.name}';
    files = fullfile(dirName, files);
end
