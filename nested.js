// Nested  if - else statement

const money = 1;

if (money > 500) {
  console.log(" bro You are very rich");
} else {
  if (money > 200) {
    console.log("You are the middle person");
  } else {
    if (money > 100) {
      console.log("You are the poor person");
    } else {
      console.log("You are the very poor person");
    }
  }
}

/* 
 ekane nested if else statement use kora hoyese
 mane if er modde if else statement use kora hoyese

 if else statement er kaj holo kono condition true hole oi block er code execute hobe, r jodi condition false hoy tahole else block er code execute hobe. 
 
 nested if else statement er kaj holo kono condition true hole oi block er code execute hobe, r jodi condition false hoy tahole else block er code execute hobe. r jodi else block er moddeo aro ekta condition thake tahole seta check kora hobe. mane nested if else statement er modde aro ekta if else statement thakte pare.
 
*/

const tk = 10;

if (tk > 600){
  console.log("You are very rich");
}
else if (tk > 400){
  console.log("You are the middle person");
}
else if (tk > 200){
  console.log("You are the poor person");
}
else{
  console.log("You are the very poor person");
}
/* 
Explained: eta holo else if statement er maddhome ekta condition check kore, jodi seta true hoy tahole oi block er code execute hobe. r jodi false hoy tahole next else if statement check hobe. r jodi shob false hoy tahole else block er code execute hobe.
*/