// Array of meme images and titles
const memes = [
    { src: 'assets/images/meme1.jpg', title: 'When you code and it works' },
    { src: 'assets/images/meme2.jpg', title: 'That face when you understand recursion' },
    { src: 'assets/images/meme3.jpg', title: 'Waiting for the website to load' },
    { src: 'assets/images/meme4.jpg', title: 'The bug that won’t leave' }
];

// Random captions
const captions = [
    "Epicness in every pixel",
    "Memes before dreams",
    "Dankness overload!",
    "Prepare to lol",
    "Top-tier memes only!"
];

// Meme counter
let memeCount = 0;

// Function to generate a random meme
function generateRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomCaptionIndex = Math.floor(Math.random() * captions.length);

    // Set the image, title, and caption
    document.getElementById('memeImage').src = memes[randomIndex].src;
    document.getElementById('memeTitle').textContent = memes[randomIndex].title;
    document.getElementById('memeCaption').textContent = captions[randomCaptionIndex];
}

// Function to play meme click sound
function playClickSound() {
    const clickSound = new Audio('assets/sounds/meme-sound.mp3');
    clickSound.play();
}

// Button click event to generate a random meme and play sound
document.getElementById('generateMemeBtn').addEventListener('click', function() {
    generateRandomMeme();
    playClickSound();

    // Update meme count
    memeCount++;
    document.getElementById('clickCount').textContent = `Memes Generated: ${memeCount}`;
});

// Function to play the background music
function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.5; // Set volume (0.0 to 1.0)
    music.play();
}

// Play background music and show a random meme when the page loads
window.onload = function() {
    playBackgroundMusic();
    generateRandomMeme();  // Show random meme on load
};
