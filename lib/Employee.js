// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name = "Alice", id = 1, email = "alice@gmail.com") {

        if (!name || typeof name !== 'string' || name.trim() === '') {
            throw new Error('Invalid name. Please provide a non-empty string.');
        }

        if (!id || typeof id !== 'number' || id <= 0) {
            throw new Error('Invalid id. Please provide a positive number.');
        }

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            throw new Error('Invalid email. Please provide a valid email address.');
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }

}

module.exports = Employee;