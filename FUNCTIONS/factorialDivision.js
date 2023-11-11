function factorialDivision(num1, num2) {

    factorialNum1 = fact(num1);
    factorialNum2 = fact(num2);

    console.log((factorialNum1 / factorialNum2).toFixed(2));

    function fact(number) {
        let result = 1;

        for (let i = number ; i > 0; i--) {

            result *= i;
        }
        return result;
    }
}

factorialDivision(5, 2);
console.log("==========");
factorialDivision(6 ,2);