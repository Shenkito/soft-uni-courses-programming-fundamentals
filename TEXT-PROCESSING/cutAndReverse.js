function cutAndReverse(input) {

    let firstHalf = input.substring(0, input.length / 2); // взимам си първата половина от стринга
    let secondHalf = input.substring(input.length / 2, input.length); // после си взимам и втората

    let resultOne = "";
    let resultTwo = "";

    for (let i = firstHalf.length - 1; i >= 0; i--) { // итерирам по тях отзад напред за да ги обърна правилно
        resultOne += firstHalf[i]; // и ги добавям за принтиране 
        resultTwo += secondHalf[i]; // -/-/-/-/-/-/-/-
    }

    console.log(resultOne); // принтирам
    console.log(resultTwo); // принтирам
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log("================================");
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');