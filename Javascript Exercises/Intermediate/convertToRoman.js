const values = [1000, 100, 10, 1];
const numerals = ['M', 'D', 'C', 'L', 'X', 'V', ' I'];

var roman = "";

function generateNumeral(value, place, index) {
    var repeats = value / place;

    switch (index) {
        case 0:
            //for the thousands place
            for (; repeats > 0; repeats--) roman += numerals[index];
            break;
        case 1:
            //for the five hundreds & hundreds 
            for (; repeats > 0; repeats--) {
                //base case
                if (repeats) console.log(value + " " + place + " " + repeats)
            }
        case 2:

            //for the hundreds place
            break;
        case 3:
            //for the fiftys
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        default:
            break;
    }
}

function convertToRoman(num) {
    var current = num;
    var index = 0;
    //find the largest value    

    while (num > 0) {

        if (current >= values[index]) {
            current -= current % values[index];
            num -= current;
            roman += generateNumeral(current, values[index], index);
            current = num;
        }

        index++;
    };



    return num;
}

convertToRoman(3856);