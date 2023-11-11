function movies(input) {
    
    for (let text of input) {

        let moviesObj = {};
        
        if (text.includes("addMovie")) {
            let movieTitle = text.replace("addMovie ", "");
            moviesObj.name = movieTitle;

            for (let textTwo of input) {

                if (textTwo.includes(`${movieTitle} directedBy`)) {

                    let directorName = textTwo.replace(`${movieTitle} directedBy `, "");
                    moviesObj.director = directorName;
                }

                if (textTwo.includes(`${movieTitle} onDate`)) {

                    let movieDate = textTwo.replace(`${movieTitle} onDate `, "");
                    moviesObj.date = movieDate;
                }
            }

            if (Object.keys(moviesObj).length === 3) {
                console.log(JSON.stringify(moviesObj));
            }
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );