// array of questions for user
const fs = requirer("fs");
const inquirer = require("inquirer");

// what is diff of inquirer.prompt([{}])
const questions = [
  {
    message: "Enter the name of the Repo/Project?",
    type: "input",
    name: "project",
  },
  {
    message: "What is the link to your application?",
    type: "input",
    link: "appURL"
  }
  {
    message: "Enter the Repo/Project GutHub URL?",
    type: "input",
    name: "githubURL",
  },
  {
    message: "Give a brief description of the Repo/Project?",
    type: "input",
    name: "description",
  },
  {
    message: "What does the user need to know about using the Repo/Project?",
    type: "input",
    name: "usage",
  },
  {
    message: "Enter the installation info for the Repo/Project?",
    type: "input",
    name: "install",
  },
//   {
//     message: "Enter screenshot?",
//     type: "",
//     name: "",
//   },
  {
    message: "What does the user need to know about contributing to the Repo/Project?",
    type: "input",
    name: "contribution",
  },
  {
    message: "Enter the test instructions?",
    type: "input",
    name: "test",
  },
  {
    message: "Enter your email address.",
    type: "input",
    name: "email",
  },
  {
    message: "Choose the license that applies to the Repo/Project?",
    type: "list",
    name: "license",
    choices: ["Apache", "GNU", "ISC", "MIT", "None"],
  },
  {
    message: "What is the copyright year?",
    type: "input",
    name: "year",
  },
//   {
//     message: "?",
//     type: "",
//     name: "",
//   },
];

switch (data.license) {
  case "Apache":
    license = `[![License: Apache]()]`
    break;
  case "GNU":
    license = `[![License: GNU]()]`
    break;
  case "ISC":
    license = `[![License: ISC]()]`
    break;
  case "MIT":
    license = `[![License: MIT](https://img.shields.io/apm/l/pack?style=plastic)]`
    break;

  default: None
    break;
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
