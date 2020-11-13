// function to generate markdown for README
function generateMarkdown(usersAnswers) {
  return `
# [${usersAnswers.title}](${usersAnswers.repoURL}) 🔗



${usersAnswers.license === "Apache" ? "![Badge](https://git.io/gradientbadge)" : 
  usersAnswers.license === "GNU" ? "[![Badge](https://2m7dqaw1ofyq.runkit.sh)](https://git.io/gradientbadge)" : 
  usersAnswers.license === "ISC" ? "[![Badge](https://2m7dqaw1ofyq.runkit.sh)](https://git.io/gradientbadge)" : 
  usersAnswers.license === "MIT" ? "![Badge](https://git.io/gradientbadge)" : "None"}

## Description

${usersAnswers.description}

## Table of Contents ✨

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

## Installation 🛠️

${usersAnswers.installation}

## Usage 

${usersAnswers.usage}

## Contributing 🤝

${usersAnswers.contributing}

## Test ✅

${usersAnswers.tests}

## Questions ❓

* 📧 If you have any questions please [eMail](${usersAnswers.email}) me
* :octocat: Check out more of my work on [GitHub](${usersAnswers.username})!

## Licence

This project is ${usersAnswers.license} licensed

---

 Copyright ©️ ${usersAnswers.year} ${usersAnswers.name}
`;
}

module.exports = generateMarkdown;
