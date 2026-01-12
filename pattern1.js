line = ''
for (i = 1; i <= 4; i++) {
    line = line + '*'
}
console.log(line)
// output : ****

                // Square Pattern //

for (i = 1; i <= 4; i++) {
    line = ''
    for (j = 1; j <= 4; j++) {
        line = line + '*'
    }
    console.log(line)
}
// output : ****
//          ****
//          ****
//          ****    


                       // Right Angle Pattern //
for (i = 1; i <= 4; i++) {
    line = ''
    for (j = 1; j <= i; j++) {
        line = line + '*'
    }
    console.log(line)
}
// output : *
//          **
//          ***
//          ****


                // Inverted Right Angle Pattern //

for (i = 1; i <= 4; i++) {
    line = ''
    for (j = 4; j >= i; j--) {
        line = line + '*'
    }
    console.log(line)
}
//  output : ****
//           ***
//           **
//           *



                // Pyramid Pattern //
for (i = 1; i <= 4; i++) {
    line = ''
    for (j = 1; j <= 4 + i - 1; j++) {
        if (j <= 4 - i) {
            line = line + ' '
        } else {
            line = line + '*'
        }

    }
    console.log(line)
}

// output :   *   
//           ***  
//          ***** 
//         *******


                // Inverted Pyramid Pattern //

for (let i = 4; i >= 1; i--) {
    let line = " ";

    for (let j = 1; j <= 4 + i - 1; j++) {
        if (j <= 4 - i) {
            line += "  ";
        } else {
            line += "* ";
        }
    }

    console.log(line);
}
// output : *********
//          ******* 
//           *****  
//            ***   
//             *






                // Number Pyramid Pattern //
for (i = 1; i <= 4; i++) {
    line = ''
    for (j = 1; j <= 4 + i - 1; j++) {
        if (j <= 4 - i) {
            line = line + ' '
        } else {
            line = line + '1'
        }

    }
    console.log(line)
}
// output :   1
//           111
//          11111
//         1111111  



                  // Pascal's Triangle//
let n = 4;
for (let i = 0; i < n; i++) {
    let line = "";
    let value = 1;

    for (let j = 0; j <= i; j++) {
        line += value + " ";
        value = value * (i - j) / (j + 1);
    }

    console.log(line);
}
// output :  1
//          1 1 
//         1 2 1 
//        1 3 3 1


                     // Hollow Square Pattern //

for (let i = 1; i <= 5; i++) {
    let line = " ";

    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            line += "* ";
        } else {
            line += "  ";
        }
    }

    console.log(line);
}
// output : *********
//          *       *
//          *       *
//          *       *
//          *********

//upper inverted pyramid//

for (let i = n; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }

    console.log(line);
}
// output : *********
//           ******* 
//            *****  
//             ***   
//              *

                   //lower upright pyramid//
for (let i = 2; i <= n; i++) {
    let line = "";

    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        line += "*";
    }

    console.log(line);
}
// output :   *
//           ***   
//          *****  
//         ******* 
//        *********