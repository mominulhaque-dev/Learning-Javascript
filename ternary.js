/* 
ternary mane holo conditional operator. Ekhane amra dekhte pachi je amra onek gula condition check korte pari. Ekhane amra dekhte pachi je salary, isBCS, height er upor depend kore marriage eligibility check kora hoyeche.
*/

// const age= 18;
// const numberOfChildren = 4;
// const isMarried = true;

// age >= 17 && numberOfChildren >= 1 ? isMarried ? console.log("You are eligible for marriage") : console.log("You are not eligible for marriage") : console.log("You are not eligible for marriage");

const age = 18;
const numberOfChildren = 4;
const isMarried = true;

age >=18 ? console.log("You are eligible for Vote"): console.log("YOu are not eligible for Vote");

age >= 17 && numberOfChildren >=1 && isMarried ? console.log("You are already married person"): console.log("You are not married person");

age >= 18 && isMarried ? console.log("You are already married "): console.log("You are not eligible for marriage");

age <18 ? console.log("You are not eligible for marriage") : numberOfChildren >=1 && isMarried ? console.log("You are already married person") : console.log("You are not married person");