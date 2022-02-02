function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    
    let newLi = document.createElement('li');
    //create a link
    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href ="#";
    //end of creating link
    remove.addEventListener('click', deleteItem);
    newLi.textContent = newItemTextElement.value;
    newLi.appendChild(remove);


    let ulParentElement = document.getElementById('items');
    ulParentElement.appendChild(newLi);
    

    
    function deleteItem(e){
        newLi.remove();
    }
    

}
