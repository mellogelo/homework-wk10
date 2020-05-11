const inquirer = require("inquirer")
const fs = require("fs")

const Manager = require("../Develop/lib/Manager")
const Intern = require("../Develop/lib/Intern")
const Engineer = require("../Develop/lib/Engineer")

function start() {
    inquirer
    .prompt([
    {
        type: "input",
        message: "What is employee's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is employee's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is employee's email?",
        name: "email"
    }
    ])
    .then((data) => {
        name = data.name;
        id = data.id;
        title = data.title;
        email = data.email;
    })
};
