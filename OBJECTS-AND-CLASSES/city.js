function city(input) {

    let cityInfo = Object.entries(input); // тук с така подадените данни долу , тази команда ми връща array от arrays всеки с по два елемента ключ/value
    console.log(cityInfo);

    for (let [key , value] of cityInfo) { // така вече тук мога с този синтаксис директно да си взема ключа и value от горния ред ?деструктуриране?
        console.log(`${key} -> ${value}`);
    }
}

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);


function cityTest(object) { // друго валидно разписване

    for (let key of Object.keys(object)) {
        console.log(`${key} -> ${object[key]}`);
    }
}

cityTest({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);