// function to generate markdown for README
function generateMarkdown(usersAnswers) {
  return `
# [${usersAnswers.title}](${usersAnswers.repoURL}) 🔗

![Badge](https://crgn5f1s6bod.runkit.sh)
![Badge](https://8nv6mv7znj9i.runkit.sh)
![Badge](https://mlqa5dts7wqy.runkit.sh)
![Badge](https://8nxhgwjcvhpi.runkit.sh)
![Badge](https://4m9gn8h87520.runkit.sh)
![Badge](https://s0acacxqwld3.runkit.sh)
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

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation 🛠️ <a name="installation"></a>

${usersAnswers.installation}

## Usage ⚙️ <a name="usage"></a>

${usersAnswers.usage}

## Contributing 🤝 <a name="contributing"></a>

${usersAnswers.contributing}

## Tests ✅ <a name="tests"></a>

${usersAnswers.tests}

## Questions ❓ <a name="questions"></a>

* 📧 If you have any questions please [**eMail**](mailto:${usersAnswers.email}) me
* :octocat: Check out more of my work on [**GitHub**](${usersAnswers.username})

## License 📝 <a name="license"></a>

This project is ${usersAnswers.license === "Apache" ? "**`Apache 2.0`**" : 
                  usersAnswers.license === "CC"     ? "**`Creative Commons`**"  :  
                  usersAnswers.license === "GPLv3"  ? "**`General Public License v3.0`**"  : 	
                  usersAnswers.license === "GPLv2"  ? "**`General Public License v2.0`**"  : 	
                  usersAnswers.license === "ISC"    ? "**`Internet Systems Consortium`**"  : 	
                  usersAnswers.license === "MIT"    ? "**`Massachusetts Institute of Technology`**"  : 	
                  usersAnswers.license === "WTFpl"  ? "**`WTFPL`**"  : "Not"} licensed

---

 Copyright ©️ ${usersAnswers.year} 🌷 ${usersAnswers.name}
`;
}

module.exports = generateMarkdown;
