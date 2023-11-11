function arrayManipulations(input) {
   
    let array = input[0].split(' ').map(Number); 
    let commands = input.splice(1);

    for (let i = 0; i < commands.length; i++) {
        
        let currCommand = commands[i].split(' ')
        let command = currCommand[0];
        let params = currCommand.slice(1).map(Number);

        array = commandExecutor(command, params, array);

    }

    return array.join(" ");

    function commandExecutor(command, params, array) {

        
        switch(command) {
            
            case "Add": array.push(params[0]); return array;
            case "Remove": array = array.filter(element => element !== params[0]); return array;
            case "RemoveAt": array.splice(params[0], 1); return array;
            case "Insert": array.splice(params[1], 0, params[0]); return array;

        }

        return array;
    } 
}

console.log(arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
));