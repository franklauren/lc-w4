/*
  ///////////////////
  richestGroupDynamic
  ///////////////////

  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]

  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.

  [OUTPUT]
    [ 'D' ]

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]

  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.

  [OUTPUT]
    [ 'Z', 'B' ]

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroupDynamic(groups) {
  // code here
  var arrSum= [];
  for (var i=0; i<groups.length; i++) {
    var arr= [];
    arr.push([groups[i][0]]);
    // console.log(groups[1][0]);
    for (var k=1; k<groups[i].length; k++) {
      if (arr[arr.length-1][0]===groups[i][k]) {
        arr[arr.length-1].push(groups[i][k]);
      }
      else {
        arr.push([groups[i][k]]);
      }
    }
    // console.log(arr);
    var tempArr=0;
    var tempWin;
    var flag=false;
    for (var m=0; m<arr.length; m++) {
      if(tempArr<arr[m].length && arr[m].length>1) {
        tempArr = arr[m].length;
        tempWin = arr[m][0];
        flag = true;
        // console.log("Arr ke = " + i + " tempArr = " + tempArr + " tempWin = " + tempWin);
      }
      else if (arr.length === 1) {
        arrSum.push(arr[m][0]);
      }
    }
    if (flag === true) {
      arrSum.push(tempWin);  
    }  
  }
  return arrSum;
}


console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D']
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []