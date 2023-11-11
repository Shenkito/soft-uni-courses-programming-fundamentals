function nxnMatrix(num) {

    let result = "";

    for (let j = 0; j < num; j++) {
        
        for (let i = num; i > 0; i--) {
            let current = Number(num)
            result += current + " ";
        }

        console.log(result)
        result = "";
    }

}

nxnMatrix(3);
console.log("=====");
nxnMatrix(7);
console.log("=====");
nxnMatrix(2);