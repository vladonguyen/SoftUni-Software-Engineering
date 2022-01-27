function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let isValidCase = false;

  //convert text to separate words in array splited by space
  let wordsToArray = [text][0].toLowerCase().split(' ');


  //iterate every word
  let wordsToJoin = []; // add in it all transormed words
  for (let i = 0; i < wordsToArray.length; i++) {
    //split every word by character
    let currentWord = wordsToArray[i].split('');

    // If Camel Case
    if (namingConvention === 'Camel Case') {
      isValidCase = true;
      for (let j = 0; j < currentWord.length; j++) {
        if (i === 0) {
          // do nothing
        } else {
          if (j === 0) {
            currentWord[j] = currentWord[j].toUpperCase();
          }
        }
        // wordsToJoin.push(currentWord.join(''));
      }

    } else if (namingConvention === 'Pascal Case') {
      //If Pascal Case
      isValidCase = true;
      //if it is the first word - make the first letter capital
      for (let k = 0; k < currentWord.length; k++) {
        if (k === 0) {
          currentWord[k] = currentWord[k].toUpperCase();
        }
      }
    }
    // join all characters to word and push it in array
    wordsToJoin.push(currentWord.join(''));
  }

  // Output result
  if (isValidCase) {
    result.textContent = wordsToJoin.join('');
  } else { //If other thow error
    result.textContent = 'Error!';
  }
}
