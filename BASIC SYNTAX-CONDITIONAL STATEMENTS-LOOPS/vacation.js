function vacation(group, type, day) {
    let price = 0;

    switch (day) {
        case "Friday":

        if (type === "Students") {
            price = group * 8.45;
            if (group >= 30) {
                price = price * 0.85;
            }
        } else if (type === "Business") {
            price = group * 10.90;
            if (group >= 100) {
                price = (group - 10) * 10.90;
            }
        } else if (type === "Regular") {
            price = group * 15;
            if (group >= 10 && group <= 20) {
                price = price * 0.95;
            }
        }
        break;
        case "Saturday":

        if (type === "Students") {
            price = group * 9.80;
            if (group >= 30) {
                price = price * 0.85;
            }
        } else if (type === "Business") {
            price = group * 15.60;
            if (group >= 100) {
                price = (group - 10) * 15.60;
            }
        } else if (type === "Regular") {
            price = group * 20;
            if (group >= 10 && group <= 20) {
                price = price * 0.95;
            }
        }
        break;
        case "Sunday":

        if (type === "Students") {
            price = group * 10.46;
            if (group >= 30) {
                price = price * 0.85;
            }
        } else if (type === "Business") {
            price = group * 16;
            if (group >= 100) {
                price = (group - 10) * 16;
            }
        } else if (type === "Regular") {
            price = group * 22.50;
            if (group >= 10 && group <= 20) {
                price = price * 0.95;
            }
        }
    }
    
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");