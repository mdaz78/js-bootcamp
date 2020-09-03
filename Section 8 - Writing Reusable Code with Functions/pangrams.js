// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence
// contains every letter of the alphabet. Make sure you ignore string casing!

function isPangram(sentence) {
    const lowerSentence = sentence.toLowerCase();
    const chars = "abcdefghijklmnopqrstuvwxyz";

    for (char of chars) {
        if (!lowerSentence.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(isPangram('The five boxing wizards jump quickly')); //true 
console.log(isPangram('The five boxing wizards jump quick')); //false