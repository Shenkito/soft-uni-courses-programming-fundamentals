function schoolGrades(input) {

    let studentInfo = {};
    let count = {};

    for (let line of input) {
        let info = line.split(" ");
        let studentName = info[0];

        if (!count.hasOwnProperty(studentName)) {
            count[studentName] = 0
        }

        for (let i = 1; i < info.length; i++) {

            let studentGrades = Number(info[i]);
            if(studentInfo.hasOwnProperty(studentName)) {
                studentInfo[studentName] += studentGrades;
                count[studentName] += 1;
            } else if (!studentInfo.hasOwnProperty(studentName)) {
                studentInfo[studentName] = studentGrades;
                count[studentName] = 1;
            }
        }
    }

    let sortedStudents = Object.keys(studentInfo).sort();

    for (let student of sortedStudents) {
        let averageGrade = studentInfo[student] / count[student];
        console.log(`${student}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);