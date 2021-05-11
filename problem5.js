/*
    The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
*/
import {problem4} from "./problem4.js";

export function problem5(inventory, year) {
    let olderCars = []; 
    let newCarCount = 0;
    let yearArray = problem4(inventory); 

    console.log(yearArray); 
    for(let i = 0; i < yearArray.length; i++) {
        if(yearArray[i] > year) {
            newCarCount++; 
        }
        else if(yearArray[i] < year) {
            olderCars.push(yearArray[i]);
        }
    }
    console.log(`No. of cars newer than ${year}: ${newCarCount}`);
    console.log(`No. of cars older than ${year}: ${olderCars.length}`);
    return olderCars; 
}