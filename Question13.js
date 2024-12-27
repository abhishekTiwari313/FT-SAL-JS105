//Problem Statement: You are creating a score management system for student results. Start with an array of 10 student scores. The program should do the following:

//For any student with a score below 40, increase their score by 20. For students with scores over 90, adjust their score to a maximum of 90. Count and log how many students passed (score of 50 or more) after the adjustments. Log the final adjusted array of scores.

let scoreManagement = [30,40,50,45,56,32,82,98,81,96]
let count =0
for(let i=0; i<scoreManagement.length-1; i++){
    if(scoreManagement[i] < 40){
        scoreManagement[i]+=20;
    }
    if(scoreManagement[i]> 90){
        scoreManagement[i]= 90
    }
    if(scoreManagement[i]>=50){
        count++;
    }
}
console.log("final adjusted", scoreManagement)
console.log("Number of student who passed", count)