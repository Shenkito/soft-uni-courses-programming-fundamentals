function calculator(num1, op, num2) {
    let sum = 0;

    switch (op) {

        case '+':
            sum = num1 + num2;
        break;
        case '-':
            sum = num1 - num2;
        break;
        case '/':
            sum = num1 / num2;
        break;
        case '*':
            sum = num1 * num2;
        break;

    }

    console.log(sum.toFixed(2));
}

calculator(5, `+`, 10);
calculator(25.5, '-', 3);