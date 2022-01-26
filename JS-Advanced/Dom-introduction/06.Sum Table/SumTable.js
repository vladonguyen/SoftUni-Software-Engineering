function sumTable() {
    let tdList = document.getElementsByTagName('td');
    let result = 0;
    for(let tdEl of tdList){
        let tdContent = tdEl.textContent;
    tdContent = Number(tdContent);
    if(tdContent){
        result+=tdContent;
    }
        
    
}
let displaySum = document.getElementById('sum');
displaySum.textContent = result;

}