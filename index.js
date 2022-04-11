// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
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
            message: 'Please provide a description for your project.',
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
            message: 'Please provide steps to installing your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please describe the installation process for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how your project is used.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions on how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please give instructions on how to test your project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please enter any instructions/guidelines to contributing to the project.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please include instructions for contributing to your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: [
                'gpl3.0',
                'agpl3.0',
                'apache2.0',
                'mit',
                'unlicense',
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter your Github Username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address where users can reach you.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!')
                    return false;
                }
            }
        }
];


// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/readme.md`, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);  
};

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(readmeInfo => {
        return writeToFile(readmeInfo);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse.message);
    })
