function colorize() {
    let allTr = document.getElementsByTagName('tr');
    for (let i = 0; i < allTr.length; i++) {
        //colorise even
        if (i % 2 != 0) {
            allTr[i].style = 'background: teal';
        }
    }
}