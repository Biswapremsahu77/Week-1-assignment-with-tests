/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 -> gives 0
2. Sum from 1-100000 -> 0.005
3. Sum from 1-1000000000 -> gives 4.657
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startdate = new Date() ;
     let timeStart = date.getTime() ;
    let sum = 0; 
    for(let i = 1 ; i<n ; i++){
        sum+=i ;
    }
     const Enddate = new Date()
     let timeEnd = date.getTime() ;
     let timePassed = (timeEnd - timeStart) /1000 ;
    return  timePassed;
}