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

// let conter = 0
// while (conter <=4){
//     conter += 1;
//     console.log("while:", conter); 
// }

// for (let i = 0; i <=4; i++  ){
//     console.log("for:", i);
// }


///////////////////////////////////


// let age1 = 25
// let age2 = 30
// let age3 = 35
// console.log(age1, age2, age3);

// let ages = [25, 30, 35]
// console.log(ages); // [25,30,35]
// console.log(ages[1]); // index ที่ 1 = 30

// // แทนที่ค่า array
// ages = [40, 45, 50]
// console.log(ages); // [40,45,50]

// // ต่อ,เพื่ม array
// ages.push(55)
// console.log(ages); // [40,45,50,55]

// // ความยาวของ array
// console.log(ages.length); // 4

// // ตัดตัวสุดท้ายออก
// ages.pop()
// console.log(ages); // [40,45,50]

// // array ในเงื่อนไข
// if (ages.includes(45)){ // true
//     console.log("พย 45 ในอาเรย์");
// }

// // เรียงลำดับ array จากน้อยไปมาก
// let numbers = [90, 60, 80, 40, 50]
// numbers.sort() // เรียงจากน้อยไปมาก
// console.log("เรียงจากน้อยไปมาก:", numbers); // [40,50,60,80,90]

// // array ใน string
// let names = ["John", "Alice", "Bob"]
// names.pop("Alice")
// names.push("Eve")
// console.log(names)
// console.log(names.length)
// console.log(names[2])

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// object //

// let student = [{
//     name: "John",
//     age: 20,
//     grade: "A"
// },{
//     name: "Alice",
//     age: 25,
//     grade: "B"
// }]

// for (let i = 0; i < student.length; i++){
//     console.log("Student", i+1 + ":")
//     console.log("Name:", student[i].name)
//     console.log("Age:", student[i].age)
//     console.log("Grade:", student[i].grade)
// }

// student.push({
//     name: "Bob",
//     age: 22,
//     grade: "C"
// })  

// console.log(student)


// Function //
// ประกาศฟังก์ชัน

// function calculate_grade(score){
//     if (score >= 80) {
//         grade = "A";
//     }  else if (score >= 70 ){
//         grade = "B";      
//     }  else if (score >= 60 ){
//         grade = "C";      
//     }  else if (score >= 50 ){
//         grade = "D";
//     }  else {
//         grade = "F";    
//     }
//     return grade;
// }

// let student_score = 75
// let student_geade = calculate_grade(student_score)
// console.log(student_geade)


// array //

// let score = [10, 20, 30, 40, 50]

// for (let i = 0; i < score.length; i++) {
//     // console.log(score[i])
//     console.log(`Score at index ${i} is ${score[i]}`)
// }

// score.forEach((s) => {
//     console.log('score', s)
// })


// score = score.map((s) => {
//     return s * 2
// })

// score.forEach((s) => {
//     console.log('new score:', s)
// })

// let score = [10, 20, 30, 40, 50]


// for (let index =  0; index < score.length; index++) {
//     console.log('score', score[index])

// }
// let newScore = score.filter((ns) => {
//     return ns >= 30
    
// })


// newScore.forEach((s) => {
//     console.log('new score :',s)
// })


// array + function //

let students = [
    {
        name: 'aa',
        score: '50',
        grade: 'D'
    },
    {
        name: 'bb',
        score: '120',
        grade: 'A'
    }
]

console.log('student : ', students[0])

let student = students.find((s) => {
    if (s.name == 'bb'){
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s 
})

console.log('student : ', student)
console.log(doublescore_student)

let highScore_student = students.filter((s) => {
    if (s.score >= 110){
        return true
    }
})

console.log('high score student : ', highScore_student)