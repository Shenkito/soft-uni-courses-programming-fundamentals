function cats(arr) {
    

    class Cats {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catInfo of arr) {
        let [name, age] = catInfo.split(" ");
        let newCat = new Cats(name, age);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
console.log("===============");
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);