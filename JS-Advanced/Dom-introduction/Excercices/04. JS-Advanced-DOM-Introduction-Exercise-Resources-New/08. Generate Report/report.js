function generateReport() {
    let inputs = document.getElementsByTagName('input'); // get the column headers
    let allTr = document.querySelectorAll('tbody tr'); // get all tr-s with employers data

    let i = 0;
    let checkedNumbers = []; // put the index of all checked headers in array
    let categoryNames = []; //take all category(header) names
    for (let input of inputs) {
        if (input.checked === true) {
            checkedNumbers.push(i);
        };
        categoryNames.push(input.name)
        i++;
    }
    let storeValidData = []; // put all employers' data in object and then push in array
    //iterate through all tr with employer data and take checked data
    for (let tr of allTr) {
        let allTd = tr.querySelectorAll('td');
        let i = 0;
        let obj = {};
        for (let td of allTd) {
            if (checkedNumbers.includes(i)) {
                obj[categoryNames[i]] = td.textContent;

            }
            i++;
        }
        storeValidData.push(obj);

    }
    const myJSON = JSON.stringify(storeValidData);
    let output = document.getElementById('output');
    output.textContent = myJSON;
}