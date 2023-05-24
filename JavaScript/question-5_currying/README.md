## Example code for JS currying

function sum(a) {
	return (b) => {
    	return (c) => {
  	      return a + b + c
    	}
	}
}

console.log(sum(8)(9)(10)) // 27
