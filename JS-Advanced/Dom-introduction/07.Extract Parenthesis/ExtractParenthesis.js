function extract(content) {
let pContent = document.getElementById('content');
let textToCheck = pContent.textContent;

let regex = /(?:\()(.+?)(?:\))/g;
let wordList = [];
let matchedWords = regex.exec(textToCheck);
while(matchedWords != null){
    wordList.push(matchedWords[1]);
    matchedWords = regex.exec(textToCheck);
}
console.log(wordList.join("; " ))



}