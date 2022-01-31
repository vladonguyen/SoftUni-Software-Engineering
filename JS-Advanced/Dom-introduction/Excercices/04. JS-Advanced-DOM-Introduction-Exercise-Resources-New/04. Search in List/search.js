function search() {
   let towns = document.querySelectorAll('#towns li');
   let keyword = document.getElementById('searchText');
   let result = document.getElementById('result');

   let matches = 0; // count matches


   //iterate towns and find matches; bold and underline matches;
   for (town of towns) {
      if (town.textContent.includes(keyword.value) && keyword.value !== '') {
         town.style = 'font-weight: bold; text-decoration: underline';

         matches++; //increase matches
      } else {
         town.style = 'font-weight: normal; text-decoration: none';
      }

   }
   keyword.value = ''; // clear searchedText

   result.textContent = `${matches} matches found`; // display matches

}
