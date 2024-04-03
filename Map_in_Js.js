// Map = its an object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0;

//shoppingCart += store.get("t-shirt");
//console.log(shoppingCart);

//store.set("hat", 40);
//store.delete("jeans");

//console.log(store.has("underwear"));
console.log(store.size);


store.forEach((value, key) => console.log(`${key} $${value}`));