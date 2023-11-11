function reverseInPlace(array) {
    let reversed = " ";
    
    for (let i = array.length - 1; i >= 0; i--) {
        let current = array[i];
        reversed += current + " ";
    }

    console.log(reversed);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);