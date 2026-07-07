/* 
Nested Loop Example in JavaScript
This file contains an example of nested loops in JavaScript. A nested loop is a loop inside another loop. The outer loop runs first, and for each iteration of the outer loop, the inner loop runs completely.

*/

const money = 100;

if(money >=1000){
    console.log("You can buy a iPhone");
}
else {
    if(money >= 500){
        console.log("You can buy a Samsung phone");
    }
    else{
        if(money >= 200){
            console.log("You can buy a Nokia phone");
        }
        else{
            console.log("You cannot buy any phone");
        }
    }
}

/* 

ekaner bisoy ta holo nested loop. Ekhane amra dekhte pachi je amra onek gula condition check korte pari. Ekhane amra dekhte pachi je money er upor depend kore kono phone kinte parbe kina. Jodi money 1000 er beshi hoy tahole iPhone kinte parbe, jodi 500 er beshi hoy tahole Samsung phone kinte parbe, jodi 200 er beshi hoy tahole Nokia phone kinte parbe, ar jodi kono condition match na kore tahole bole dibe je apni kono phone kinte parben na.
*/

/* 
Nested loops are useful when you need to perform complex checks or operations that depend on multiple conditions. In this example, we have a series of if-else statements that check the amount of money a person has and determine which phone they can afford to buy. Each condition is nested within the previous one, allowing for a clear and organized structure to handle multiple scenarios.

 */

//write a program that calculates the price of a meal based on the age of the customer. If the customer is 12 years old or younger, they eat for free. If the customer is 60 years old or older, they get a 50% discount. Otherwise, they have to pay full price.
