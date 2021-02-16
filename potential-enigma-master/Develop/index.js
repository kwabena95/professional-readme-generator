// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');
// const { resolve } = require('path');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of project');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of your project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Project description is required!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableContent',
            message: 'Do you want to add table of contents',
            default: true

        },
        {
            type: 'input',
            name: 'tableContent',
            message: 'Provide table of contents.',
            when: ({ confirmTableContent }) => confirmTableContent,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide step-by-step description of how to get the development environment running. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Installation process is required.');
                    return false;
                }
            },

        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed. Add a filepath of screenshot (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide filepath.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Were there collaborators on this projects?',
            default: true
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List collaborators.',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose license(s). (Required)',
            choices: ['MIT', 'Apache', 'GNU GPL v2', 'GNU GPL v3'],
            validate: lincenseInput => {
                if (lincenseInput) {
                    return true;
                } else {
                    console.log('Please select lincense(s)');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like other developers to contribute to your application?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide guidelines to application:',
            when: ({ confrimContribution }) => confrimContribution
        },
        {
            type: 'input',
            name: 'test',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide tests for your application');
                    return false;
                }
            }
        }

    ]).then(data => {
        console.log(data);
        writeToFile('./README.md', generateMarkDown(data))
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created'
            });
        })
    }).catch(err => console.log(err));

}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
