class Vehicle{

    // initialize Vehicle data
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method which logs vehicle data to console
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Inherits info from parent class
class Cars extends Vehicle {

    constructor(make, model, year, doors){
        // Call constructor from parent class
        super(make, model, year);
        this.doors = doors;

    }

    Information(){
        // Call method from parent class
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

// Pass data to the class Cars 
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();