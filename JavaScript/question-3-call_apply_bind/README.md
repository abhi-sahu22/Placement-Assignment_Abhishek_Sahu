## Example for .call(), .apply(), and .bind()

const person = {
           	firstName: 'Abhishek',
           	lastName: 'Sahu'
   	};


function greet(greeting) {

  console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
  
}

// If using .call() method:

greet.call(person, 'Hello');


// If using .apply() method:

greet.apply(person, ['Hello']);


// If using .bind() method:

const greetPerson = greet.bind(person);
greetPerson('Hello');
