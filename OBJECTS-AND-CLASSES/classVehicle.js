function classVehicle() {

    class Vehicle {
        constructor(type, model, parts, fuel) { // създавам клас вейкъл който има следните пропъртис , вид , модел , части , гориво
            
            this.type = type; // вида е 'а' който подавам доло в new Vehicle
            this. model = model; // модела е следващото тоест 'b'
            this.parts = { // частите ги имам от доло като обект
                engine: parts.engine, // двигател който е 6 вижда се доло в newVehicle
                power: parts.power, // мощност която е 100 вижда се доло в newVehicle
                quality: parts.engine * parts.power // и качеството което получавам след като умножа двигатела по пауъра
            };
            this.fuel = fuel; // и тук взимам горивото което е в newVehicle тоест 200

        }

        drive(fuelLoss) { // създавам функция която при викането и 
            this.fuel -= fuelLoss; // от горивото което имам ще извадя стойноста с която съм е повикана. Тоест в случая с 100
        }
    }

    let parts = { engine : 6, power: 100 }; // тук частите създадени като обект
    let vehicle = new Vehicle ('a', 'b', parts, 200); // и тук подавам на class'a 'а' е вида 'b' е модела , частите и горивото

    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}


classVehicle();