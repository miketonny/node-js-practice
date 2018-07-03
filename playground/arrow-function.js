var square = x => x * x;

console.log(square(9));


var user = {
    name: 'Mike', 
    sayHi: () => { 
        console.log(`Hi. I'm ${this.name}`); //this keyword not bound
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3);