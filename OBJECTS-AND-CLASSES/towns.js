function towns(arr) {

    
    let town = {

    }

    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split(" | ");

        town.town = newArr[0];
        town.latitude = Number(newArr[1]).toFixed(2);
        town.longitude = Number(newArr[2]).toFixed(2);

        console.log(town);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

console.log("======================");

towns(['Plovdiv | 136.45 | 812.575'])