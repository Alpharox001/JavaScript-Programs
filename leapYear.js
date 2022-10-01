function leapYear(year){
    if (year % 400 === 0) {
        console.log(year + " yo chicka its a leap year.");
    }else if( year % 100 === 0) {
        console.log(year + " no chicka this isnt a leap year.");
    }else if(year % 4 === 0){
        console.log(year + " yo chicka its a leap year.");
    }else{
        console.log(year + " no chicka this isnt a leap year.");
    }
}

leapYear(5000);


 