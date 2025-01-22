// Doubly Linked List Node Constructor
class SongNode {
    constructor(songName, songURL) {
        this.songName = songName;
        this.songURL = songURL;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Linked List (Queue)
class SongQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    addSong(songName, songURL) {
        const newNode = new SongNode(songName, songURL);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.current = this.head;
            playSong(this.head); // Automatically play the first song added to the queue
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        updateQueueDisplay();
    }

    removeSong(songName) {
        let node = this.head;
        while (node) {
            if (node.songName === songName) {
                if (node.prev) node.prev.next = node.next;
                if (node.next) node.next.prev = node.prev;
                if (node === this.head) this.head = node.next;
                if (node === this.tail) this.tail = node.prev;
                if (node === this.current) this.current = this.head;
                break;
            }
            node = node.next;
        }
        updateQueueDisplay();
    }

    getQueueArray() {
        const queue = [];
        let current = this.head;
        while (current) {
            queue.push({ songName: current.songName, songURL: current.songURL });
            current = current.next;
        }
        return queue;
    }

    loadQueueFromArray(queueArray) {
        this.head = this.tail = this.current = null;
        queueArray.forEach(song => this.addSong(song.songName, song.songURL));
    }

    getNextSong() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        } else {
            this.current = this.head; // Restart from the beginning when the queue ends
            return this.current;
        }
    }

    getPrevSong() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            return this.current;
        } else {
            return null;
        }
    }
}

// Initialize the song queue
const songQueue = new SongQueue();

// Song dictionary
const songDictionary = {
    "Batameez Dil": "https://github.com/Amishprogrammer/Music_band/raw/refs/heads/main/music/Music1.mp3",
    "Is Your Love Enough": "https://github.com/Amishprogrammer/Music_band/raw/refs/heads/main/music/Music2.mp3",
    "Main Kya Karoon": "https://github.com/Amishprogrammer/Music_band/raw/refs/heads/main/music/Music3.mp3",
    "Perfect Symphony": "https://github.com/Amishprogrammer/Music_band/raw/refs/heads/main/music/Music4.mp3"
};

// Show suggestions based on input
function showSuggestions() {
    const input = document.getElementById('songInput').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';
    if (input) {
        const suggestions = Object.keys(songDictionary).filter(song => song.toLowerCase().includes(input));
        suggestions.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            li.onclick = () => addSongToQueue(song);
            suggestionsBox.appendChild(li);
        });
    }
}

// Add song to queue
function addSongToQueue(song) {
    const songURL = songDictionary[song];
    songQueue.addSong(song, songURL);
    updateStatus(`Added "${song}" to the queue`);
}

// Remove song from queue
function removeSongFromQueue() {
    const songToRemove = document.getElementById('songInput').value.trim();
    if (songToRemove) {
        songQueue.removeSong(songToRemove);
        updateStatus(`Removed "${songToRemove}" from the queue`);
    }
}

// Export queue to JSON
function exportQueue() {
    const queueArray = songQueue.getQueueArray();
    const dataStr = JSON.stringify(queueArray, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'queue.json';
    link.click();
}

// Import queue from JSON
function importQueue(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const queueArray = JSON.parse(reader.result);
            songQueue.loadQueueFromArray(queueArray);
            updateStatus('Queue imported successfully');
        };
        reader.readAsText(file);
    }
}

// Play song
function playSong(songNode) {
    if (!songNode) return;

    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songNode.songURL;
    audioPlayer.play()
        .then(() => updateStatus(`Now playing: ${songNode.songName}`))
        .catch(err => updateStatus("Playback error. Please click Play."));

    audioPlayer.onended = function () {
        const nextSong = songQueue.getNextSong();
        if (nextSong) {
            playSong(nextSong);
        } else {
            updateStatus("End of queue.");
        }
    };
}

// Play next song
function playNextSong() {
    const nextSong = songQueue.getNextSong();
    playSong(nextSong);
}

// Play previous song
function playPrevSong() {
    const prevSong = songQueue.getPrevSong();
    if (prevSong) {
        playSong(prevSong);
    }
}

// Update queue display
function updateQueueDisplay() {
    const queueDisplay = document.getElementById('queueDisplay');
    const queueArray = songQueue.getQueueArray();
    if (queueArray.length === 0) {
        queueDisplay.innerHTML = 'Queue is empty.';
    } else {
        queueDisplay.innerHTML = queueArray.map(song => song.songName).join('<br>');
    }
}

// Update status
function updateStatus(message) {
    document.getElementById('status').textContent = message;
}

// Volume control
function setVolume(value) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = value;
    document.getElementById('volumeLabel').textContent = `${Math.round(value * 100)}%`;
}

// Web Audio API setup for Equalizer
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioPlayer = document.getElementById('audioPlayer');
const equalizerFilters = [
    createFilter('lowshelf', 60),   
    createFilter('peaking', 250),  
    createFilter('peaking', 1000),
    createFilter('peaking', 4000),
    createFilter('highshelf', 16000)
];

let sourceNode = null;

document.body.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
});

function connectAudioSource() {
    if (sourceNode) sourceNode.disconnect();
    sourceNode = audioContext.createMediaElementSource(audioPlayer);
    const audioOutput = equalizerFilters.reduce((prev, current) => {
        prev.connect(current);
        return current;
    }, sourceNode);
    audioOutput.connect(audioContext.destination);
}

function createFilter(type, frequency) {
    const filter = audioContext.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = frequency;
    filter.gain.value = 0;
    return filter;
}

function adjustEqualizer(index, value) {
    equalizerFilters[index].gain.value = value;
    updateStatus(`Equalizer: Adjusted ${equalizerFilters[index].type} filter to ${value} dB`);
}

audioPlayer.addEventListener('play', connectAudioSource);
