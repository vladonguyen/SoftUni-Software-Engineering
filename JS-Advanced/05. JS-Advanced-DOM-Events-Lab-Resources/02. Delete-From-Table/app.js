function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let searchedEmail = inputElement.value;
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');
    let isNotDeleted = true;
    for (let email of emailCellElements) {
        if (email.textContent === searchedEmail) {
            let trParentElement = email.parentNode;
            trParentElement.parentNode.removeChild(trParentElement);

            resultElement.textContent = 'Deleted.';
            isNotDeleted = false;
            break;
            // alternative email.parentNode.parentNode.removeChild(email.parentNode);
        }
    }

    if (isNotDeleted) {
        resultElement.textContent = 'Not found.';
    }
}