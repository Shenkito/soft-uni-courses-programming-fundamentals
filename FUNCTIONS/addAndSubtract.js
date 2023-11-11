function addAndSubtract(n1, n2, n3) {

    
    let sumTwoNums = sum(n1, n2);
    let substract = sub(sumTwoNums, n3);

    
    function sum(a, b) {
        return a + b;
    }
    
    function sub(a, b) {
        return a - b;
    }

    console.log(substract);
}

addAndSubtract(23, 6, 10);

function addNSubtract(a, b, c) {

    let sum = (a, b) => a + b;
    let sub = (a, b) => a - b;

    let sumTwoNumbers = sum(a, b);
    let substract = sub(sumTwoNumbers, c);

    console.log(substract);

}

addNSubtract(23, 6, 10);