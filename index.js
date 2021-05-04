/*
Description
Our program takes in text, a list of words to censor, what to censor them with 
(****, BEEP, xxx, !!!, etc), and it returns a censored version of the text.

Instructions
- Use the provided array as a text input to be censored
- You don't have to use prompts for now, just hard-code the rest of your user inputs
- Create a function that takes a replacement string, a word to censor, and censors the text input
- Print out the censored text to the console

Tips
- Remember that sometimes you have to change your data from one type to another,
  ex. string -> [array of strings]
- Remember that functions should do only one thing very well
- Think of how you can make your code readable by using functions

*/

const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

function wordCensoring(textToCensor, wordToReplace, replacementWord) {
  splitText = textToCensor.split(" ");
  let counter = 0;
  for (const word of splitText) {
    if (word.toLowerCase().includes(wordToReplace.toLowerCase())) {
      let wordIndex = splitText.indexOf(word);
      splitText[wordIndex] = replacementWord;
      counter += 1;
    }
  }
  return {
    censoredText: splitText.join(" "),
    counter: counter,
  };
}

console.log(wordCensoring(text, "IT", "****"));

userTextToCensor = prompt("Text to censor :");
userWordToReplace = prompt("Which word would you like to replace?");
userReplacementWord = prompt("Replacement word:");

console.log(
  wordCensoring(userTextToCensor, userWordToReplace, userReplacementWord)
);
