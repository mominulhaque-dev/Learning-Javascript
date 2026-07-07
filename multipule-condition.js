// multi level if else condition

const marks = 85;

if (marks >=90){
    console.log("You got GPA:5");
}
else if (marks >=80){
    console.log("You got GPA:4");
}
else if (marks >=70){
    console.log("You got GPA:3");
}
else if (marks >=60){
    console.log("You got GPA:2");
}
else{
    console.log("You are failed")
}

/* 
ekane amra dekhte pachi je multi level if else condition use kore amra onek gula condition check korte pari. Ekhane amra dekhte pachi je marks er upor depend kore GPA calculate kora hoyeche.
*/

const workExperience = 0;
const salary = 500;

if(workExperience >= 10){
    const bonus = salary * 20/100;
    const TotalSalary = salary + bonus;
    console.log(`Congratulation! You got bonus ${bonus} and your total salary is ${TotalSalary}`);
}
else if(workExperience >= 5 && workExperience <10){
    const bonus = salary * 5/100;
    const salaryWithBonus = salary + bonus;
    console.log(`Congratulation! You got bonus ${bonus} and your total salary is ${salaryWithBonus}`);
}
else if( salary < 50000 && workExperience < 5){
    console.log("You are not eligible for bonus");
}

else{
    console.log("You are not employed in this company");
}
/* 
Explained: This is a multi-level if-else condition that checks the work experience and salary to determine the bonus amount and total salary.
ekaner vulo holo je amra workExperience er upor depend kore bonus calculate korte pari. Jodi workExperience 10 years er beshi hoy tahole 20% bonus pabe, jodi 5-10 years er moddhe hoy tahole 5% bonus pabe, ar jodi salary 50000 er kom hoy ebong workExperience 5 years er kom hoy tahole kono bonus pabe na. Ar jodi kono condition match na kore tahole bole dibe je apni ei company te employed na.

ami cacchi je amra ekta program likhi jekhane amra multiple condition check korte pari. Ekhane amra dekhte pachi je workExperience, salary er upor depend kore bonus calculate kora hoyeche.

*/