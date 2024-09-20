let scoreElement = document.getElementById("score"); // Score element to update our score for the user
let mainContainer = document.getElementById("container"); // Conatiner to push questions, options and buttons to th container.

// Questions and options stored as a data structure to make it more functional and dynamic
let quiz = [
  {
    id: 1, // for unique identification
    question: "What is the full-form of HTTPS?",
    answer: "HyperText Transfer Protocol Secure",
    options: [
      "HyperTransfer Text Protocol Steady",
      "HyperText Transfer Protocol Secure",
      "Hypernet Text Transfer Protocol Secure",
      "High Text Transfer Protocol Secure",
    ],
    score: 5,
    buttons: ["next"],
  },
  {
    id: 2, // for unique identification
    question: "Full-form of DOM",
    answer: "Document Object Model",
    options: [
      "Document Overseas Model",
      "Document Offering Model",
      "Document Object Model",
      "Data Object Model",
    ],
    score: 5,
    buttons: ["previous", "next"],
  },
  {
    id: 3, // for unique identification
    question: "Full-form of CSS",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Styling Sheets",
      "Cascading Styles Sheets",
      "Cascade Style Sheets",
      "Cascading Style Sheets",
    ],
    score: 5,
    buttons: ["previous", "submit"],
  },
];

let question = 0; // quiz is an array and the first element is at zeroth position
let score = 0;
let userAnswer = "";
scoreElement.innerText = score; // to show the default/initial score

function previousQuestion() {
  question--;
  let object = quiz[question];
  createQuizElement(object);
  userAnswer = ""; // resetting the userAnswer
}

function nextQuestion() {
  question++;
  let object = quiz[question];
  createQuizElement(object);
  userAnswer = ""; // resetting the userAnswer
}

function updateScore() {
  let actualAnswer = quiz[question].answer;

  if (userAnswer === actualAnswer) {
    score = score + quiz[question].score;
  }
  scoreElement.innerText = score;
}

function buttonClickHandler(event) {
  //   nextQuestion(); -> increase my question with 1 which would never match my current question
  let buttonType = event.target.innerText;
  if (buttonType === "Next") {
    updateScore();
    nextQuestion();
  } else if (buttonType === "Previous") {
    previousQuestion();
  } else if (buttonType === "Submit") {
    updateScore();
    alert(`Your score is ${score}`);
    question = 0;
    score = 0;
    userAnswer = "";
    scoreElement.innerText = score;
    createQuizElement(quiz[question]);
  }
}

function optionClickHandler(event) {
  userAnswer = event.target.value;
}

// to create the option element
function createOptions(string) {
  // input option element

  let spanElement = document.createElement("span");
  spanElement.style.display = "block";
  spanElement.classList.add("mb-8");

  let optionElement = document.createElement("input");
  optionElement.setAttribute("type", "radio");
  optionElement.setAttribute("name", "answers");
  optionElement.setAttribute("value", string);
  optionElement.setAttribute("id", string);

  // label for option element
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", string);
  labelElement.innerText = string;

  optionElement.addEventListener("click", optionClickHandler);

  spanElement.append(optionElement, labelElement);

  return spanElement; // To push this element created inside my options container
}

// to create the button element
function createButtons(string) {
  // previous, next

  let buttonElement = document.createElement("button");
  buttonElement.innerText = string;
  buttonElement.classList.add(
    "p-4",
    "text-md",
    "capitalize",
    "pointer",
    "rounded-md"
  );
  buttonElement.style.backgroundColor = "grey";

  buttonElement.addEventListener("click", buttonClickHandler);

  return buttonElement; // To push this element created inside my buttons container
}

// Creates our html elements for the question, options, and buttons - to avoid writing the same logic for n times
function createQuizElement(object) {
  // this object has all the things which we require - question, options, answer (to validate)
  // create question container

  mainContainer.innerHTML = ""; // trying to clear all the previous elements inside my main container

  let questionElement = document.createElement("h3");
  questionElement.innerText = object.question;
  questionElement.classList.add("text-center", "font-bold", "text-3xl", "mb-8");
  //   questionElement.classList.remove()

  // create options container
  let optionsContainer = document.createElement("div");
  optionsContainer.style.width = "50%";
  optionsContainer.style.margin = "auto";
  optionsContainer.classList.add();

  let optionsArray = object.options;
  let optionsArrayLength = optionsArray.length;

  //   let optionOne;
  //   let optionTwo;
  //   let optionThree;
  //   let optionFour;

  for (let a = 0; a < optionsArrayLength; a++) {
    let optionElementCreated = createOptions(optionsArray[a]);
    optionsContainer.appendChild(optionElementCreated);
  }

  // button container
  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "w-32",
    "m-auto"
  );

  let buttonsArray = object.buttons;
  let buttonsArrayLength = buttonsArray.length;

  for (let a = 0; a < buttonsArrayLength; a++) {
    let buttonElementCreated = createButtons(buttonsArray[a]);
    buttonsContainer.appendChild(buttonElementCreated);
  }

  mainContainer.append(questionElement, optionsContainer, buttonsContainer);
}

createQuizElement(quiz[question]); // Initially when the UI is loaded first question should be shown
