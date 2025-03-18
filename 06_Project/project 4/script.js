const randomGuess = Math.floor(Math.random() * 1000) + 1;
const error = document.getElementById('error');
const cong = document.getElementById('cong');
const result = document.getElementById('result');

let attempts = 0;
const maxAttempts = 10;

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const value = parseInt(document.getElementById('number').value);
    attempts++;

    if (isNaN(value) || value < 1 || value > 1000) {
        error.innerText = "Please enter a number between 1 and 1000!";
        return;
    }

    if (randomGuess === value) {
        cong.innerText = `Congratulations! You guessed it in ${attempts} tries.`;
        result.innerText = `The number was ${randomGuess}`;
        error.innerText = "";
        document.querySelector('form').remove(); // Disable further guesses
    } else if (randomGuess > value) {
        error.innerText = "The number is higher than your guess.";
    } else {
        error.innerText = "The number is lower than your guess.";
    }

    if (attempts >= maxAttempts && randomGuess !== value) {
        error.innerText = `All ${maxAttempts} guesses are over!`;
        result.innerText = `The number was ${randomGuess}`;
        document.querySelector('form').remove(); // Disable further guesses
    }
});
