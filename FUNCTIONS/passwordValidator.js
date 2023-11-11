function passwordValidator(password) {
    
    let isValidLength = false;
    let isChar = false;
    let isDigits = false;
    let isSpecialChar = false;

    let digits = 0;


    for (let i = 0; i < password.length; i++) {
        
        let currentDigits = password.charCodeAt(i);

        if (password.length >= 6 && password.length <= 10) {
            isValidLength = true;
        }

        if (currentDigits >= 65 && currentDigits <= 90 || currentDigits >= 97 && currentDigits <= 122) {
            isChar = true;

        } else if (currentDigits >= 48 && currentDigits <= 57) {
            digits++;
            isDigits = true;

        } else {
            isSpecialChar = true;
        }
    }
    
    if (!isValidLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (isSpecialChar) {
        console.log("Password must consist only of letters and digits");
    }

    if (digits < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (isValidLength && !isSpecialChar && isDigits) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');
console.log("==============");
passwordValidator('MyPass123');
console.log("===============");
passwordValidator('Pa$s$s');