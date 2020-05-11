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
    },
    {
        type: "list",
        message: "What is employee's title?",
        name: "title",
        choices: ["Engineer", "Intern", "Manager"]
    }
    ])
    .then((data) => {
        name = data.name;
        id = data.id;
        title = data.title;
        email = data.email;
    })
};

switch (title){
    case "Manager":
        await inquirer.prompt([
            {
                type: "input",
                message: "What is your Manager's Office Number?",
                name: "officeNumber"
            }
        ])
        .then((data) => {
            const manager = new Manager(name, id, email, data.officeNumber);

            teamMember = fs.readFileSync("..Develop/templates/manager.html")
        });
        break;

        case "Engineer":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "What is your Engineer's GitHub?",
                    name: "github"
                }
            ])
            .then((data) => {
                const engineer = new Engineer(name, id, email, data.github);
    
                teamMember = fs.readFileSync("..Develop/templates/engineer.html")
            })
            break;
   
        
        case "Intern":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "What is your school did your Intern go to?",
                    name: "school"
                }
            ])
            .then((data) => {
                const intern = new Intern(name, id, email, data.school);
    
                teamMember = fs.readFileSync("..Develop/templates/intern.html")
            })
}
