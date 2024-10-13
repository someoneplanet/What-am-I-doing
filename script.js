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
let isMusicPlaying = true;

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

    // Play click sound
    document.getElementById('clickSound').play();

    // Increment and update meme count
    memeCount++;
    document.getElementById('clickCount').textContent = `Memes Generated: ${memeCount}`;

    // Fire confetti effect
    fireConfetti();
}

// Function to play/pause background music
function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    if (isMusicPlaying) {
        music.play();
        document.getElementById('musicToggle').textContent = 'Pause Music';
    } else {
        music.pause();
        document.getElementById('musicToggle').textContent = 'Play Music';
    }
    isMusicPlaying = !isMusicPlaying; // Toggle the state
}

// Add event listener to the button
document.getElementById('generateMemeBtn').addEventListener('click', generateRandomMeme);

// Add event listener for music toggle
document.getElementById('musicToggle').addEventListener('click', playBackgroundMusic);

// Function to add floating memes to the background
function addFloatingMemes() {
    const floatingContainer = document.querySelector('.floating-memes');

    for (let i = 0; i < 20; i++) { // More memes for better effect
        const memeElement = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomSize = (50 + Math.random() * 50) + 'px'; // Random size
        memeElement.src = memes[randomIndex].src;
        memeElement.classList.add('floating-meme');
        memeElement.style.left = Math.random() * 100 + 'vw';
        memeElement.style.width = randomSize; // Set random size
        memeElement.style.height = randomSize; // Set random size
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
