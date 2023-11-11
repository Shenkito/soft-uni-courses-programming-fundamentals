function formatGrade(grade) {
    let gradeText = '';

    if (grade < 3) {
        gradeText = "Fail";
    } else if (grade < 3.50) {
        gradeText = "Poor";
    } else if (grade < 4.50) {
        gradeText = "Good";
    } else if (grade < 5.50) {
        gradeText = "Very good";
    } else if (grade <= 5.50) {
        gradeText = "Excellent"
    }

    let valueText = grade < 3 ? '2' : grade.toFixed(2);

    console.log(`${gradeText} (${valueText})`); // тук може return `${gradeText} (${valueTect})`; , return връща стойноста , но не печата по конзолата
    
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);