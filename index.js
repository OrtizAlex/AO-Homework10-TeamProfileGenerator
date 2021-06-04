const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const team = [];

createTeam();

function createTeam(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Employee's Name: ",
            name: "name"
        },
    
        {
            type: "input",
            message: "Enter the Employee's Email: ",
            name: "email"
        },
    
        {
            type: "input",
            message: "Enter the Employee's ID: ",
            name: "id"
        },
    
        {
            type: "list",
            message: "Select the Employee's role: ",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
    
        }
    ])
    .then(response => {
        if(response.role === "Manager")
            addManager(response.name, response.email, response.id);
        else if(response.role === "Engineer")
            addEngineer(response.name, response.email, response.id);
        else if(response.role === "Intern")
            addIntern(response.name, response.email, response.id);
    })
}

function addManager(name, email, id){
    
    inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "Enter the manager's office number"
        }
    ])
    .then(response => {
        const newManager = new Manager(name, email, id, response.office);
        team.push(newManager);
        addEmployee();
    })
}

function addEngineer(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username"
        }
    ])
    .then(response => {
        const newEngineer = new Engineer(name, email, id, response.github);
        team.push(newEngineer);
        addEmployee();
    })
}

function addIntern(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school"
        }
    ])
    .then(response => {
        const newIntern = new Intern(name, email, id, response.school);
        team.push(newIntern);
        addEmployee();
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            type:"confirm",
            name: "addEmployee",
            message:"Add another Employee to the team?"
        }
    ])
    .then(response =>{
        if(response.addEmployee === true){
            createTeam();
        }else{
            console.log("team", team);
        }
    })
}