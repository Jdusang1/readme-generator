const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./generateMarkDown")


const questions = [{

    type: "input",
    message: "Title of Project",
    name: "title"
},
{
    type: "input",
    message: "What is your application used for?",
    name: "use"
},
{
    type: "input",
    message: "Why would someone use your project",
    name: "why"
},
{
    type: "input",
    message: "How does someone use your project",
    name: "how"
},
{
    type: "input",
    message: "How does one install your project?",
    name: "install"
},
{
    type: "input",
    message: "Were there any collaborators",
    name: "collaborators"
},
{
    type: "input",
    message: "Are there any ways to run tests on your application and how does one run them?",
    name: "tests"
},
{
    type: "list",
    message: "What license type of license is used?",
    name: "license",
    choices: ["Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "GNU GPLv3 [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)", "MIT [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)", "ISC License [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"]
}, {
    type: "input",
    message: "What is your contact email?",
    name: "email"
},
{
    type: "input",
    message: "What is your git hub username",
    name: "github"
},

];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)



}


// function to initialize program
function init() {
    inquirer.prompt(questions).then(responses => {
        writeToFile("Readme.md", generateMarkdown({ ...responses }))

    })

}


// function call to initialize program
init();
// badgeSelection();











