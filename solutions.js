// ! ========= >> By Usama Ali

/*==========================================
1- Write a program that allow to user enter number then print it 
==========================================*/

/*
var userNumber = 5;
console.log(userNumber);
*/

/* ==========================================
2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
========================================== */

// Using Nested if ( without using logical operators)

/*
var userNumber = Number(window.prompt("Enter a number"));
if (userNumber % 4 === 0) {
  if (userNumber % 3 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
} else {
  console.log("No");
}

// Another Solution using Logical operators

if (userNumber % 4 === 0 && userNumber % 3 === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
*/

/* ==========================================
3- Write a program that allows the user to insert 2 integers then print the max
Example1: Input: 3 5 => Output: 5
Example 2: Input: 10 7 => Output: 10
========================================== */

/*
var firstNumber = 10;
var secondNumber = 7;

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else if (secondNumber > firstNumber) {
  console.log(secondNumber);
} else {
  console.log("Equal Numbers 😊");
}
*/

/*==========================================
4- Write a program that allows the user to insert an integer then print
negative if it is negative number otherwise print positive.
Example 1: Input: -5 => Output negative
Example2:  Input: 10 => Output positive
========================================== */

/*
var userNumber = -5;

if (userNumber < 0) {
  console.log("negative");
} else if (userNumber > 0) {
  console.log("Positive");
} else {
  console.log("It's Zero 0️⃣");
}
*/

/*==========================================
5- Write a program that take 3 integers from user then print the max
element and the min element.
Example 1: Input:7,8,5 => Output: max element = 8 | min element = 5
Example2: Input: 3 6 9 => Outputs: Max element = 9 Min element = 3
==========================================*/

// with multiple if statements [without using logical operators]

/*

//Test Data 1
var a = 7;
var b = 8;
var c = 5;

//Test Data 2
// var a = 3;
// var b = 6;
// var c = 9;


if (a > b) {
  if (a > c) {
    console.log("Max Element = " + a);
    if (b > c) {
      console.log("Min Element = " + c);
    } else {
      console.log("Min Element = " + b);
    }
  } else {
    console.log("Max Element = " + c);
    console.log("Min Element = " + b);
  }
} else if (b > a) {
  if (b > c) {
    console.log("Max Element = " + b);
    if (a > c) {
      console.log("Min Element = " + c);
    } else {
      console.log("Min Element = " + a);
    }
  } else {
    console.log("Max Element = " + c);
    console.log("Min Element = " + a);
  }

}

// Another Solution using Logical operators

if (a > b && a > c) {
  console.log("Max Element = " + a);
  if (b > c) {
    console.log("Min Element = " + c);
  } else {
    console.log("Min Element = " + b);
  }
} else if (b > a && b > c) {
  console.log("Max Element = " + b);
  if (a > c) {
    console.log("Min Element = " + c);
  } else {
    console.log("Min Element = " + a);
  }
} else {
  console.log("Max Element = " + c);
  if (a > b) {
    console.log("Min Element = " + b);
  } else {
    console.log("Min Element = " + a);
  }
}

*/

/*==========================================
6- Write a program that allows the user to insert integer number then check If
a number is even or odd
Example 1:  Input: 8 => Output: even
Example 2:  Input: 7 => Output: odd
==========================================*/

/*

var userNumber = 8;

if (userNumber % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

*/

/*==========================================
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
Example 1:  Input: O => Output: vowel
Example 2:  Input: b => Output: Consonant
==========================================*/

/*

var char = "v";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("vowel");
} else {
  console.log("Consonant");
}

*/

/*==========================================
9- Write a program that allows user to insert integer then print all numbers
between 1 to that’s number 
Example: Input 5 => Output 1, 2, 3, 4, 5
===========================================*/

/*
var userNumber = 5;

for (var i = 1; i <= userNumber; i++) {
  console.log(i);
}

*/

/*==========================================
10- Write a program that allows user to insert integer then print a multiplication
table up to 12.
Example : Input: 5 => Outputs: 5 10 15 20 25 30 35 40 45 50 55 60
==========================================*/

/*

var userNumber = 5;

for (var i = 1; i <= 12; i++) {
  console.log(i * userNumber);
}

*/

/*==========================================
11- Write a program that allows to user to insert number then print all even numbers
between 1 to this number 
Example: Input: 15 => Output: 2 4 6 8 10 12 14
==========================================*/

/*

var userNumber = 15;

for (var i = 1; i <= userNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

*/

/*==========================================
12- Write a program that take two integers then print the power
Example: Input: 4 3 => Output: 64
==========================================*/

