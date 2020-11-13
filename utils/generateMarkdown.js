// function to generate markdown for README
function generateMarkdown(usersAnswers) {
  return `
# [${usersAnswers.title}](${usersAnswers.repoURL}) 🔗

[![Badge](https://crgn5f1s6bod.runkit.sh)](https://git.io/gradientbadge)	
[![Badge](https://8nv6mv7znj9i.runkit.sh)](https://git.io/gradientbadge)	
[![Badge](https://mlqa5dts7wqy.runkit.sh)](https://git.io/gradientbadge)	
${usersAnswers.license === "Apache" ? "![Badge](https://img.shields.io/badge/license-Apache%202.0-f56b02)" : 	
  usersAnswers.license === "CC"     ? "![Badge](https://img.shields.io/badge/license-CC-f2ea05)" : 	
  usersAnswers.license === "GPLv3"  ? "![Badge](https://img.shields.io/badge/license-GPL%20v3-40e637)" : 	
  usersAnswers.license === "GPLv2"  ? "![Badge](https://img.shields.io/badge/license-GPL%20v2-0526fc)" : 	
  usersAnswers.license === "ISC"    ? "![Badge](https://img.shields.io/badge/license-ISC-850fd4)" : 	
  usersAnswers.license === "MIT"    ? "![Badge](https://img.shields.io/badge/license-MIT-f2056c)" : 	
  usersAnswers.license === "WTFPL"  ? "![Badge](https://img.shields.io/badge/license-WTFPL-f20707)" : ""}

## Description

${usersAnswers.description}

## Table of Contents ✨

1. [Installation](#installation)
2. [Usage](#usage)
3. [contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)

## Installation 🛠️

${usersAnswers.installation}

## Usage ⚙️

${usersAnswers.usage}

## Contributing 🤝

${usersAnswers.contributing}

## Test ✅

${usersAnswers.tests}

## Questions ❓

* 📧 If you have any questions please [eMail](${usersAnswers.email}) me
* :octocat: Check out more of my work on [GitHub](${usersAnswers.username})

## Licence 📝

This project is ${usersAnswers.license === "Apache" ? "**`Apache 2.0`**" : 
                  usersAnswers.license === "CC"     ? "**`Creative Commons`**"  :  
                  usersAnswers.license === "GPLv3"  ? "**`General Public License v3.0`**"  : 	
                  usersAnswers.license === "GPLv2"  ? "**`General Public License v2.0`**"  : 	
                  usersAnswers.license === "ISC"    ? "**`Internet Systems Consortium`**"  : 	
                  usersAnswers.license === "MIT"    ? "**`Massachusetts Institute of Technology`**"  : 	
                  usersAnswers.license === "WTFpl"  ? "**`WTFPL`**"  : "Not"} licensed

---

 Copyright ©️ ${usersAnswers.year} ${usersAnswers.name}
`;
}

module.exports = generateMarkdown;
