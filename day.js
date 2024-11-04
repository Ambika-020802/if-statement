//Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not eligible”

// var age="22"
// if (age > 18) {
//     console.log("eligible for vote")
//     }
//     else{
//         console.log(" eligible for vote");

//     }


// Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining"

// var rainy="true";
// if(rainy){
//     console.log("its pouring outside");
//     }
//     else{
//         console.log("not raining");




// Students marks is 76, console the grade of students based on marks;
//     90+ →  A+
//    81 – 90 —> A
//   71 – 80  —> B+
//  61 — 70 —-> C+
// 51– 60 —-> C
// 40 – 50   —> D
// Below 50 → fail



function getGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    } else if (marks >= 81) {
        return 'A';
    } else if (marks >= 71) {
        return 'B+';
    } else if (marks >= 61) {
        return 'C+';
    } else if (marks >= 51) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'fail';
    }
}

const marks = 76;
const grade = getGrade(marks);
console.log(`The grade for marks ${marks} is: ${grade}`)



