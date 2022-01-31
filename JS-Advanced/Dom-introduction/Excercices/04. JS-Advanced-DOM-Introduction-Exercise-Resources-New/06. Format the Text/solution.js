function solve() {
  let textInput = document.getElementById('input'); //get the text input
  let textInputValue = textInput.value.split('.'); // split all senteces to array
  let countSentence = 0; // count how many sentences are there - from 1 to 3
  let text ='';
  let resultText ='';
  for(let currentText of textInputValue){
    if (currentText.match(/^\s*$/) || currentText.length === 0) {
      //if the text has one whitespace or is less than 1 char
      continue;
    }

    text+=currentText+'.'; // add full stop at the end
    countSentence++;
    if(countSentence % 3 === 0 || countSentence === textInputValue.length){
      // if there are 3 sentences or it is the last sentence
      resultText+= `<p>${text}</p>`;
      text ='';
    }
  }
  if(text !== ''){
    resultText+= `<p>${text}</p>`;
  }
  let output = document.getElementById('output');
  output.innerHTML = resultText;
}