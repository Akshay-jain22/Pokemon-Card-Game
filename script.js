const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard || this==firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        // First click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    
    hasFlippedCard = false;
    secondCard = this;

    // Check for cards match
    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.framework == secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards() ;
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    hasFlippedCard, lockBoard = false, false;
    firstCard, secondCard = null, null;
}

// Shuffling cards through Immedialtely Invoked Function
(function shuffle(){
    cards.forEach(card =>{
        let randomPos  = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

// Adding eventListener to all cards
cards.forEach(card => card.addEventListener('click', flipCard));