function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField');
      let trows = document.querySelectorAll('table.container tbody tr');
      for(let trow of trows){
         if(trow.textContent.includes(search.value) && search.value !== ''){
            // trow.tr.classList.add = 'select';
            trow.classList.add('select'); // why it didn't work before - don't knpw
         } else{
            trow.classList.remove('select');
         }
      }

      search.value = ''; //clear search button
   }
   
}