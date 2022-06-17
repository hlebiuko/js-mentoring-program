/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign result to corresponding variable
 * for - forFactorial
 * while - whileFactorial
 * do..while - doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = 1;
whileFactorial = 1;
doFactorial = 1;
let n1 = 1,
  n2 = 1;

for (let i = 1; i <= n; i++) {
  forFactorial *= i;
}

while (n1 <= n) {
  whileFactorial *= n1;
  n1++;
}

do {
  doFactorial *= n2;
  n2++;
} while (n2 <= 10)


/** TODO
 * return concatenated string from an array of substring
 * assign result to variable str
 */
let str;
const substr = ["I", " love", " JS"];

str = "";
for (let i = 0; i < substr.length; i++) {
str += substr[i];
}
console.log(str);


/** TODO
 * calculate a total of income of certain person
 * assign result to variable totalIncome
 */
let totalIncome;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

totalIncome=0;
ArrayOfValues = Object.values(personIncomes);
for (let i = 0; i < Object.values(personIncomes).length; i++){
  totalIncome += ArrayOfValues[i];
}
console.log(totalIncome);


module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};