var salary; //Global Variables
var benefits;
var personalRelief = 7400

function calculate() {
    salary = parseInt(employeeForm.num1.value);
    benefits = parseInt(employeeForm.num2.value);


// Calculating Gross Salary and PAYE

if (salary <= 24000) {
    gross = salary * (10/100)


}
else if (salary > 24000 && salary <= 32333) {
    gross = salary * (25/100)


}
else  {
    gross = salary * (30/100)
}

document.write(`Gross salary is: ${gross }` + '<b>' + '</b> \n')

var paye = gross - personalRelief

// Calculating NHIF

if (gross <=  5999) {
    nhif = gross - 150
}
else if (gross > 5999 && gross <= 7999) {
    nhif = gross - 300
}
else if (gross > 8000 && gross <= 11999) {
    nhif = gross - 400
}
else if (gross > 12000 && gross <= 14999) {
    nhif = gross - 500
}
else if (gross >15000 && gross <= 19999) {
    nhif = gross - 600
}
else if (gross > 20000 && gross <= 24999 ) {
    nhif = gross - 750
}
else if (gross > 25000 && gross <= 29999) {
    nhif = gross - 850
}
else if (gross > 30000 && gross <= 34999) {
    nhif = gross - 900
}
else {
    nhif = gross - 950
}

document.write(`\n NHIF is: ${nhif }` + '<b>' + '</b>\n')

// Calculating NSSF

if (gross < 6000 ) {
    nssf = gross * (6/100)

}
else {
    nssf = gross * (6/100)
}

document.write(`\n NSSF is: ${nssf }` + '<b>' + '</b>\n')

// Calculating Total Income

var totalIncome = gross + benefits - (paye + nhif + nssf)

document.write(`\n Total Income is: ${totalIncome }` + '<b>' + '</b>\n ')



}

