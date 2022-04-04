// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project. Be descriptive, and include the what, why, and how of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide steps to installing your project. Be desriptive so any user can understand your instructions.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please describe the installation process for your project. Without clear instructions, users may be unable to try out your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how your project is used. Provide examples to help users understand how your project can be applied to their personal use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to use your project!');
                    return false;
                }
            }
        }
    ]);
};

questions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
