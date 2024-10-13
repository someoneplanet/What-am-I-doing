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

    // Change meme container background color randomly
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector('.meme-container').style.backgroundColor = randomColor;

    // Trigger confetti
    fireConfetti();
}

// Function to play meme click sound
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Reset sound
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

// Add floating memes to the background
function addFloatingMemes() {
    const floatingContainer = document.querySelector('.floating-memes');

    for (let i = 0; i < 10; i++) {
        const memeElement = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * memes.length);
        memeElement.src = memes[randomIndex].src;
        memeElement.classList.add('floating-meme');
        memeElement.style.left = Math.random() * 100 + 'vw';
        memeElement.style.animationDuration = (5 + Math.random() * 5) + 's'; // Random speed
        floatingContainer.appendChild(memeElement);
    }
}

// Confetti effect on meme generation
function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Play background music and show a random meme when the page loads
window.onload = function() {
    playBackgroundMusic();
    generateRandomMeme();  // Show random meme on load
    addFloatingMemes();    // Add floating memes on load
};
