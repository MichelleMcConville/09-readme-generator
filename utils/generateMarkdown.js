// function to generate markdown for README
function generateMarkdown(data) {
  return `
# 🔗 [${data.project}}(${data.appURL})

## Description
${data.description}

## ✨ Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Test](#test)
5. [Questions](#questions)
6. [License](#license)

## 🛠️ Installation
${data.install}

## Usage
${data.usage}

## 📷 Application Screenshots

| ***Title***          | ***Title***          |
| -------------------- | -------------------- |
| ![TBD](./tbd)        | ![TBD](./tbd)        |
| ***Title***          | ***Title***          |
| ![TBD](./tbd)        | ![TBD](./tbd)        |

## 🤝 Contributing
${data.contribution}

## ✅ Test
${data.tests}

## ❓ Questions
* If you have any question you can contact me at ${data.email}.
* Check out more of my work @[GitHub](${githubURL})! 🙂

## Licence & Copyright

`;
}

module.exports = generateMarkdown;
