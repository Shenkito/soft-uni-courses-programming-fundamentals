function matchDates (input) {

    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    for (let date of input.toString().matchAll(regex)) { // тук превърнах входните данни от масив в стринг за да мога да приложа с matchAll regex`a , като на долния ред заради него мога да достъпя групите
        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`); // и тук си взимам по отделно деня, месеца и годината и ги принтирам.
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);