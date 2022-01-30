// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project : ',
        validate: (projectNameInput) => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: (projectDescriptionInput) => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }

    }
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Describe the installation instructions for your project : ',
    //     validate: (installInstructionInput) => {
    //         if (installInstructionInput) {
    //             return true;
    //         } else {
    //             console.log('Please list some installation instructions!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Enter the usage information for your project',
    //     validate: (usageInfoInput) => {
    //         if (usageInfoInput) {
    //             return true;
    //         } else {
    //             console.log('Please list some usage information for your project!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'What are the contribution guidelines for your project?',
    //     validate: (contributionInput) => {
    //         if (contributionInput) {
    //             return true;
    //         } else {
    //             console.log('Please list the contribution guidelines for your project!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Describe any test instructions for your project : ',
    //     validate: (testsInput) => {
    //         if (testsInput) {
    //             return true;
    //         } else {
    //             console.log('Please list any test instructions for your project!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'checkbox',
    //     name: 'license',
    //     message: 'Choose the license for your project ',
    //     choices: ['placeholders'],
    //     validate: (licenseInput) => {
    //         if (licenseInput) {
    //             return true;
    //         } else {
    //             console.log('Please choose a license!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'input',
    //     name: 'questionsGitUser',
    //     message: 'What is your GitHub Username?',
    //     validate: (gitUserInput) => {
    //         if (gitUserInput) {
    //             return true;
    //         } else {
    //             console.log('You must list your GitHub username!');
    //             return false;
    //         }
    //     } 
    // },
    // {
    //     type: 'input',
    //     name: 'questionsEmail',
    //     message: 'What is your email address?',
    //     validate: (emailInput) => {
    //         if (emailInput) {
    //             return true;
    //         } else {
    //             console.log('You must list your email!');
    //             return false;
    //         }
    //     } 
    
]
;

const readmeAnswers = [];

// TODO: Create a function to write README file
const writeFile = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMarkdown(readmeAnswers), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README file created!'
            })
        })
    }) 
}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then(readmeData => {
        // console.log(readmeData)
        readmeAnswers.push(readmeData);
        // console.log(readmeAnswers);
    })
}

// Function call to initialize app
init()
    .then(writeFileResponse => {
        // console.log(writeFileResponse);
        return writeFile();
    });