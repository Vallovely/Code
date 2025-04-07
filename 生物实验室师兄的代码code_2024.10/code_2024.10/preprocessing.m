 Wn = [low_cutoff, high_cutoff] / (samplerate / 2);
t_st = start_time * samplerate;
t_end = end_time * samplerate;

[b, a] = butter(4, Wn, 'bandpass'); 

filtered_data = zeros(size(X));

for i = 1:size(X, 1)
    filtered_data(i, :) = filtfilt(b, a, X(i, :));
end

X = filtered_data;

X = X(:, t_st:t_end);
