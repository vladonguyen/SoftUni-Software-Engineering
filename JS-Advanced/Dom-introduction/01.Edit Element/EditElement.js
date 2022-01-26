function editElement(ref, match, replacer) {
    let initialContent = ref.textContent;
    let regex = new RegExp (match, 'g') //How we use REGEX
    let editedContent = initialContent.replace(regex,replacer)
    ref.textContent = editedContent;
  

}