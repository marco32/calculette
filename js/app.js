// // Valeur A

// $("#V1, #V2, #V3, #V4, #V5, #V6, #V7, #V8, #V9, #V0").click(function(){
//     var text1= $("#nombre_a");
//     text1.val(text1.val()+ (this).value);
// });
// $("#Vc").click(function(){
//     var text1= $("#nombre_a");
//     text1.val("");
// });
// // Valeur B

// $("#B1, #B2, #B3, #B4, #B5, #B6, #B7, #B8, #B9, #B0").click(function(){
//     var text2= $("#nombre_b");
//     text2.val(text2.val()+ (this).value);
// });
// $("#Bc").click(function(){
//     var text2= $("#nombre_b");
//     text2.val("");
// });

// $( "#addition" ).click(function(){
//     var nombre_a = document.getElementById('nombre_a').value;
//     var nombre_b = document.getElementById('nombre_b').value;
//     afficher(parseInt(nombre_a)+parseInt(nombre_b));
    
// });

// $( "#soustraction" ).click(function() {
//     var nombre_a = document.getElementById('nombre_a').value;
//     var nombre_b = document.getElementById('nombre_b').value;
//     afficher(parseInt(nombre_a)-parseInt(nombre_b));
    
// });

// $( "#multiplication" ).click(function() {
//     var nombre_a = document.getElementById('nombre_a').value;
//     var nombre_b = document.getElementById('nombre_b').value;
//     afficher(parseInt(nombre_a)*parseInt(nombre_b));
// });


// $( "#division" ).click(function() {
//     var nombre_a = document.getElementById('nombre_a').value;
//     var nombre_b = document.getElementById('nombre_b').value;
//     afficher(parseInt(nombre_a)/parseInt(nombre_b));
// });

// function afficher(resultat){
//   //  alert(resultat);
//     $("#resultat").val(resultat);
//     return;
    
// };



var text1 = "";
var text2 = "";
var resultat;
// Valeur A

$("#V1, #V2, #V3, #V4, #V5, #V6, #V7, #V8, #V9, #V0").click(function(){
    text1= text1 + this.value;
    $("#nombre_a").val(text1);
});
$("#Vc").click(function(){
    text1 = $("#nombre_a");
    text1.val("");
    text1 = "";
});

// Valeur B

$("#B1, #B2, #B3, #B4, #B5, #B6, #B7, #B8, #B9, #B0").click(function(){
    text2= text2 + this.value;
    $("#nombre_b").val(text2);
});

$("#Bc").click(function(){
    text2 = $("#nombre_b");
    text2.val("");
    text2 = "";
});

$( "#addition" ).click(function(){
	resultat = (parseInt(text1)+parseInt(text2));
    $("#resultat").val(resultat);
});

$( "#soustraction" ).click(function() {
   resultat = (parseInt(text1)-parseInt(text2));
   $("#resultat").val(resultat); 
});

$( "#multiplication" ).click(function() {
    resultat = (parseInt(text1)*parseInt(text2));
    $("#resultat").val(resultat);
});


$( "#division" ).click(function() {
    resultat = (parseInt(text1)/parseInt(text2));
    $("#resultat").val(resultat);
});