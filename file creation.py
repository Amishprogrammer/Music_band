import os

# Specify the folder containing the audio files
audio_folder = "music"
output_folder = "pages"

# Create the output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Template for the HTML music player
html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <style>
        body {{font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
        }}
        .container {{
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }}
        button {{
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }}
        button:hover {{
            opacity: 0.9;
        }}
        .play-btn {{
            background-color: #28a745;
            color: white;
        }}
        .pause-btn {{
            background-color: #dc3545;
            color: white;
        }}
        .slider-container {{
            margin: 20px 0;
        }}
        input[type="range"] {{
            width: 100%;
        }}
        .time {{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>{audio_file}</h1>
        <div>
            <button class="play-btn" onclick="playMusic()">Play</button>
            <button class="pause-btn" onclick="pauseMusic()">Pause</button>
        </div>
        <div class="slider-container">
            <input type="range" id="seekBar" min="0" max="100" value="0">
            <div class="time">
                <span id="currentTime">0:00</span>
                <span id="totalTime">0:00</span>
            </div>
        </div>
        <audio id="audioPlayer" src="music/{audio_file}"></audio>
    </div>

    <script>
        const audioPlayer = document.getElementById('audioPlayer');
        const seekBar = document.getElementById('seekBar');
        const currentTimeEl = document.getElementById('currentTime');
        const totalTimeEl = document.getElementById('totalTime');

        // Play the music
        function playMusic() {{
            audioPlayer.play();
        }}

        // Pause the music
        function pauseMusic() {{
            audioPlayer.pause();
        }}

        // Update slider and time display as music plays
        audioPlayer.addEventListener('timeupdate', () => {{
            const currentTime = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            seekBar.value = (currentTime / duration) * 100;

            currentTimeEl.textContent = formatTime(currentTime);
            totalTimeEl.textContent = formatTime(duration);
        }});

        // Seek when the slider value changes
        seekBar.addEventListener('input', () => {{
            const duration = audioPlayer.duration;
            audioPlayer.currentTime = (seekBar.value / 100) * duration;
        }});

        // Format time in mm:ss
        function formatTime(seconds) {{
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
            return `${{mins}}:${{secs}}`;
        }}

        // Set total duration when metadata is loaded
        audioPlayer.addEventListener('loadedmetadata', () => {{
            totalTimeEl.textContent = formatTime(audioPlayer.duration);
        }});
    </script>
</body>
</html>
"""

# Iterate over the audio files and create an HTML file for each
audio_files = [f for f in os.listdir(audio_folder) if f.endswith(('.mp3', '.wav', '.ogg'))]

for i, audio_file1 in enumerate(audio_files, start=1):
    html_content = html_template.format(audio_file=audio_file1)
    output_path = os.path.join(output_folder, f"Music{i}.html")
    
    with open(output_path, 'w', encoding='utf-8') as html_file:
        html_file.write(html_content)
    
    print(f"Generated: {output_path}")
