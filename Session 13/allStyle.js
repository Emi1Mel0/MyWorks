/*

assignment 1

var f =Number( window.prompt( `enter a number`) );

console.log( f );

*/

/*

assignment 2

var f = Number(window.prompt(`enter a number`));

if (f % 4 == 0) {
  if (f % 3 == 0) {
    console.log(`yes`);
  }
}
else{
  console.log(`no`)
}

*/

/*

assignment 3

var f = Number(window.prompt(`enter your first number`));

var g = Number(window.prompt(`enter your second number`));
if (g > f) {
    console.log(g);
} else {
    console.log(f);
}

*/

/*

assignment 4

var f = Number(window.prompt(`enter your number`));

if (f > 0) {
    console.log(`postive`);
} else if (f < 0) {
    console.log(`negative`);
} else {
    console.log(NaN);
}

*/

/*

assignment 5

var f = Number(window.prompt(`enter your first number`));
var g = Number(window.prompt(`enter your second number`));
var h = Number(window.prompt(`enter your third number`));

if (f < g && h < g) {
  console.log(`max element is second number `, g);
} else if (g < f && h < f) {
  console.log(`max element is first number `, f);
} else {
  console.log(`max element is third number `, h);
}

*/

/*

assignment 6

var f = Number(window.prompt(`enter your number`));

if ((f % 2) == 0) {
  console.log(`your number is even`)
} else {
  console.log(`your number is odd`)
  
}

*/

/*

assignment 7

var f = window.prompt(`enter your character`);

if (f == `a`) {
  console.log(`vowel`);
} else if (f == `i`) {
  console.log(`vowel`);
} else if (f == `o`) {
  console.log(`vowel`);
} else if (f == `u`) {
  console.log(`vowel`);
} else if (f == `e`) {
  console.log(`vowel`);
} else {
  console.log(`consonant`);
}

*/

/*

assignment 8


var f = Number(window.prompt(` insert your number`));

for (var i = 1; i <= f ; i++) {
  console.log(i);
}

*/

/*

assignment 9

var f = Number(window.prompt(` insert your number`));

for (var i = 1; i <= 12 ; i++) {
  console.log( f * i );
}

*/

/*

assignment 10

var f = Number(window.prompt(` insert your number`));

for (var i = 1; i <= f; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

*/

/*

assignment 11


var f = Number(window.prompt(` insert your main number`));
var u = Number(
  window.prompt(` how many times to use the number in a multiplication ? `)
);

for (var i = 1; i <= u; i++) {
  
  var x = f * f;
  
}
console.log(f);

*/

/*

assignment 12

var f = Number(window.prompt(`enter your first mark`));
var g = Number(window.prompt(`enter your second mark`));
var h = Number(window.prompt(`enter your third mark`));
var j = Number(window.prompt(`enter your forth mark`));
var k = Number(window.prompt(`enter your fifth mark`));

console.log(`total marks`, f + g + h + j + k);
console.log(`average marks`, (f + g + h + j + k) / 5);
console.log(`percentage`, ((f + g + h + j + k) / 5) * 100);

*/

/*

assignment 13


var f = Number(
  window.prompt(`enter the number of month you want the days of it`)
  );
  
  if (f == 1 || f == 3 || f == 5 || f == 7 || f == 8 || f == 10 || f == 12) {
    console.log(`the days of`, f, `are 31`);
  } else if (f == 4 || f == 6 || f == 9 || f == 11) {
    console.log(`the days of`, f, `are 30`);
  } else if (f == 2) {
    console.log(`the days of`, f, `are 28`);
  } else if (condition) {
    console.log(`enter a number between 1 to 12`);
  }
  
  */

/*

assignment 14

var f = Number(window.prompt(`enter your Physics mark`));
var g = Number(window.prompt(`enter your Chemistry mark`));
var h = Number(window.prompt(`enter your Biology mark`));
var j = Number(window.prompt(`enter your Mathematics mark`));
var k = Number(window.prompt(`enter your Computer mark`));

var percentage = (f + g + h + j + k) / 5;
if (percentage >= 90) {
  console.log(`your grade is A and your percentage is`, percentage);
} else if (percentage >= 80) {
  console.log(`your grade is B and your percentage is`, percentage);
} else if (percentage >= 70) {
  console.log(`your grade is C and your percentage is`, percentage);
} else if (percentage >= 60) {
  console.log(`your grade is D and your percentage is`, percentage);
} else if (percentage >= 40) {
  console.log(`your grade is E and your percentage is`, percentage);
} else if (percentage < 40) {
  console.log(`your grade is F and your percentage is`, percentage);
}

*/

// Using switch case

/*

assignment 15

var f = Number(
  window.prompt(`enter the number of month you want the days of it`)
  );
  
switch (f) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`the number of the days of that month is 31`);
    break;
  case 4:
    case 6:
      case 9:
        case 11:
    console.log(`the number of the days of that month is 30`);

    break;
  case 2:
    console.log(`the number of the days of that month is 28`);

    break;
    default:
    console.log(`enter a valid number between 1 to 12`);
  }
  
  */

/*

assignment 16

var f = window.prompt(`enter your character`);

switch (f) {
  case `a`:
    case `i`:
      case `o`:
        case `e`:
          case `u`:
            console.log(`vowel`);
    break;
    default:
      console.log(`consonant`);
      break;
    }
    
*/

/*

assignment 17

var f = Number(window.prompt(`enter your first number`));

var g = Number(window.prompt(`enter your second number`));

switch (g > f) {
  case true:
    console.log(`the maximum number is the second number which is`, g);
    break;
    default:
      console.log(`the maximum number is the first number which is`, f);
      break;
    }

*/

/*
    
assignment 18

var f = Number(window.prompt(`enter your number`));

switch (f % 2 == 0) {
  case true:
    console.log(`your number is even`);
    break;
    default:
      console.log(`your number is odd`);
      break;
    }
    
*/

/*

assignment 19

var f = Number(window.prompt(`enter your number`));

switch (true) {
  case f > 0:
    console.log(`postive`);
    break;
    case f < 0:
      console.log(`negative`);
      break;
      case 0 == 0:
        console.log(`Zero`);
        break;
        default:
          console.log(`enter a valid number`);
        }
        
*/

/*

assignment 20


var f = Number(window.prompt(`enter your first number`));
var g = Number(window.prompt(`enter your second number`));
var key = window.prompt(
  `enter the process that you want one of these ( + , - , / , * )`
  );
  switch (key) {
    case `+`:
    console.log(f + g);
    break;
  case `-`:
    console.log(f - g);

    break;
    case `/`:
      console.log(f / g);

      break;
  case `*`:
    console.log(f * g);
    
    break;
    
    default:
      console.log(`enter a vaild numbers and choose the right process`);
    break;
  }
  
*/
