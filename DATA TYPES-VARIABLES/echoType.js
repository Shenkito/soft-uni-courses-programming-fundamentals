function echoType(par) {
    let isType = (typeof par); // typeof показва какър тип е стринг число и т.н
    console.log(isType);

    if (isType === "string" || isType === "number") {
        console.log(par);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);