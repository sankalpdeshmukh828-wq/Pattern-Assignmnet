line = ''
for(i=1;i<=4;i++){
    line = line + '*'
}
console.log(line)
// output : ****



for(i=1;i<=4;i++){
    line = ''
    for(j=1;j<=4;j++){
        line = line + '*'
    }
    console.log(line)
}
// output : ****
//          ****
//          ****
//          ****    


for(i=1;i<=4;i++){
    line = ''
    for(j=1;j<=i;j++){
        line = line + '*'
    }
    console.log(line)
}
// output : *
//          **
//          ***
//          ****


for(i=1;i<=4;i++){
    line = ''
    for(j=4;j>=i;j--){
        line = line + '*'
    }
    console.log(line)
}
//  output : ****
//           ***
//           **
//           *



for(i=1;i<=4;i++){
    line = ''
    for(j=1;j<=4+i-1;j++){
        if(j<=4-i){
            line = line + ' '
        }else{
            line = line + '*'
        }

}
console.log(line)
}

// output :   *   
//           ***  
//          ***** 
//         *******

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







for(i=1;i<=4;i++){
    line = ''
    for(j=1;j<=4+i-1;j++){
        if(j<=4-i){
            line = line + ' '
        }else{
            line = line + '1'
        }

}
console.log(line)
}
// output :   1
//           111
//          11111
//         1111111  
