let isMarried: boolean = true;

// Error
// isMarried = "Eko";

let age: number = 20;

// Error
// age = true;
// age = "Eko";

let firstName: string = "Eko";
let lastName: string = 'Khannedy';
let fullName: string = firstName + " " + lastName;

// Error
// lastName = true;

// let sayHello: string = "Hello " + fullName + ", Selamat Pagi";
let sayHello: string = `Hello ${fullName}, Selamat Pagi`;

console.log(sayHello);