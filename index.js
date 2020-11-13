const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const axios = require("axios");

const promptUser = () => {
  return inquirer.prompt(questions)
};

// array of questions for user
const questions = [
  {
    message: "Enter the Project title?",
    type: "input",
    name: "title",
  },
  {
    message: "Enter the GitHub URL for the Project?",
    type: "input",
    name: "repoURL",
  },
  {
    message: "Enter a brief Project description?",
    type: "input",
    name: "description",
  },
  {
    message: "Enter how to install the Project?",
    type: "input",
    name: "installation",
  },
  {
    message: "Enter how to use the Project?",
    type: "input",
    name: "usage",
  },
  {
    message: "Choose the license that applies to the Project?",
    type: "list",
    choices: ["Apache", "CC", "GPLv3", "GPLv2", "ISC", "MIT", "WTFPL", "None"],
    name: "license",
  },
  {
    message: "What needs to be known about contributing to the Project?",
    type: "input",
    name: "contributing",
  },
  {
    message: "Enter any test instructions for the Project?",
    type: "input",
    name: "tests",
  },
  {
    message: "Enter your GitHub Username?",
    type: "input",
    name: "username",
  },
  {
    message: "Enter your email address.",
    type: "input",
    name: "email",
  },
  {
    message: "What is the copyright year?",
    type: "input",
    name: "year",
  },
  {
    message: "Type your full name?",
    type: "input",
    name: "name",
  },
// Format to use when adding more objects to the array
// {
//   message: "?",
//   type: "",
//   name: "",
//},
];

// function to write README file
function writeToFile(fileName, data) { 
  fs.writeFile(fileName, data, (err) => {
    if(err) throw err
    console.log("Success!")
  })
};

// function to initialize program
function init() {
  promptUser().then(usersAnswers => {
    axios.get("https://api.github.com/users/" + usersAnswers.username).then(results => {
      usersAnswers.username = results.data.html_url;
    const readmeContent = generateReadme(usersAnswers)
      writeToFile("./README.md", readmeContent);
    })
  })
};

// function call to initialize program
init();
