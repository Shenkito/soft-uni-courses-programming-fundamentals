function orders(item, quantity) {
    
    let total = 0;

    switch (item) {
        case "coffee":
            total = quantity * 1.50;
        break;
        case "water":
            total = quantity * 1.00;
        break;
        case "coke":
            total = quantity * 1.40;
        break;
        case "snacks":
            total = quantity * 2.00;
        break;
    }

    console.log(total.toFixed(2));
}

orders("water", 5);
