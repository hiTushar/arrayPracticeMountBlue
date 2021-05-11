/*
 A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
*/

export function problem6(inventory, ...choice) {
    let options = []; 
    for(let i = 0; i < inventory.length; i++) {
        if(choice.includes(inventory[i].car_make)) {
            options.push(inventory[i]); 
        }
    }
    return options; 
}