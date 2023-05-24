// Global context
console.log(this) // window


// Object context
const Obj = {
  name: 'Abhishek',
  sayHello: function() {
	console.log('Hello, ' + this.name + '!');
  }
};
Obj.sayHello(); // Output: Hello, Abhishek!


// Constructor function
class Person {
    constructor(name) {
        this.name = name;
    }
}
const personFirst = new Person('Abhishek');
console.log(personFirst.name); // Output: Abhishek


// Event handler
const button = document.querySelector('button');
button.addEventListener('click', function() {
          	console.log('Button clicked:', this); })
// Output: Button element
