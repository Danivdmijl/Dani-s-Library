// Game data stored in JS
const games = [
    {
        title: "Game Title 1",
        description: "Flip the coin",
        thumbnail: "kanaoflipacoin.jpg",
        url: "https://danivdmijl.github.io/Kanao-s-Coin-Flip/"

    },
    {
        title: "Memory Game with Leaderboard & Unlockable Themes",
        description: "This memory card-matching game provides a fun experience with customizable themes like animals, letters, fruits, space, sports, and instruments. It includes a global leaderboard where players from mobile and desktop can compete, showcasing top scores worldwide. Unlock secret themes by completing challenges, and track high scores for personal improvement. The game also offers audio features, including background music and sound effects, enhancing the overall gameplay experience.",
        thumbnail: "memory-game.jpg",
        url: "https://danivdmijl.github.io/memory-game/"
    },
    {
        title: "My Shiny Pokemon",
        description: "A collection of the pokemon I have caught in there shiny form!",
        thumbnail: "shinypokemon.jpg",
        url: "https://danivdmijl.github.io/Shiny-Pokemon-Dani/"

    }
];

const carousel = document.querySelector('.game-carousel');
let selectedIndex = 1; // Start with the second game highlighted

function createGameCards() {
    carousel.innerHTML = ''; // Clear the carousel

    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        if (index === selectedIndex) gameCard.classList.add('highlighted');
        gameCard.setAttribute('data-game', index);

        const img = document.createElement('img');
        img.src = game.thumbnail;
        img.alt = game.title;

        gameCard.appendChild(img);
        carousel.appendChild(gameCard);

        // Make the game card clickable
        gameCard.addEventListener('click', () => {
            selectedIndex = index;
            updateCarousel();
        });
    });
}

// Function to update the game details for the highlighted game
function updateGameDetails(index) {
    const titleElement = document.getElementById('game-title');
    const descriptionElement = document.getElementById('game-description');
    const thumbnailElement = document.getElementById('game-thumbnail');
    const buttonElement = document.getElementById('game-button');

    titleElement.textContent = games[index].title;
    descriptionElement.textContent = games[index].description;
    thumbnailElement.src = games[index].thumbnail;
    
    // Update the button link and make it visible
    buttonElement.href = games[index].url;
}


// Function to update the carousel display
function updateCarousel() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, idx) => {
        card.classList.remove('highlighted');
        if (idx === selectedIndex) {
            card.classList.add('highlighted');
        }
    });

    // Update the game details for the highlighted game
    updateGameDetails(selectedIndex);
}

// Mouse scroll event to navigate through the games
carousel.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down, move right
        selectedIndex = (selectedIndex + 1) % games.length;
    } else {
        // Scrolling up, move left
        selectedIndex = (selectedIndex - 1 + games.length) % games.length;
    }
    updateCarousel();
});

// Initial load
createGameCards();
updateGameDetails(selectedIndex);
