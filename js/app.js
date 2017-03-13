// Valeur A

$("#V1, #V2, #V3, #V4, #V5, #V6, #V7, #V8, #V9, #V0").click(function(){
    var text1= $("#nombre_a");
    text1.val(text1.val()+ (this).value);
});
$("#Vc").click(function(){
    var text1= $("#nombre_a");
    text1.val("");
});
// Valeur B

$("#B1, #B2, #B3, #B4, #B5, #B6, #B7, #B8, #B9, #B0").click(function(){
    var text2= $("#nombre_b");
    text2.val(text2.val()+ (this).value);
});
$("#Bc").click(function(){
    var text2= $("#nombre_b");
    text2.val("");
});

$( "#addition" ).click(function(){
    var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    afficher(parseInt(nombre_a)+parseInt(nombre_b));
	
});

$( "#soustraction" ).click(function() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    afficher(parseInt(nombre_a)-parseInt(nombre_b));
    
});

$( "#multiplication" ).click(function() {
 	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    afficher(parseInt(nombre_a)*parseInt(nombre_b));
});


$( "#division" ).click(function() {
	var nombre_a = document.getElementById('nombre_a').value;
    var nombre_b = document.getElementById('nombre_b').value;
    afficher(parseInt(nombre_a)/parseInt(nombre_b));
});

function afficher(resultat){
  //  alert(resultat);
    $("#resultat").val(resultat);
    return;
    
};

