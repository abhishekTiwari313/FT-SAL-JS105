//Problem Statement: Write a program that calculates the area of a triangle given the base and the height. The area is determined using the formula: Area = (Base X Height)/2
//Requirements: Calculate the area using the formula provided. Print the result in a formatted string like: "The area of the triangle is: X" where X is the calculated area.
//Test Cases: Test Case 1: base = 10, height = 5. Expected output: "The area of the triangle is: 25.0"
// Test Case 2: base = 0, height = 15. Expected output: "The area of the triangle is: 0.0"
// Test Case 3: base = 8, height = 0. Expected output: "The area of the triangle is: 0.0"

function AreaOfTriangle(base,height){
    let Area = (base * height)/2
    console.log(Area)
} 
 AreaOfTriangle(10,5) //test case1
 AreaOfTriangle(0,15) //test case2
 AreaOfTriangle(8,0) //test case2
 


