// 1.
// let a = prompt('Nhập a: ');
// let b = prompt('Nhập b: ');
// let temp = 0;
// console.log(a,b);
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);




//2.
// const a = "Turn your face to the sun";
// console.log(a.split(" "));



//3.
// const b = [1, 2, 3, 4];
// console.log(...b);


//4.
// const shop = ["The current items are:", "1. Jeans", "2. T-Shirt", "3. Socks"];

// while (true) {

// const a = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();

// if (a === "R") {
//     for (let i = 0; i <= shop.length - 1; i++) {
//     console.log(shop[i]);
//     }
// }else if (a === "C") {
//     const newItem = prompt("Enter the name of the new item:");
//     shop.push(newItem);
//     alert("Done");
//     const a = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (a === "U") {
//     let index = Number(prompt("Enter the position you want to update:"));
//     let newName = prompt("Enter the new name:")
//     shop[index] = newName;
//     alert("Done");
//     const a = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (a === "D") {
//     let index = Number(prompt("Enter the position you want to update:"));
//     shop.splice(index, 1);
//     alert("Done");
//     const a = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)").toUpperCase();
//     for (let i = 0; i <= shop.length - 1; i++) {
//         console.log(shop[i]);
//         }
// }else if (a === "E") {
//     alert("This command is not supported");
// }else {
//     alert("This command is not supported");
// }};



//5.
// let a = prompt("Enter a squence of Number, separated by commas ( , ):").split(',');

// let sumofnum = 0;

// for (let i = 0; i < a.length; i++) {
//     sumofnum += parseInt(a[i]);
// }

// alert("The sum of them is " + sumofnum);

//6.
// let a = prompt("Enter a squence of numbers, separated by (,)").split(',');

// let b = Math.min(...a);

// alert("The smallest number is " + b);




//7.

// let arrNumbers = [2, 4, 36, 20, 0, 55, 24, 19];

// let searchNumber = Number(prompt("Enter the number which you want to search"));

// let result = arrNumbers.indexOf(searchNumber,0);
// if(result === -1) {
//     alert(`${searchNumber} is NOT FOUND in my array`);
// } else alert(`${searchNumber} is FOUND in my array at index ${result}`);


//10.

// let a = prompt("Enter a squence of names");
// let arr = a.split(", ",100);
// let stringUpdate = "";
// arr.forEach(function(value,index){
//     stringUpdate += `<${value}>,`; 
// });
// alert(`${a} => ${stringUpdate.substring(0,stringUpdate.length-1)}`);

//11.

// let a = prompt("Enter a sequence numbers");
// let array = a.split(",",100);

// let newarray = array.filter(function(value,index){
//     return value%2==1;
// });

// let b = newarray.join(",");

// alert(`${a} => ${b}`);
