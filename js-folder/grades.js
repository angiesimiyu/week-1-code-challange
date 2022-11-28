var marks; //Global Variable

function calculate() {
    marks = parseInt(marksForm.num1.value);

    if(marks > 79){
        document.write('The Result is :' + '<b>' + 'A' + '</b>')
    }
    else if (marks >= 60 && marks < 79 ) {
        document.write('The Result is :' + '<b>' + 'B' + '</b>')
    }
    else if ( marks >= 49 && marks < 59) {
        document.write('The Result is :' + '<b>' + 'c' + '</b>')
    }
    else if ( marks >= 40 && marks < 49) {
        document.write('The Result is :' + '<b>' + 'D' + '</b>')
    }
    else {
        document.write('The Result is :' + '<b>' + 'E' + '</b>')
    }
}

