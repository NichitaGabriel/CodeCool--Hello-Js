console.log("Hello World!");
alert("Hello World");

let time = new Date();

let currentHour = time.getHours();

console.log(currentHour);

function calculateFromPrompt() {
  let firstNumber = Number(prompt("Input a number"));
  if (isNaN(firstNumber)) {
    alert("error for the first input");
  }

  let secondNumber = Number(prompt("Input a number"));
  if (isNaN(secondNumber)) {
    alert("error for the second input");
  }

  return alert("Your result is " + (firstNumber + secondNumber));
}

calculateFromPrompt();

let word = prompt("Type a word");
count = 0;

for (i = 0; i < word.length; i++) {
  if (word[i] !== " ") count++;
  console.log(word[i]);
}
console.log(count);

function reverseWords(word) {
  let splitString = word.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
}

console.log(reverseWords(word));
console.log(count);
