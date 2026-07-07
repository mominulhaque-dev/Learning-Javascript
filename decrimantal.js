

let n = 10;

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

for (let n = 1; n <= 30; n++) {
    if (n % 5 === 0) {
        console.log(`The multiple of 5 is ${n}`);
    }
}

for (let n = 1; n <= 30; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(`The multiple of 3 and 5 is ${n}`);
    }
}

let ageNumber = 0;

for (let age = 1; age <= 100; age++) {
    if (age % 2 === 0) {
        console.log(`The even number is ${age}`);
        ageNumber = ageNumber + age;

    }
}

console.log(`The sum of even numbers from 1 to 100 is ${ageNumber}`);
