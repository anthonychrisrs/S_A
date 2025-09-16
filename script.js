
// Story content
const storyContent = [
  { type: 'image', src: 'images/first_pic_togheter.jpg' },
  { type: 'text', content: "And, this begins with a single moment..." },
  { type: 'image', src: 'images/first_nightview.jpg' },
  { type: 'text', content: "You are like that moon illuminating the sky in the pitch dark night :P" },
  { type: 'image', src: 'images/first_sunrise.jpg' },
  { type: 'text', content: "One of the 'craziest' nights I had and a beautiful memory." },
  { type: 'image', src: 'images/cute_you.jpg' },
  { type: 'text', content: "Seeing you so happy to see me... I totally fell for you." },
  { type: 'image', src: 'images/us.jpg' },
  { type: 'image', src: 'images/us1.jpg' },
  { type: 'text', content: "One of the most precious memories — us." },
  { type: 'image', src: 'images/us_silly_1.jpg' },
  { type: 'image', src: 'images/we_silly.jpg' },
  { type: 'text', content: "You are so silly, really, my lovely woman. :)" }
];

let currentIndex = 0;
const starter = document.getElementById('starter');
const story = document.getElementById('story');
const startButton = document.getElementById('startButton');
const mediaContainer = document.getElementById('media-container');
const storyImage = document.getElementById('story-image');
const storyText = document.getElementById('story-text');

// Show start button with delay
setTimeout(() => startButton.classList.remove('hidden'), 2000);

// Start button event
startButton.addEventListener('click', () => {
  starter.classList.remove('active');
  starter.classList.add('hidden');
  story.classList.remove('hidden');
  story.classList.add('active');
  showNext();
});

// Next on click
mediaContainer.addEventListener('click', showNext);

function showNext() {
  storyImage.classList.add('hidden');
  storyText.classList.add('hidden');

  if (currentIndex >= storyContent.length) {
    mediaContainer.innerHTML = `
      <div class="end-text fade-in">
        <h2>The End ❤️</h2>
        <p>Thank you for being my kitty</p>
      </div>
    `;
    return;
  }

  const item = storyContent[currentIndex];

  if (item.type === 'image') {
    storyImage.src = item.src;
    storyImage.classList.remove('hidden');
    storyImage.classList.add('fade-in');
  } else {
    storyText.textContent = item.content;
    storyText.classList.remove('hidden');
    storyText.classList.add('fade-in');
  }

  currentIndex++;
}
