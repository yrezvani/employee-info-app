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

// Asynchronous function to prompt for manager information
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

// Asynchronous function named promptEngineer
async function promptEngineer() {
    try {
        // Use the inquirer library to prompt the user for information about an engineer        
        const engineerInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the engineer's name:",
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the engineer's employee ID:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the engineer's email address:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's GitHub username:",
            },
        ]);

        // Create a new Engineer object with the collected information        
        const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);

        // Add the newly created engineer object to the teamMembers array
        teamMembers.push(engineer);
    } catch (error) {
        // If an error occurs during the asynchronous operation, log the error message to the console
        console.error('Error:', error.message);
    }
}

// Asynchronous function named promptIntern
async function promptIntern() {
    try {
        // Use the inquirer library to prompt the user for information about an intern        
        const internInfo = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter the intern's name:",
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the intern's employee ID:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the intern's email address:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school:",
            },
        ]);

        // Create a new Intern object with the collected information        
        const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);

        // Add the newly created intern object to the teamMembers array        
        teamMembers.push(intern);
    } catch (error) {

        // If an error occurs during the asynchronous operation, log the error message to the console        
        console.error('Error:', error.message);
    }
}


// Main function
async function main() {
    try {
        // Prompt for the team manager's information
        await promptManager();

        // Recursive function to continue prompting until finish
        const promptNextAction = async () => {
            const action = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'Select an action:',
                choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            });

            if (action.action === 'Add an engineer') {
                // Prompt for engineer's information and add to the teamMembers array
                await promptEngineer();
                // Recursively call promptNextAction
                await promptNextAction();
            } else if (action.action === 'Add an intern') {
                // Prompt for intern's information and add to the teamMembers array
                await promptIntern();
                // Recursively call promptNextAction
                await promptNextAction();
            } else {
                // Finish building the team and generate HTML
                console.log(teamMembers);
                const html = render(teamMembers);
                // Create the output directory if it doesn't exist
                if (!fs.existsSync(OUTPUT_DIR)) {
                    fs.mkdirSync(OUTPUT_DIR);
                }
                fs.writeFileSync(outputPath, html);
                console.log(`HTML generated and saved to: ${outputPath}`);
                // No need for a break as the function will naturally exit
            }
        };

        // Start the recursive prompting
        await promptNextAction();
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// Call the main function to start the application
main();