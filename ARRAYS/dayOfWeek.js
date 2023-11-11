function dayOfWeek(day) {
    let array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    if (day >= 1 && day <= 7) {
        console.log(array[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek(0);