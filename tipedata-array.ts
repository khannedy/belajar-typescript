// array
let names: string[] = ["Eko", "Kurniawan", "Khannedy"];
let numbers: Array<number> = [1, 2, 3, 4, 5];

console.log(names[1]);

// mengubah array
names[1] = "Rudi";

console.log(names[1]);
console.log(numbers[4]);

// tuple
let student: [string, string, number] = ["1001", "Eko", 80];
let product: [string, number] = ["Handphone", 10000000];

console.log(student[1]);
console.log(product[1]);

product[1] = 5000000;
console.log(product[1]);

let namesLagi: Array<String> = [];
namesLagi.push("Eko");
namesLagi.push("Kurniawan");
namesLagi.push("Khannedy");

console.log(namesLagi);

namesLagi.push("Rudi");

console.log(namesLagi);

delete namesLagi[0];
delete namesLagi[3];

console.log(namesLagi);

console.log(student);
delete student[0];
console.log(student);