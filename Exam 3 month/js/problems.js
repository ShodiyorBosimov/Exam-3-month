
//---------------------------------------Check number to palindrome------------------------------//

// function checkPalindrome(number) {
//   const numLeng = number.length;
//   let numMid = Math.floor(numLeng/2);

//   for (let i = 0; i < numMid; i++) {
//     if (number[i] !== number[numLeng - 1 - i]) {
//       return number + " It is not a palindrome";
//     }
//   }
//   return number + " It is a palindrome";
// }

// const number = prompt("Enter any number");
// const value = checkPalindrome(number);
// console.log(value);


//-------------------------------------------Leap year check-------------------------------------//

// function checkLeapYear(year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + " It is a leap year");
//   } else {
//     console.log(year + " It is not a leap year");
//   }
// }
// const year = prompt("Enter any year");
// checkLeapYear(year);


//------------------------Separating negative numbers------------------------------//

// let dataNum = [ -1, 1, -3, 2, -5, 7, 100, 4156, -34, -88 ];
// let negativeNum = [];
// dataNum.forEach(function (num) {
//   if (num < 0) {
//     negativeNum.push(num);
//   }
// });
// console.log(negativeNum);
