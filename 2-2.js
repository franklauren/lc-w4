/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
    // code here
    var arrVotes = [];
    for (var k=0; k<votes.length; k++) {
        arrVotes.push([votes[0]]);
        votes.shift();
    // console.log("Votes = " + votes);
        for (var i=0; i<votes.length; i++) {
            if (arrVotes[arrVotes.length-1][0] === votes[i]) {
                arrVotes[arrVotes.length-1].push(votes[i]);
            }
        }
    }
    console.log(arrVotes);
    var temp = 0;
    var winner = "";
    for (var m=0; m<arrVotes.length; m++) {
        // console.log(arrVotes[1].length);
        if (arrVotes[m].length>temp) {
            temp = arrVotes[m].length;
            winner = arrVotes[m][0];
            // console.log("winner is " + winner + " skor = " + temp);
        }
        else if (arrVotes[m].length===temp && arrVotes.length>1) {
            temp = 0;
        }
    }
    // console.log(temp);
    
    if (temp > 0) {
        return "winner is " + winner + " skor = " + temp;
    }
    else if(temp === 0) {
        return "no winner";
    }
    
  }
  
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
  // Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
  // Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
  // Selamat juaranya adalah Arby, dengan total votes yang diterima 2
  