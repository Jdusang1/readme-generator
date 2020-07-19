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
    choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC License"]
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
function badgeSelection() {
    let badge = badgeSelection
    if (questions.data[7] === [0]) {
        return badge;

    } else if (questions.data[7] === [1]) {
        return badge;

    } else if (questions.data[7] === [2]) {
        return badge;

    } else if (questions.data[7] === [3]) {
        return badge;
    }
}

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
badgeSelection();











