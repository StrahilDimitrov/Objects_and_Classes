function catInfo(inputArray) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const ele of inputArray) {
        let currentEl = ele.split(' ');
        let name = currentEl[0];
        let age = currentEl[1];

        let newCat = new Cat(name, age);

        newCat.meow();
    }
}
catInfo(['Mellow 2', 'Tom 5'])