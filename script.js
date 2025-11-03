//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get Species(){
		return this.species;
	}
	makeSound(){
		return "The `${this.species}` makes a sound";
	}
}

class Dog extends Animal {
	super(species);
}
purr(){
	console.log("woof");
}

class Cat extends Animal {
	super(species);
}
purr(){
	console.log("purr");
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
