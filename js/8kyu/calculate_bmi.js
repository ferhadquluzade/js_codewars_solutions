// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var ansr = "";
    if (bmi <= 18.5) {
        ansr = "Underweight";
    } else if (bmi <= 25.0) {
        ansr = "Normal";
    } else if (bmi <= 30.0) {
        ansr = "Overweight";
    } else if (bmi > 30.0) {
        ansr = "Obese";
    }

    return ansr;
}
console.log(bmi(60, 1.70));
