function reqReading(numPages, pagesPerHour, days2Go) {
    
    let totalTimeToReadTheBook = numPages / pagesPerHour;
    let reqHoursPerDay = totalTimeToReadTheBook / days2Go;

    console.log(reqHoursPerDay);
    
}

reqReading(212, 20, 2);