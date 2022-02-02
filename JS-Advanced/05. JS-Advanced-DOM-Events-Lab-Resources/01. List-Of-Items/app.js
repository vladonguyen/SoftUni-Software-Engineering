function addItem() {
   let inputTextValue = document.getElementById('newItemText');
   let newLiElement = document.createElement('li');
   newLiElement.textContent = inputTextValue.value;
   let ulParent = document.getElementById('items');
   ulParent.appendChild(newLiElement);
   inputTextValue.value = '';
}