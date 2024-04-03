// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//        use . to access properties/methods

const car1 = {
    model: "Mustang",
    color: "Black",
    year: 2024,

    drive: function() {
        console.log("You drive the car");
    },
    brake: function() {
        console.log("You stepped the brakes ");
    }
}

const car2 = {
    model: "Chevrolet",
    color: "Black",
    year: 2022,

    drive: function() {
        console.log("You drive the car");
    },
    brake: function() {
        console.log("You stepped the brakes ");
    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();