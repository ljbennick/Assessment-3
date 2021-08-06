console.log("hello world");
let test = document.getElementById("picture")


function handleSubmit(evt) {
	evt.preventDefault();

	alert ("Form submitted successfully")
	
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
test.addEventListener("mouseover", function(event){
	alert ("Wow you smell nice")
	// setTimeout(1000)
})

