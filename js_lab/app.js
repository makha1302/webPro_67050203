// console.log("Hello from app.js!");
// let score;
// while (true) {
//     let EnterScore = prompt("คะแนนสอบ");
//     if (score > 100 || score < 0) {
//     console.log("ข้อมูลไม่ถูกต้อง");
//     }
//     else {
//         score = EnterScore;
//         break;
//     }
// }
// if (score >= 50) {
//     console.log("สอบผ่าน")
// }
// else {
//     console.log("สอบไม่ผ่าน")
// }

// let scores = [45, 78, 82, 35, 90];
// scores.push(65)
// scores.push(48)
// scores.sort()
// console.log("ใช้ sort")
// for (let index = 0; index < scores.length; index++) {  
//     console.log("ตัวที่ " + (index+1) + " " + scores[index]);
// }
// scores.pop()
// scores.pop()

// console.log("ใช้ pop")
// let index = 0;
// while(true){
//     console.log("ตัวที่ " + (index+1) + " " + scores[index]);
//     index += 1
//     if (index == scores.length) {
//         break;
//     }
// }
// if(scores.includes(85)== true){
//     console.log("กรณีที่มี")
//     console.log("true")
// } else {
//     console.log("กรณีที่ไม่มี")
//     console.log("false")
// }

// let students = [
// { id: 1, name: "Somchai", score: 48 },
// { id: 2, name: "Somsri", score: 75 },
// { id: 3, name: "Sompong", score: 32 },
// { id: 4, name: "Somnak", score: 85 }
// ];

// students.forEach((student) => {   
//     console.log(`ชื่อนักศึกษา: ${student.name} ได้คะแนน: ${student.score}`);
// });

// let doubleScores = students.map((student) => student.score * 2);

// console.log(doubleScores)

// let filterScores = students.filter((student) => student.score > 50);
// console.log(filterScores);

// const found = students.find((student) => student.name == "Somsri")
// console.log(found)

// function calculateGrade(score){
//     if (score >= 80) {
//         console.log("ได้เกรด A")
//     } 
//     else if (score >= 60) {
//         console.log("ได้เกรด B")
//     }
//     else {
//         console.log("ได้เกรด F")
//     }

// }

// calculateGrade(60);

const myNumber = prompt("พิมพ์เลข 1-6")

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

botNumber = (getRandomInt(1, 6));

if (myNumber == botNumber) {
    console.log("ยินดีด้วย! คุณทายถูกต้อง เลขที่ออกคือ [" + myNumber +"]")
}
else {
    console.log("เสียใจด้วย! คุณทายผิด บอททอยลูกเต๋าได้เลข [" + botNumber + "]")
}