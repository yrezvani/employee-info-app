class Employee {

    // Employee class constructor with default values    
    constructor(name = "Alice", id = 1, email = "alice@gmail.com") {

        // Input validation for name
        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Invalid name. Please provide a non-empty string.');
        }

        // Input validation for id        
        if (!id || typeof id !== 'number' || id <= 0) {
            throw new Error('Invalid id. Please provide a positive number.');
        }

        // Input validation for email
        if (!email || typeof email !== 'string' || !email.includes('@')) {
            throw new Error('Invalid email. Please provide a valid email address.');
        }

        // Assign validated values to properties        
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method to get the employee's name    
    getName() {
        return this.name;
    }

    // Method to get the employee's id    
    getId() {
        return this.id;
    }

    // Method to get the employee's email    
    getEmail() {
        return this.email;
    }

    // Method to get the employee's role  
    getRole() {
        return 'Employee'
    }

}

// Export the Employee class
module.exports = Employee;