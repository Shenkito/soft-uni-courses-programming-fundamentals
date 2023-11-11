function triangleOfNums(n) {

    for (let i = 1; i <= n; i++) {
        let result = '';
        for (let y = 1; y <= i; y++) {
            result += i + " ";
        }

        console.log(result);
    }
    
}

triangleOfNums(3)