// Import the Employee class, which Engineer extends
const Employee = require('./Employee');

// Engineer class definition, inheriting from the Employee class
class Engineer extends Employee {

    // Engineer class constructor    
    constructor(name, id, email, github) {

        // Call the constructor of the base class (Employee) using super
        super(name, id, email);

        // Assign the github parameter to the Engineer instance        
        this.github = github;
    }

    // Method to get the engineer's GitHub username    
    getGithub() {
        return this.github;
    }

    // Method to get the engineer's role    
    getRole() {
        return 'Engineer'
    }
}

// Export the Engineer class
module.exports = Engineer;