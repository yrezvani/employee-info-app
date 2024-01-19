const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Initialize an array to store team members
const teamMembers = [];

// Define an asynchronous function to prompt for manager information
async function promptManager() {
    try {
        // Use inquirer to prompt the user for manager information
        const managerInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the team manager's name:",
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the team manager's employee ID:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the team manager's email address:",
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: "Enter the team manager's office number:",
            },
        ]);

        // Create a new Manager instance using the provided information
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);

        // Add the manager to the teamMembers array
        teamMembers.push(manager);
    } catch (error) {
        // Handle errors by logging an error message to the console
        console.error('Error:', error.message);
    }
}

// Call the promptManager function to start the process
promptManager();