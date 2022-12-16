
// Exercise 6
function validate() {
	event.preventDefault();

	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email

	const emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if(fName.value == "" || fName.value.length < 3 || !fName.value.match('^[a-zA-Z]+$')){
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
	}

	if(fLastN.value == "" || fLastN.value.length < 3 || !fLastN.value.match('^[a-zA-Z]+$')){
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || !fEmail.value.match(emailFormat)){
		fEmail.classList.add("is-invalid");
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
	}
	
	if(fPassword.value == "" || fPassword.value.length < 3 || !fPassword.value.match('^[0-9a-zA-Z]+$')){
		fPassword.classList.add("is-invalid");
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		fAddress.classList.add("is-invalid");
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
	}

	if(fPhone.value == "" || fPhone.value.length != 9  || !fPhone.value.match('^[0-9]*$')){
		fPhone.classList.add("is-invalid");
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
