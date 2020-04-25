const generateMarkDown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
require("dotenv").config();
const fs = require('fs');
const util = require("util");

// create a varaible to promisify the writefile
const writeFileAsync = util.promisify(fs.writeFile);


// Create a list of questions for the user
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?"
    },
    {
        type: "input",
        name: "projectURL",
        message: "What is the url to your project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "technology",
        message: "What kind of technologies were used to develop this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE", "GPL", "AGPL", "No license"]

    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "usingRepo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: "list",
        name: "inquiries",
        message: "Can people contact you with questions?",
        choices: ["Yes", "No"]
    }
];


async function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    try {
        const markDown = generateMarkDown(data)
        await writeFileAsync("readme.md", markDown);
        console.log("successfully wrote to readme.md")

    } catch (err) {
        console.log(err);
    }
}


function init() {
    return inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("readme.md", data)
        })
}

init();
