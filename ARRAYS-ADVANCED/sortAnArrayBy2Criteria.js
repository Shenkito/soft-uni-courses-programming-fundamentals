function sortAnArrayBy2Criteria(array) {

    array.sort((wordA, wordB) => {
        
        if (wordA.length - wordB.length === 0) {
            
            return wordA.localeCompare(wordB);
        }
        
       return wordA.length - wordB.length;
    
    });

    console.log(array.join("\n"));
    
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log("======================================");
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);