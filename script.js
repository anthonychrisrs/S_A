const messages = [
    "Beauty isn’t about light; it’s finding your elegance in darkness 🖤",
    "Embrace your darkness my dark angel",
    "In a world full of sunshine, I choose (dig) the moon and the stars. Reflecting the night in my soul",
    "Staring into the abyss, but instead of staring back, it winked. And I just fell for you.",
    "I ran out of ideas for now haha",
    "My silly girl, Jeg holder af dig",
    "Te quiero, my precious Ida"
];

const images = [
    "images/darkHK.png", 
    "images/darkHK1.png",
    "images/darkHK2.png",
    "images/darkHK3.png"
];

const colors = [
    "#121212",
    "#1e1e1e",
    "#2a2a2a"
];

const audioFiles = [
    "https://archive.org/details/MozartK626Requiem3.DiesIrae",
    "https://archive.org/details/MozartK626Requiem3.DiesIrae"
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// Set default image and message
document.getElementById('image').src = getRandomItem(images);
document.getElementById('message').textContent = "Click the button to reveal a message and change the scene.";

document.getElementById('messageButton').addEventListener('click', () => {
    const messageElement = document.getElementById('message');
    const imageElement = document.getElementById('image');
    const bodyElement = document.body;
    const audioElement = document.getElementById('backgroundMusic');

    messageElement.textContent = getRandomItem(messages);
    imageElement.src = getRandomItem(images);
    bodyElement.style.backgroundColor = getRandomItem(colors);
    audioElement.src = getRandomItem(audioFiles);
});
