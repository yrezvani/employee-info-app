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

// Main function
async function main() {
    try {
        // Prompt for the team manager's information
        await promptManager();

        while (true) {
            // Prompt user for the next action
            const action = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'Select an action:',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            });

            if (action.action === 'Add an engineer') {
                // Prompt for engineer's information and add to the teamMembers array
                await promptEngineer();
            } else if (action.action === 'Add an intern') {
                // Prompt for intern's information and add to the teamMembers array
                await promptIntern();
            } else {
                // Finish building the team and generate HTML
                const html = render(teamMembers);
                fs.writeFileSync(outputPath, html);
                console.log(`HTML generated and saved to: ${outputPath}`);
                break; // Exit the loop and end the application
            }
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the main function to start the application
main();