/* General Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #202020;
    color: #fff;
    margin: 0;
    padding: 0;
    text-align: center;
    overflow: hidden; /* Hide overflow for floating memes */
}

header {
    background-color: #ff8800;
    padding: 20px;
}

#logo {
    width: 150px;
    height: auto;
}

h1 {
    font-size: 3em;
    margin: 10px 0;
}

p {
    font-size: 1.2em;
}

button {
    background-color: #ff5500;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 20px;
    transition: transform 0.3s ease;
}

button:active {
    animation: shake 0.5s;
}

button:hover {
    background-color: #ff3300;
}

/* Shake animation */
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}

main {
    margin: 20px;
}

.meme-container {
    background-color: #333;
    padding: 20px;
    border-radius: 15px;
    display: inline-block;
    width: 80%;
    max-width: 500px;
    margin-top: 20px;
    transition: background-color 0.5s ease;
}

#memeImage {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transform: scale(0.8);
    animation: zoomIn 0.6s ease forwards;
}

@mkeyframes zoomIn {
    0% { transform: scale(0.8); }
    100% { transform: scale(1); }
}

#memeTitle {
    margin: 15px 0;
    font-size: 1.8em;
    color: #ffcc00;
    text-shadow: 2px 2px #000;
    animation: bounceIn 0.6s ease-out forwards;
}

/* Bounce in animation */
@keyframes bounceIn {
    0% { transform: translateY(-200%); }
    60% { transform: translateY(10%); }
    100% { transform: translateY(0); }
}

#memeCaption {
    font-style: italic;
    font-size: 1.2em;
    text-shadow: 1px 1px #000;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Caption fade and slide in */
@keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Floating meme images in the background */
.floating-memes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.floating-meme {
    position: absolute;
    width: 100px;
    height: 100px;
    opacity: 0.6;
    animation: floatMeme 10s infinite linear;
}

@keyframes floatMeme {
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-100vh); }
}

footer {
    background-color: #ff8800;
    padding: 10px;
    margin-top: 40px;
}

footer p {
    margin: 0;
    font-size: 1em;
}