/*

var userNumber = 4;
var power = 3;
var result = 1;

for (var i = 1; i <= power; i++) {
  result *= userNumber;
}

console.log(result);

*/

/*==========================================
12- Write a program to enter marks of five subjects and calculate total, average and percentage.
Example Input: - Enter Marks of five subjects: 95 76 58 90 89 => 
Output:-.Total marks = 435 | Average Marks = 87 | Percentage = 87
==========================================*/
/*

var subject_1 = 95;
var subject_2 = 76;
var subject_3 = 58;
var subject_4 = 90;
var subject_5 = 89;

var result = subject_1 + subject_2 + subject_3 + subject_4 + subject_5;
var average = result / 5;
var percentage = (result / 500) * 100;

console.log(result, average, percentage);

*/

/*==========================================
13-Write a program to input month number and print number of days in that month.
Example: Input: - Month Number: 1 => Output:-. Days in Month: 31
==========================================*/

/*
var monthNumber = 9;

if (
  monthNumber === 1 ||
  monthNumber === 3 ||
  monthNumber === 5 ||
  monthNumber === 7 ||
  monthNumber === 8 ||
  monthNumber === 10 ||
  monthNumber === 12
) {
  console.log("Days in month: 31");
} else if (monthNumber === 2) {
  console.log("Days in month: 28");
} else {
  console.log("Days in month: 30");
}

*/

/*==========================================
14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
==========================================*/

/*
var physicsMark = 90;
var chemistryMark = 80;
var biologyMark = 70;
var mathematicsMark = 60;
var computerMark = 40;

var percentage =
  ((physicsMark +
    chemistryMark +
    biologyMark +
    mathematicsMark +
    computerMark) /
    500) *
  100;

if (percentage >= 90) {
  console.log("Percentage >= " + percentage + "%: Grade A");
} else if (percentage >= 80) {
  console.log("Percentage >= " + percentage + "%: Grade B");
} else if (percentage >= 70) {
  console.log("Percentage >= " + percentage + "%: Grade C");
} else if (percentage >= 60) {
  console.log("Percentage >= " + percentage + "%: Grade D");
} else if (percenta >= 40) {
  console.log("Percentage >= " + percentage + "%: Grade E");
} else {
  console.log("Percentage >= " + percentage + "%: Grade F");
}

*/

/*==========================================
15- Write a program to print total number of days in month
==========================================*/

/*

var monthNumber = 1;

switch (monthNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Days in month: 31");
    break;
  case 2:
    console.log("Days in month: 28");
    break;
  default:
    console.log("Days in month: 30");
    break;
}

*/

/*==========================================
16- Write a program to check whether an alphabet is vowel or consonant
==========================================*/

/*
var char = "a";

switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;
  default:
    console.log("Consonant");
    break;
}

*/

/*==========================================
17- Write a program to find maximum between two numbers
==========================================*/

/*
var firstNumber = 19;
var secondNumber = 15;

switch (firstNumber > secondNumber) {
  case true:
    console.log(firstNumber + " bigger than " + secondNumber);
    break;
  case false:
    console.log(secondNumber + " bigger than " + firstNumber);
    break;
}

*/

/*==========================================
18- Write a program to check whether a number is even or odd
==========================================*/

/*

var userNumber = 11;

switch (userNumber % 2 === 0) {
  case true:
    console.log("even");
    break;
  case false:
    console.log("odd");
    break;
}

*/

/*==========================================
19- Write a program to check whether a number is positive or negative or zero
==========================================*/

/* 
var userNumber = 0;

switch (userNumber > 0) {
  case true:
    console.log("Positive");
    break;
  case false:
    switch (userNumber < 0) {
      case true:
        console.log("Negative");
        break;
      case false:
        console.log("Zero 0️⃣");
        break;
    }
}

*/

/*==========================================
20- Write a program to create Simple Calculator 
==========================================*/

/*
var firstNumber = 5;
var secondNumber = 10;

var operation = "-"; // Allowed Operation (+) | (-) | (*) | (/)

switch (operation) {
  case "+":
    console.log(
      "Summition of two numbers equal : " + (firstNumber + secondNumber)
    );
    break;
  case "-":
    console.log(
      "Subtraction of the two numbers equal : " + (firstNumber - secondNumber)
    );
    break;
  case "*":
    console.log(
      "multiplication of the two numbers equal : " + firstNumber * secondNumber
    );
    break;
  case "/":
    console.log(
      "division of the two numbers equal : " + firstNumber / secondNumber
    );
}
*/