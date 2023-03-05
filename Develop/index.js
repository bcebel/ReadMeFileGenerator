// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
// TODO: What are we importing? node js file system - has a lot of functions
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile() first: tells which file to append to, where to get data from terminal input, third is error

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Table of Contents',
      name: 'toc',
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Usage',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'License',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Tests',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Questions',
        name: 'questions',
      },
  ])
  .then((response) => {
    fs.appendFile(
        
        'readme.md',  `# ${response.title}  \r\r
## Description\r\r${response.description}\r\r
## Table of Contents\r\r${response.toc}\r\r
## Installation\r\r${response.installation}\r\r
## Usage\r\r${response.usage}\r\r
## License\r\r${response.license}\r\r
## Contributing\r\r${response.contributing}\r\r
## Tests\r\r${response.tests}\r\r
## Questions\r\r${response.questions}`,  (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
  });
