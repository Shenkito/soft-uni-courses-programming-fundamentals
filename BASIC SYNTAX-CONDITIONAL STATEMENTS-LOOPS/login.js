function login(input) {

    let username = input[0];
    let password = "";

    for (let i = username.length - 1; i >= 0 ; i--) {
        password += username[i];
    }

    let countIncorrectPass = 0;

    for (let y = 1; y < input.length; y++) {
        let currentPass = input[y];

        if (currentPass === password) {
            console.log(`User ${username} logged in.`);
        } else {
            countIncorrectPass++;

            
            if (countIncorrectPass === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log("Incorrect password. Try again.");
    
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);