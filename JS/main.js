// console.log("Hello World");
// console.log("This is java script")

// /*
// consloe.log("Logging some information to tha comsloe.");
// concloe.log("Another log entey");
// */
// // String, Number, Boolean, Object, Array

// // String
// let name = "John"; // String
// const PI = 3.14; // Number
// // Number
// let age = 30; // Number
// let height = 5.9; // Number

// fname = "Alice";
// // PI = 3.141421; ประกาศ const ไปแล้วจึงประกาศใหม่ไม่ได้ Error
// fname = "Bob";  
// console.log("Name:", fname);
// console.log("Age:", age);
// console.log("Height:", height);


// let number1 = '10';
// let number2 = '3';

// let result1 = number1 + number2;
// console.log("ผลบวก = ", result1);

// let namber1 = 10;
// let number2 = 20;
// let condition = namber1 < number2; // ได้ Boolean = true หรือ false
// console.log("condition", condition);


// let namber1 = 5;
// let number2 = 3;

// // if - else condition
// if (namber1 > number2){
//     console.log("this is if");
// } else if (number1 == number2){
//     console.log("this is else if")
// } else {
//     console.log("this is else");
// }   

// let score = prompt("กรุณาใส่คะแนนของคุณ");

// if (score >=80) {
//     console.log("Grade = A");
// } else if (score >=70 ){
//     console.log("Grade = B");      
// } else if (score >=60 ){
//     console.log("Grade = C");      
// } else if (score >=50 ){
//     console.log("Grade = D");      
// } else {
//     console.log("Grade = F");    
// }   


/**
 * && และ
 * || หรือ
 * ! not หรือ ไม่  
 */

// let number1 = 5;
// let number2 = 10;

// let conditon = (number1 > 0) && (number2 > 0) // true && true = true
// console.log("condition1:", conditon)

// let conditon2 = (number1 < 0) || (number2 > 0) // false || true = true
// console.log("condition2:", conditon2)

// let conditon3 = !(number1 > 0) // !true = false
// console.log("condition3:", conditon3)

// let age = 25
// let gender = "female"
// if (age >= 18 && gender == "female") {
//     console.log("คุณสามารถเข้าใช้บริการได้");
// }

// let number1 = 23

// if (number1 % 2 == 0) {
//     console.log("Even");
// }else {
//     console.log("Odd");
// }

let conter = 0
while (conter <=4){
    conter += 1;
    console.log("while:", conter); 
}

for (let i = 0; i <=4; i++  ){
    console.log("for:", i);
}