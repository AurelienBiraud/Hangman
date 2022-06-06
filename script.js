var word = ""; 
var wordsE = ["cat","god","pun", "day", "two", "boy", "fog", "ear", "eel"] 
var wordsM = ["cancel","flight", "rink", "sugar", "dream", 
"time", "rant", "camp", "plasma"] 
var wordsH = ["because", "submarine", "monkey", "pandemic", "accident", "organism", "rendition", "rediculous", "calculation"] 
var guesses = 10; 
var guessedLetters = []; 


function startGame() {
  var d = document.getElementById("difficulty").value;

  if(d==1){
    word = wordsE[Math.floor(Math.random() * wordsE.length)];
  }
  if(d==2){
    word = wordsM[Math.floor(Math.random() * wordsM.length)];    
  }
  if(d==3){    
    word = wordsH[Math.floor(Math.random() * wordsH.length)];
  }

  console.log(word);

  printWord();



}
function guessLetter() {

document.getElementById("message").innerHTML = "" 
var g = document.getElementById("guessedLetter").value;

var l = ""
  for (var j = 0; j < guessedLetters.length; j++){
if(guessedLetters[j] == g){
l += "This letter has already been entered."
document.getElementById( "message").innerHTML = l
return;

}
  } 

  console.log(g)
  guessedLetters.push(g)
  
  if(word.indexOf(g) == -1){
guesses--;
  }

if(guesses == 0){
  document.getElementById("numGuesses").innerHTML = "The word in question was " + word
return
}

  printWord();

if(document.getElementById("word").innerHTML.indexOf(" _ ") == -1){
  document.getElementById("numGuesses").innerHTML  = " You WON!!!" 
  return
}


  document.getElementById("guessedLetters").innerHTML = guessedLetters; 
   
   document.getElementById("numGuesses").innerHTML = guesses;

}

function printWord() {

  var _word = "";

  for(var i = 0; i < word.length; i++) {

    if(guessedLetters.indexOf(word[i]) > -1) {
      _word += word[i]; 
    } else {
      _word += " _ " 
    }
  }
  document.getElementById("word").innerHTML = _word

}

