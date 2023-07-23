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
        message: 'How do you use the application',
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
    console.log(JSON.stringify(response))
  });