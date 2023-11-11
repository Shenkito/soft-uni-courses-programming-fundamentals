function loadingBar(num) {
    
    let loadingBar = "";

    for (let i = 0; i < num / 10; i++) {
        loadingBar += "%"
    }

    for (let j = 0; j < 10 - num / 10; j++) { // числото делено на 10 - 10 и резултата е колко процента остават да се зареди тоест с числото 30 сме заредили на 3 и ни остават още 7 (30% от 100 = остатък 70)
        loadingBar += ".";
    }

    if (num === 100) {
        console.log("100% Complete!");
        console.log(`[${loadingBar}]`);
    } else {
        console.log(`${num}% [${loadingBar}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);
console.log("------");
loadingBar(50);
console.log("------");
loadingBar(100);