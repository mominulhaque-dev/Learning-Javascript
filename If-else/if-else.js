// Write a program that calculates the price of a meal based on the age of the customer. If the customer is 12 years old or younger, they eat for free. If the customer is 60 years old or older, they get a 50% discount. Otherwise, they have to pay full price.


const age = 143;
const price = 500;

if(age <= 12){
    console.log("You can eat for free");
    

}
else if(age>= 60){
    const discount = price * 50 /100;
    const total = price - discount;
    const message = `Your discount is ${discount} and you have to pay ${total}`;
    console.log(message);
}
else{
    console.log("You have to pay full price")
}