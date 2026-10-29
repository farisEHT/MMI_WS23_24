exports.celsiusToFahrenheit = function (x){
 return celsius*(9/5)+10
}

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)/(5/9))
 }   
}


exports.getGreetingDependOnTime = function (myDate) {
    const hour = myDate.getHours();

    if (hour >= 6 && hour < 22) {
        return "Guten Morgen";
    } else {
        return "Guten Abend";
    }
};