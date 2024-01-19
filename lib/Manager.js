const Employee = require('./Employee')
class Manager extends Employee {
    // Manager class constructor 
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the base class (Employee) using super        
        super(name, id, email);

        // Validation for office number
        if (!officeNumber || typeof officeNumber !== 'number' || isNaN(officeNumber) || officeNumber <= 0) {
            throw new Error('Invalid office number. Please provide a positive number.');
        }
        // Assign officeNumber to the Manager instance        
        this.officeNumber = officeNumber;
    }

    // Override the getRole method to return 'Manager'    
    getRole() {
        return 'Manager';
    }

    // Method to get the office number    
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;