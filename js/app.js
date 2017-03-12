// Valeur A

$("#V1, #V2, #V3, #V4, #V5, #V6, #V7, #V8, #V9, #V0, #Vc").click(function(){
    var text= $("#nombre_a");
    text.val(text.val()+ (this).value);
});

// Valeur B

$("#B1, #B2, #B3, #B4, #B5, #B6, #B7, #B8, #B9, #B0, #Bc").click(function(){
    var text= $("#nombre_b");
    text.val(text.val()+ (this).value);
});


$( "#addition" ).click(function(){
	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)+parseInt(nombre_b));
});

$( "#soustraction" ).click(function() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)-parseInt(nombre_b));
});

$( "#multiplication" ).click(function() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)*parseInt(nombre_b));
});


$( "#division" ).click(function() {
	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    alert(parseInt(nombre_a)/parseInt(nombre_b));
});



