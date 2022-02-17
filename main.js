const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const htmlMaker = (comp) => {
    const html = `<section id="computer--${comp.id}">
                    <h1>${comp.manufacturer} ${comp.make}</h1>
                    <div>Model: ${comp.model}</div>
                    <div>Memory: ${comp.specs.memory} GB</div>
                    <div>Hard drive space: ${comp.specs.hardDrive}</div>
                    <div>Processor speed: ${comp.specs.processor} Ghz</div>
                  </section>`
    return html
}

const aFunctionMadeThis = htmlMaker(computer)
console.log(aFunctionMadeThis)


/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */


/*// Object representing Ringer
const dog = {
	name: "Ringer",
	age: 4,
	breed: "Cocker Spaniel"
}

// Define a function to convert the object to a string
const dogHTMLMaker = (dogObject) => {
	// Make some HTML to represent the dog
	const dogHTMLSection = `<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old/section>`

	// Return the HTML
	return dogHTMLSection
}

// Invoke the function and give the minion what it needs to do its job.
const stringReturnedFromFunction = dogHTMLMaker(dog)

console.log(stringReturnedFromFunction)

> "<section>Ringer the Cocker Spaniel is 4 years old/section>"*/