console.log("project 1 -  printing text using js");
// document.getElementsByTagName('h1').innerHTML = 'Project 1';
document.write(' project 1 -  printing text using js');
// alert("hello World");

// 2 addition
// let a = 10;
// let b = 20;
// let a = prompt("enter 1st number ", 10);
// let b = prompt("enter 2nd number ", 10);
// let c = parseInt(a) + parseInt(b);
// console.log("the sum of " + a + " & " + b + " = " + c);
// document.write("/  the sum of " + a + " & " + b + " = " + c + "/ ");

// 3 square root

// Match.sqrt(number)
// let number = parseInt(prompt('enter your number ', 4));
// document.write("Math.sqrt(number) > " + Math.sqrt(number));
// console.log(Math.sqrt(number));
// console.log(Math.sqrt("abhi")); // NaN
// console.log(Math.sqrt("-3")); // NaN


// 4 > find area of right angled triangle

// let base = parseInt(prompt("base/side 1 vlaue > "));
// let height = parseInt(prompt("height/side 2 vlaue > "));

// right ANGLE  formula
// let area1 = (base * height) / 2;
// console.log(`area of triangle with base: ${base} & height ${height} is ${area1}`);


// herons formula s =(a+b+c)/2;
// area = sqrt of s(s-a)*(s-b)* (s-c)
let a = 10, b = 15, c = 14;
let s = (a + b + c) / 2;
console.log(s);

let temp = parseInt(s * (s - a) * (s - b) * (s - c));
console.log(temp);

let area2 = Math.sqrt(temp);
console.log(`area of triangle with herons formula is ${area2}`);

// 5 swap number
// using temp val 

a = 6;
b = 5;
console.log(`before swap a = ${a} , b = ${b}`);
temp = a; // temp hold a
a = b; // b a holf b
b = temp; // b hold temp which is a
console.log(`after swap a = ${a} , b = ${b}`);

//  without using temp var

a = a + b; // a = 6+5 = 11
b = a - b; // b = 11 - 6 = 6 // b value cahnged
a = a - b; // b = 11 - 6 = 5
console.log(`after swap without temp var a = ${a} , b = ${b}`);


// 6 > km to miles
//  1 km = 0.621371

function convert() {
        let km = document.getElementById('data').value;
        const factor = 0.621371;
        let miles = km * factor;

        document.getElementById('result').innerText = miles + 'miles';
}

// celsius to fahrenheit

// // 1f = celsiud * 1.8 +32 
function convertTemp() {
        let celsious = document.getElementById('celsious').value;
        let fahrenheit = (celsious * 1.8) + 32;
        document.getElementById('fahrenheit').value = fahrenheit;
}


// check value is + - or zero or NaN
function convertTemp2() {
        let f = document.getElementById('fahrenheit').value;
        let celsious_result = (f - 32) * 5 / 9;
        document.getElementById('celsious').value = celsious_result;
}

function checkValue() {
        let check_number = document.getElementById('check_number').value;
        let value_result = Math.sign(check_number);
        let result_value = document.getElementById('value_result');

        if (value_result < 0) {
                result_value.innerText = 'Negative Number';
        } else if (value_result > 0) {
                result_value.innerText = 'positive Number';

        } else if (value_result == 0) {
                result_value.innerText = 'Zero Number';

        } else {
                result_value.innerText = 'enter valid number';
        }
}

//  9 >  generate random number using Match.random() > gives number between 0 to 1

let random_var = Math.random();
console.log(`random number ${random_var}`);

//  9 > random number with Math.random() between fixed range
// Math.random() * (high num - low num) + low num
random_var = Math.random() * (10000 - 1000) + 1000;
console.log(`random number between 10 to 100 >  ${random_var}`);

// random_var = Math.random() * (100 - 10) + 10;
console.log(`random number between 10 to 100  integer >  ${Math.floor(random_var)}`);

// making otp of 4 digit
random_var = Math.random() * 10000;

console.log(`making otp of 4 digit >  ${Math.floor(random_var)}`);

// 10 check odd or even

function odd_even_prime() {
        let number_val = document.getElementById('number_val').value;
        let odd_even_result = document.getElementById('odd_even_result');
        // if (number_val % 2 == 0) {
        //         odd_even_result.innerText = `${number_val} is Even`;
        // }
        // else {
        //         odd_even_result.innerText = `${number_val} is odd`;
        // }

        // using ternay operator for Odd even
        number_val % 2 == 0 ? odd_even_result.innerText = `EVEN using trny op` : odd_even_result.innerText = `ODD using trny op`;



        // 11 > check PRIME number

        let prime_check_result = document.getElementById('prime_check_result');
        prime_check_result.style.color = 'green';
        let temp_result;

        if (number_val == 1) {
                prime_check_result.innerText = `${number_val} neither Prime or composite number`;
        } else if (number_val < 1) {
                prime_check_result.innerText = `(0 and -ve number are not Prime number)`;
        } else if (number_val == 2) {
                prime_check_result.innerText = `Prime Number`;
        }
        else {
                for (let i = 2; i < number_val; i++) {

                        if (number_val % i == 0) {
                                temp_result = `not a Prime Number`;
                                break; // add this else every number is prime number
                        } else {
                                temp_result = `Prime Number`;

                        }
                }
                prime_check_result.innerText = temp_result;

        }
}



