// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
const writeFile = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', generateMarkdown(), err => {
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
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project (Required) : ',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        }
    ])
    console.log(this);
}

// Function call to initialize app
init()
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return writeFile();
    });