function theatrePromo(typeDay, age) {

    let price = 0;

    switch (typeDay) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            }
        break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            }
        break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            }
        break;

    }

    if (age < 0 || age > 122) {
        console.log("Error!")
    } else {
    console.log(`${price}$`);
    }
}

theatrePromo("Weekday", 133);