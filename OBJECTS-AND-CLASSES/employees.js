function employees(arr) {
    
    let employee = {

    }

    for (let i = 0; i < arr.length; i++) {
        let currName = arr[i];
        let personalNum = currName.length;

        employee.name = currName;
        employee.number = personalNum;

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }


}

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);
