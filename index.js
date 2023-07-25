// fs required for interacting with the file system
const fs = require("fs");
// inquirer enables prompting user inputs
const inquirer = require('inquirer');
const { json } = require("stream/consumers");
// prompts the user in the terminal with questions to generate 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install the application?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use the application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can developers contribute to the project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'How can developers update the tests for the project?',
        name: 'testing'
    },
    {
        type: 'checkbox',
        message: 'Which license is used for this repository?',
        choices: ["MIT", "Apache License 2.0", "GNU General Public License 2.0", "GNU General Public License 3.0"],
        name: 'license'
    },
    {
      type: 'checkbox',
      message: 'What technologies are used in this project?',
      choices: ["HTML", "CSS", "JavaScript", "BootStrap", "JQUERY", "NodeJS", "React.JS", "Dayjs", "Bulma"],
      name: 'technology'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter an email address where you can be reached for questions',
        name: 'email'
    },
  ])
  .then((response) => {
    // Writes file titled 'README.md', with the content written by the generate formula. Logs an error if there is an error, otherwise lets the user know that the file has been generated.
    return fs.writeFile(`README.md`, generate(response), (err) =>
    err ? console.error(err) : console.log('Your Readme file has been generated!'))
    
  });
  // Generates markdown with user selections inserted appropriately
  function generate(data) {
    return `
# ${data.title}

## Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Testing](#testing)
6. [License](#license)
7. [Technologies Used](#technology)
8. [GitHub](#github)
9. [Email](#email)
  
  
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## License
${licenseBadge(data)}

## Technologies Used
${data.technology}

## Questions
For qestions about the project you can contact me at

### Github
[${data.github}](https://github.com/${data.github})

### Email
[${data.email}](${data.email})`

  }
// links a badge with license info based on user selection
function licenseBadge(data) {
  const licenseChoice = data.license[0];
  let licenseBadge = ""
  if (licenseChoice === "MIT"){
    licenseBadge = ` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
  if (licenseChoice === "Apache License 2.0"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseChoice === "GNU General Public License 2.0"){
    licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  };
  if (licenseChoice === "GNU General Public License 3.0"){
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  return licenseBadge
}