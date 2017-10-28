const values = [1000, 100, 10, 1];
const numerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

var roman = "";

function generateNumeral(value, place, index) {
    var repeats = value / place;
    var str = "";

    if (index == 0) {
        for (var i = 0; i < repeats; i++)
            str += numerals[index];
        return str;
    } else {
        switch (repeats) {
            case 9:
                if (index == 1) {
                    str += numerals[index + 1] + numerals[index - 1];
                } else if (index == 2) {
                    str += numerals[index + 2] + numerals[index];
                } else if (index == 3) {
                    str += numerals[index + 3] + numerals[index + 1];
                }
                break;
            case 8:
                if (index == 1) {
                    str += numerals[index] + numerals[index + 1] + numerals[index + 1] + numerals[index + 1];
                } else if (index == 2) {
                    str += numerals[index + 1] + numerals[index + 2] + numerals[index + 2] + numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 2] + numerals[index + 3] + numerals[index + 3] + numerals[index + 3];
                }
                break;
            case 7:
                if (index == 1) {
                    str += numerals[index] + numerals[index + 1] + numerals[index + 1];
                } else if (index == 2) {
                    str += numerals[index + 1] + numerals[index + 2] + numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 2] + numerals[index + 3] + numerals[index + 3];
                }
                break;
            case 6:
                if (index == 1) {
                    str += numerals[index] + numerals[index + 1];
                } else if (index == 2) {
                    str += numerals[index + 1] + numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 2] + numerals[index + 3];
                }
                break;
            case 5:
                if (index == 1) {
                    str += numerals[index];
                } else if (index == 2) {
                    str += numerals[index + 1];
                } else if (index == 3) {
                    str += numerals[index + 2];
                }

                break;
            case 4:
                if (index == 1) {
                    str += numerals[index + 1] + numerals[index];
                } else if (index == 2) {
                    str += numerals[index + 2] + numerals[index + 1];
                } else if (index == 3) {
                    str += numerals[index + 3] + numerals[index + 2];
                }
                break;

            case 3:
                if (index == 1) { str += numerals[index + 1]; } else if (index == 2) {
                    str += numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 3];
                }
            case 2:
                if (index == 1) { str += numerals[index + 1]; } else if (index == 2) {
                    str += numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 3];
                }
            case 1:
                if (index == 1) { str += numerals[index + 1]; } else if (index == 2) {
                    str += numerals[index + 2];
                } else if (index == 3) {
                    str += numerals[index + 3];
                }

                break;



        }
    }

    return str;
}

function convertToRoman(num) {
    var hold_num = num;
    var current = num;
    var index = 0;
    //find the largest value   
    roman = "";

    while (num > 0) {

        if (current >= values[index]) {
            current -= current % values[index];
            num -= current;
            roman += generateNumeral(current, values[index], index);
            current = num;
        }

        index++;
    };

    console.log(roman + " " + hold_num)

    return num;
}

/*convertToRoman(1111);
convertToRoman(3856);*/
convertToRoman(2) // should return "II".
convertToRoman(3) //should return "III".
convertToRoman(4) // should return "IV".
convertToRoman(5) // should return "V".
convertToRoman(9) // should return "IX".
convertToRoman(12) // should return "XII".
convertToRoman(16) // should return "XVI".
convertToRoman(29) // should return "XXIX".
convertToRoman(44) // should return "XLIV".
convertToRoman(45) // should return "XLV"
convertToRoman(68) // should return "LXVIII"
convertToRoman(83) // should return "LXXXIII"
convertToRoman(97) //should return "XCVII"
convertToRoman(99) // should return "XCIX"
convertToRoman(500) // should return "D"
convertToRoman(501) //should return "DI"
convertToRoman(649) // should return "DCXLIX"
convertToRoman(798) //should return "DCCXCVIII"
convertToRoman(891) //should return "DCCCXCI"
convertToRoman(1000) // should return "M"
convertToRoman(1004) //should return "MIV"
convertToRoman(1006) // should return "MVI"
convertToRoman(1023) // should return "MXXIII"
convertToRoman(2014) // should return "MMXIV"
convertToRoman(3999) //should return "MMMCMXCIX"