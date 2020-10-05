class BMI {
    // initialize BMI data
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;

    }

    // Method for calculation
    calculateBMI() {

        // BMI formula
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

// Pass data and output calculated BMI
let MyBmi = new BMI(1.85, 65);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);