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
    buttons: ["previous"],
  },
];

// to create the option element
function createOptions(string) {
  // input option element

  let spanElement = document.createElement("span");
  spanElement.style.display = "block";
  spanElement.classList.add("mb-8");

  let optionElement = document.createElement("input");
  optionElement.setAttribute("type", "radio");
  optionElement.setAttribute("id", string);

  // label for option element
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", string);
  labelElement.innerText = string;

  spanElement.append(optionElement, labelElement);

  return spanElement; // To push this element created inside my options container
}

// to create the button element
function createButtons(string) {
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

  return buttonElement; // To push this element created inside my buttons container
}

// Creates our html elements for the question, options, and buttons - to avoid writing the same logic for n times
function createQuizElement(object) {
  // this object has all the things which we require - question, options, answer (to validate)
  // create question container

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

createQuizElement(quiz[0]);
