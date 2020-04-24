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
        name: "project url",
        message: "What is the url to your project?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "decription",
        message: "Please write a short description of your project?"
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
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

];


async function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    try {
        const markDown = generateMarkDown(data)
        await writeFileAsync("readme.md", markDown);
        console.log("successfully wrote to readme.md")
        // // return new Promise((resolve, reject) => {
        // await fs.writeFile(fileName, generateMarkDown(data), function (err, res) {
        //     if (err) {
        //         // return reject(err);
        //         return console.log(err);
        //     }

        //     // resolve(data);
        //     console.log(res)
        // })
    } catch (err) {
        console.log(err);
    }
}
// })


function init() {
    return inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("readme.md", data)
        })
}

init();
