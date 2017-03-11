// Valeur A
$("#V1").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("1"));
});
$("#V2").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("2"));
});
$("#V3").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("3"));
});
$("#V4").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("4"));
});
$("#V5").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("5"));
});
$("#V6").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("6"));
});
$("#V7").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("7"));
});
$("#V8").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("8"));
});
$("#V9").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("9"));
});
$("#V0").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ ("0"));
});

// Valeur B
$("#B1").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("1"));
});
$("#B2").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("2"));
});
$("#B3").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("3"));
});
$("#B4").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("4"));
});
$("#B5").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("5"));
});
$("#B6").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("6"));
});
$("#B7").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("7"));
});
$("#B8").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("8"));
});
$("#B9").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("9"));
});
$("#B0").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ ("0"));
});





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