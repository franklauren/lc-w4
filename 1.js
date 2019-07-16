/*
  ////////////
  sumTheNumber
  ////////////

  Function sumTheNumber akan menentukkan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.
  
  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'

  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12

  [OUTPUT]
    33

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

//PSEUDOCODE
// INPUT stringNumber
// FOR each number of stringNumber 
//   CHECK number
//     IF number % 2 not equal to 0
//       INCREASE sum WITH number times 2
//     ENDIF
//     ELSE IF 
//       INCREASE sum WITH number
//     END IF  
// DISPLAY sum




function sumTheNumber(stringNumber) {
  // code here
  var kali = 0;
  for (var i=0; i<stringNumber.length; i++) {
    if (i%2!==0) {
      kali = kali + Number(stringNumber[i] * 2);
      // console.log("kali ganjil = " +kali);
    }
    else {
      kali = kali + Number(stringNumber[i]);
      // console.log("kali genap = " +kali);
    }
  }
  return kali; 
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2