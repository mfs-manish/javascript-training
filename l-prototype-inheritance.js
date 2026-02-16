let animal = {
    eats: true,
    walk() {
        console.log('animal walks');
        console.log(this);
    }
};

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

// rabbit.walk();
// console.log(rabbit.eats);
animal.walk();