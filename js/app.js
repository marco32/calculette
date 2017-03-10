






$( "#addition" ).click(function addition (){
	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)+parseInt(nombre_b));
});

$( "#soustraction" ).click(function soustraction() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)-parseInt(nombre_b));
});

$( "#multiplication" ).click(function multiplication() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)*parseInt(nombre_b));
});


$( "#division" ).click(function division() {
	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)/parseInt(nombre_b));
});




function addition (a, b){
	return a + b;
};

function soustraction(a, b) {
	return a - b;
};

function multiplication(a, b) {
	return a * b;
};

function division(a, b) {
	return a / b;
};