let characters = ["Luffy", "Zoro", "Sanji", "Chopper", "Usopp", "Nami", "Robin"];
let randomCharacter = getRandomCharacter();

function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function checkGuess() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.trim();
    let resultText = document.getElementById("result");

    if (!guess) {
        resultText.innerHTML = "⚠️ Please enter a name!";
        resultText.style.color = "orange";
        return;
    }

    if (guess.toLowerCase() === randomCharacter.toLowerCase()) {
        resultText.innerHTML = `🎉 You got it! The character was <strong>${randomCharacter}</strong>`;
        resultText.style.color = "green";
        
        // Wait 2 seconds, then restart the game
        setTimeout(() => {
            randomCharacter = getRandomCharacter(); // Pick a new character
            guessInput.value = ""; // Clear input field
            resultText.innerHTML = ""; // Clear result message
        }, 2000);
    } else {
        resultText.innerHTML = "❌ Nope, try again!";
        resultText.style.color = "red";
    }
}

// ✅ Listen for Enter key on the input field
document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
