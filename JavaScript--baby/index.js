let fullName;
let password;


document.getElementById("submitBtn").onclick = function() {
    fullName = document.getElementById("nameLabel").value;
    password = document.getElementById("passwordLabel").value;

    document.getElementById("userDetails").innerHTML = "Hello " + fullName + " your password is " + password;

    console.log(`Hello ${fullName} your password is ${password}`);
}