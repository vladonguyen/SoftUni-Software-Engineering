function extractText() {
const allItems = document.querySelectorAll("ul#items li");
const textField = document.querySelector("#result");
for(let item of allItems){
    textField.value+=item.textContent + "\n"
}
    
}