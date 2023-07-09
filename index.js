const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter the name of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('An error occurred while writing the file:', err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}
// Function to initialize app
async function init() {
  try {
    const inquirer = await import('inquirer');
    const { prompt } = inquirer.default;

    prompt(questions)
      .then((answers) => {
        // TODO: Process the user's answers and generate the README data
        const readmeData = generateReadmeData(answers);

        // TODO: Write the README file
        writeToFile('README.md', readmeData);

        console.log('README file generated successfully!');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to generate README data based on user's answers
function generateReadmeData(answers) {
  return `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me:

GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})

Email: ${answers.email}
`;
}

// Function call to initialize app
init();
