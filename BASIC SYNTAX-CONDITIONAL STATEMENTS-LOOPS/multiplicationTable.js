function multiplicationTable(num) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        let numb = Number(i);
        result = num * numb;
        console.log(`${num} X ${numb} = ${result}`);
    }
}

multiplicationTable(2);