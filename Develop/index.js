// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should a user install your project?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide instructions on how to properly use your project'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How should we test this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
];

// TODO: Create a function to write README file and create a function to initialize app (two birds one stone)
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then(answers => {

        let template =     `## ${answers.title}
        ## Description
        ${answers.description}
        ##Installation
        ${answers.installation}
        ##Instuctions
        ${answers.instructions}
        ##Contributors
        ${answers.contributors}
        ##Test
        ${answers.test}
        ##License
        ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)
        Contact
        Email: ${answers.email}
        Github: ${answers.github}`

        fs.writeFile('README.md', template, function(err) {
            if (err) return console.log(err);
            else 
            console.log("README created successfully!");
        })
    }
    )};
writeToFile();











