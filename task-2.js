// Task-2 :Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

var Math =56;
var Bio =90;
var chem =32;
var phy =58;
var Bangla = 93;

var totalMarks = Math + Bio + chem + phy + Bangla;
var avgMarks = totalMarks / 5;

console.log("tota marks find = " + totalMarks);

console.log("Total avg marks = " + avgMarks);

if (avgMarks >= 80){
    console.log("He is pro ");
    
}
else{
    console.log("he is my bro")
}