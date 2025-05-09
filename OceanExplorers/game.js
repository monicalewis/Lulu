class MemoryGame {
    constructor() {
        this.cards = [];
        this.flippedCards = [];
        this.currentPlayer = 0;
        this.playerScores = [];
        this.canFlip = true;
        this.cardImages = [
            'whale', 'dolphin', 'shark', 'octopus',
            'seahorse', 'starfish', 'crab', 'jellyfish'
        ];
        
        this.initializeGame();
    }

    initializeGame() {
        // Set up event listeners
        document.getElementById('start-game').addEventListener('click', () => this.startGame());
        document.getElementById('play-again').addEventListener('click', () => this.resetGame());
    }

    startGame() {
        const playerCount = parseInt(document.getElementById('player-count').value);
        if (playerCount < 1 || playerCount > 4) {
            alert('Please select 1-4 players');
            return;
        }

        this.playerScores = new Array(playerCount).fill(0);
        this.currentPlayer = 0;
        this.createCards();
        this.updatePlayerScores();
        this.showScreen('game-screen');
    }

    createCards() {
        // Create pairs of cards
        const cardPairs = [...this.cardImages, ...this.cardImages];
        this.shuffleArray(cardPairs);

        const container = document.getElementById('cards-container');
        container.innerHTML = '';

        cardPairs.forEach((image, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.image = image;
            card.dataset.index = index;

            const front = document.createElement('div');
            front.className = 'card-front';
            front.innerHTML = cardImages[image]; // Use the SVG from images.js
            front.style.width = '100%';
            front.style.height = '100%';

            const back = document.createElement('div');
            back.className = 'card-back';

            card.appendChild(front);
            card.appendChild(back);

            card.addEventListener('click', () => this.flipCard(card));
            container.appendChild(card);
        });
    }

    flipCard(card) {
        if (!this.canFlip || card.classList.contains('flipped') || this.flippedCards.length >= 2) {
            return;
        }

        card.classList.add('flipped');
        this.flippedCards.push(card);

        if (this.flippedCards.length === 2) {
            this.canFlip = false;
            setTimeout(() => this.checkMatch(), 1000);
        }
    }

    checkMatch() {
        const [card1, card2] = this.flippedCards;
        const match = card1.dataset.image === card2.dataset.image;

        if (match) {
            this.playerScores[this.currentPlayer]++;
            this.updatePlayerScores();
            
            // Check if game is over
            if (this.isGameOver()) {
                this.endGame();
                return;
            }
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            this.currentPlayer = (this.currentPlayer + 1) % this.playerScores.length;
            this.updatePlayerScores();
        }

        this.flippedCards = [];
        this.canFlip = true;
    }

    updatePlayerScores() {
        const scoresContainer = document.getElementById('player-scores');
        scoresContainer.innerHTML = '';

        this.playerScores.forEach((score, index) => {
            const scoreElement = document.createElement('div');
            scoreElement.className = `player-score ${index === this.currentPlayer ? 'active' : ''}`;
            scoreElement.textContent = `Player ${index + 1}: ${score}`;
            scoresContainer.appendChild(scoreElement);
        });
    }

    isGameOver() {
        return document.querySelectorAll('.card:not(.flipped)').length === 0;
    }

    endGame() {
        const finalScores = document.getElementById('final-scores');
        finalScores.innerHTML = '';

        const winner = this.playerScores.indexOf(Math.max(...this.playerScores));
        const maxScore = this.playerScores[winner];

        const winners = this.playerScores.reduce((acc, score, index) => {
            if (score === maxScore) acc.push(index + 1);
            return acc;
        }, []);

        const result = document.createElement('p');
        if (winners.length === 1) {
            result.textContent = `Player ${winners[0]} wins with ${maxScore} pairs!`;
        } else {
            result.textContent = `It's a tie! Players ${winners.join(', ')} each have ${maxScore} pairs!`;
        }
        finalScores.appendChild(result);

        this.showScreen('game-over-screen');
    }

    resetGame() {
        this.showScreen('start-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Initialize the game when the page loads
window.addEventListener('load', () => {
    new MemoryGame();
}); 