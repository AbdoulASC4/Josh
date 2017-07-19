function randletter(){
   var letters = ["Apple","Bacon","Cream","Dad","Elephant","Food","Gat","Hat","Idium","Josh","Kit kat","Loser","Mother","Nickleback","Osterman","Peach","Questiom","Razor","Stop","Telecommunications","Urine","Voice","Westchester","Xylophone","Yesterday","Zebra"  ]

   var randomNumber = Math.floor(Math. random() * letters.length - 1);



   var randomletter = letters[randomNumber];

   return randomletter
}
console.log(randletter());


//Random word, creates a word from a random length form  random letters
randletter();
function randWord(){
    // Random Length of random numbers

    var randomLength = Math.round(Math.random()*20);
 
    // Get a random letter

 for(var i = 0; i<randomLength; i++){
 var randomLetter = randletter();
 console.log(randomLetter);
    }
}

randWord();
