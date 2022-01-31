function toggle() {
    let button = document.getElementsByClassName('button');
    let buttonText = button[0].textContent;
    let extra = document.getElementById('extra');
    
    if(buttonText === 'More'){
        buttonText = 'Less';
        extra.style.display = 'block';
    } else if(buttonText === 'Less'){
        buttonText = 'More';
        extra.style.display = 'none';
    }
    
    button[0].textContent = buttonText;

    
    
}