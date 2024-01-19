// Import the Employee class, which Intern extends
const Employee = require('./Employee')

// Intern class definition, inheriting from the Employee class
class Intern extends Employee {

    // Intern class constructor    
    constructor(name, id, email, school) {

        // Call the constructor of the base class (Employee) using super        
        super(name, id, email);

        // Assign the school parameter to the Intern instance
        this.school = school
    }

    // Method to get the intern's school    
    getSchool() {
        return this.school;
    }

    // Method to get the intern's role, which is 'Intern'    
    getRole() {
        return 'Intern';
    }
}

// Export the Intern class
module.exports = Intern;