/*
 The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/

export function problem3(inventory) {
    return inventory.sort((a, b) => {
        if(a.car_model < b.car_model) {
            return -1; 
        }
        else {
            return 0; 
        }
    }); 
}