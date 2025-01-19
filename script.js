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
        this.loopSong = false;
        this.autoPlay = false;
        this.loopQueue = false;
    }

    addSong(songName, songURL) {
        const newNode = new SongNode(songName, songURL);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.current = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        updateQueueDisplay();
    }

    getNextSong() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current;
        } else if (this.loopQueue) {
            this.current = this.head;
            return this.current;
        } else {
            return null;
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

    toggleLoopSong() {
        this.loopSong = !this.loopSong;
        updateStatus(this.loopSong ? "Loop Song is ON" : "Loop Song is OFF");
    }

    toggleAutoPlay() {
        this.autoPlay = !this.autoPlay;
        updateStatus(this.autoPlay ? "Auto Play is ON" : "Auto Play is OFF");

        const autoPlayButton = document.getElementById('autoPlayButton');
        autoPlayButton.classList.toggle('active', this.autoPlay);
        autoPlayButton.classList.toggle('inactive', !this.autoPlay);
    }

    toggleLoopQueue() {
        this.loopQueue = !this.loopQueue;
        updateStatus(this.loopQueue ? "Loop Queue is ON" : "Loop Queue is OFF");
    }
}

// Initialize the song queue
const songQueue = new SongQueue();

// Song dictionary
const songDictionary = {
    "Batameez Dil": "https://github.com/Amishprogrammer/Music_band/music/Music1.mp3",
    "Is Your Love Enough": "https://github.com/Amishprogrammer/Music_band/music/Music2.mp3",
    "Main Kya Karoon": "https://github.com/Amishprogrammer/Music_band/music/Music3.mp3",
    "Perfect Symphony": "https://github.com/Amishprogrammer/Music_band/music/Music4.mp3"
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
    if (!songQueue.current || songQueue.autoPlay) {
        playSong(songQueue.current);
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
        if (songQueue.loopSong) {
            playSong(songQueue.current);
        } else if (songQueue.autoPlay) {
            playNextSong();
        }
    };
}

// Play next song
function playNextSong() {
    const nextSong = songQueue.getNextSong();
    if (nextSong) {
        playSong(nextSong);
    } else {
        updateStatus("End of queue.");
    }
}

// Play previous song
function playPrevSong() {
    const prevSong = songQueue.getPrevSong();
    if (prevSong) {
        playSong(prevSong);
    } else {
        updateStatus("No previous song.");
    }
}

// Update queue display
function updateQueueDisplay() {
    let current = songQueue.head;
    const queue = [];
    while (current) {
        queue.push(current.songName);
        current = current.next;
    }
    document.getElementById('queueDisplay').innerHTML = queue.join('<br>') || "Queue is empty.";
}

// Update status
function updateStatus(status) {
    document.getElementById('status').textContent = status;
}

// Set volume
function setVolume(value) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.volume = value;
    document.getElementById('volumeLabel').textContent = `${Math.round(value * 100)}%`;
}

// Initialize playback after user interaction
function startPlayback() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (songQueue.current) {
        audioPlayer.src = songQueue.current.songURL;
    }
    audioPlayer.play()
        .then(() => {
            updateStatus("Playback started.");
            document.getElementById('startPlaybackButton').style.display = "none"; // Hide the button once playback starts
        })
        .catch(err => {
            updateStatus("Unable to start playback. Please allow autoplay in your browser settings.");
            console.error(err);
        });
}

// Modify playSong to ensure it works after the initial playback is started
function playSong(songNode) {
    if (!songNode) return;

    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songNode.songURL;
    audioPlayer.play()
        .then(() => updateStatus(`Now playing: ${songNode.songName}`))
        .catch(err => {
            updateStatus("Playback error. Please click 'Start Playback' or enable autoplay.");
            console.error(err);
        });

    audioPlayer.onended = function () {
        if (songQueue.loopSong) {
            playSong(songQueue.current);
        } else if (songQueue.autoPlay) {
            playNextSong();
        }
    };
}
// Initialize
updateQueueDisplay();
updateStatus("Welcome! Add songs to the queue.");
