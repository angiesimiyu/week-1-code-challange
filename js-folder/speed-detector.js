var speed; //Global Variable
// demerits = ((speed - 70) / 5);
function calculate() {
    speed = parseInt(speedForm.num1.value);
    var demerits = (speed - 70) / 5;


if (speed > 70 && demerits < 12) {
    // return "License Suspended";
    document.write(`Points is: ${demerits }` + '<b>' + '</b>')

} else if (demerits >= 12){
    // return "Ok"
    document.write(`Points is: ${demerits }` + '<b>' + '</b> \n ')
    document.write(' \n The result is : ' + '<b>' + 'License Suspended' + '</b>')
} else {
    document.write('The result is : ' + '<b>' + 'Ok' + '</b>')
}


}