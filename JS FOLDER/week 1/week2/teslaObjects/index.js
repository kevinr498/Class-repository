let dog = {
    name: 'fido',
    numberOfLegs: 4,
    friends: [
        {name: "sally", numberOfLegs: 4},
        {name: "Teddy", numberOfLegs: 4}
    ],
    mom: {
        name: "carrie",
    },
    talk: function() {
        console.log('bark');
    },

};

console.log(dog.friends[0].name);
const { name, mom, friends } = dog;
console.log(mom);
console.log(name);
console.log(friends)

Object.freeze(dog);
dog.test = "test";
console.log(dog.test)


class Animal2 { constructor (name, age, legs) {
this.name = name,
this.age = age,
this.legs = legs
}
talk() {console.log(
    `my name is ${this.name}`
)}}
