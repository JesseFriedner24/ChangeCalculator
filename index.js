//user input
$( "button" ).click(function() {
 var sale = $("#firstInput").val();
 var customer = $("#secondInput").val();
 var change = customer - sale;
//round down dollars
var dollar = Math.floor(change);
 $("#dollar").html(dollar);
change = change - dollar;
//round down quarters
var quarters = Math.floor(change / .25);
 $("#quarters").html(quarters);
change %= .25; 
//round down dimes
var dimes = Math.floor(change / .1);
 $("#dimes").html(dimes);
change %= .1;
//round down nickels
var nickels = Math.floor(change / .05);
 $("#nickels").html(nickels);
change %=.05;
//round down pennies
var pennies = Math.floor (change / .01);
 $("#pennies").html(pennies);
change %=.01;
}); 






 







