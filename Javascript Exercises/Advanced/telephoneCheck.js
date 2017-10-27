/**Validate US Telephone Numbers
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum

  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

function telephoneCheck(str) {
    // Good luck!
    return true;
}

telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555") //should return a boolean.
telephoneCheck("1 555-555-5555") //should return true.
telephoneCheck("1 (555) 555-5555") //should return true.
telephoneCheck("5555555555") //should return true.
telephoneCheck("555-555-5555") //should return true.
telephoneCheck("(555)555-5555") //should return true.
telephoneCheck("1(555)555-5555") //should return true.
telephoneCheck("555-5555") //should return false.
telephoneCheck("5555555") //should return false.
telephoneCheck("1 555)555-5555") //should return false.
telephoneCheck("1 555 555 5555") //should return true.
telephoneCheck("1 456 789 4444") //should return true.
telephoneCheck("123**&!!asdf#") //should return false.
telephoneCheck("55555555") //should return false.
telephoneCheck("(6505552368)") //should return false
telephoneCheck("2 (757) 622-7382") //should return false.
telephoneCheck("0 (757) 622-7382") //should return false.
telephoneCheck("-1 (757) 622-7382") //should return false
telephoneCheck("2 757 622-7382") //should return false.
telephoneCheck("10 (757) 622-7382") //should return false.
telephoneCheck("27576227382") //should return false.
telephoneCheck("(275)76227382") //should return false.
telephoneCheck("2(757)6227382") //should return false.
telephoneCheck("2(757)622-7382") //should return false.
telephoneCheck("555)-555-5555") //should return false.
telephoneCheck("(555-555-5555") //should return false.
telephoneCheck("(555)5(55?)-5555") //should return false.