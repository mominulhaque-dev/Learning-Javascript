/* 
This file contains multiple operator functions for various mathematical operations. Each function is designed to perform a specific operation on the provided inputs. The operators included in this file are addition, subtraction, multiplication, division, and modulus.

multipule operator conditional operator holo onek gula conditional operator er combination use kora jay. Ekhane amra kichu example dekhabo jekhane multiple conditional operators use kora hoyeche.
Example: a > b ? (a > c ? "a is the largest" : "c is the largest") : (b > c ? "b is the largest" : "c is the largest");

*/

const salary = 50000;
const isBCS= true;
const height = 5.9;

if(salary > 40000 && isBCS && height > 5.5){
    console.log("You are eligible for marriage.");
}
// Check if salary is greater than 40000 and either isBCS is true or height is greater than 5.5

if(salary > 40000 && (isBCS || height > 5.5)){
    console.log("You are eligible for marriage.");
}
// Check if salary is greater than 40000 and either isBCS is true or height is greater than 5.5

if(salary > 40000 || (isBCS && height > 5.5)){
    console.log("You are eligible for marriage.");
}
// Check if salary is greater than 40000 or both isBCS is true and height is greater than 5.5

if(salary > 40000 && isBCS || height > 5.5){
    console.log("You are eligible for marriage.");
}
// Check if salary is greater than 40000 and isBCS is true or height is greater than 5.5

if(salary > 40000 || isBCS || height > 5.5){
    console.log("You are eligible for marriage.");
}
// Check if salary is greater than 40000 or isBCS is true or height is greater than 5.5

if(isBCS && height > 6.5){
    console.log("You are eligible for marriage.");
}
else{
    console.log("You are not eligible for marriage.");
}


/* 

upore amra dekhte pachi je multiple conditional operator use kore amra onek gula condition check korte pari. Ekhane amra dekhte pachi je salary, isBCS, height er upor depend kore marriage eligibility check kora hoyeche.

uporer code explain koro: 
*/