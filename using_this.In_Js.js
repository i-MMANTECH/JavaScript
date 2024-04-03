// this. = reference to a particular object
//         the object depends on the immediate context

const car1 = {
    model: "Benz",
    color: "Black",
    year: 2021,

    drive: function() {
        console.log(`He drives ${this.model}`);
    }
}

const car2 = {
    model: "Chevrolet",
    color: "Blue",
    year: 2023,

    drive: function() {
        console.log(`She drives ${this.model}`);
    }
}

car1.drive();
car2.drive();