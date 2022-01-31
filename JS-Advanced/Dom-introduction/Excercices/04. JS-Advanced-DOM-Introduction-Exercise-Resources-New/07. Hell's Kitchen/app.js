function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('div#inputs textarea'); // take input data for restaurants
      let array = input.value; // take only the value from input
      array = array.substring(1, array.length - 1) // remove [] brackets from string
      let match = array.match(/".+?"/gm); //make a real array from the input

      let allRestaurantData = {};
      for (let m of match) { //iterate the array 
         m = m.substring(1, m.length - 1); // remove ""

         let [restaurant, ...rest] = m.split(' - ');
         let workers = rest[0].split(', ');

         // add worker name and salary to restaurant object
         for (let worker of workers) {
            let [names, salary] = worker.split(' ');
            salary = Number(salary);

            let obj = {};
            obj[names] = salary;

            if (allRestaurantData[restaurant] === undefined) {
               allRestaurantData[restaurant] = obj;
            } else {
               allRestaurantData[restaurant] = { ...allRestaurantData[restaurant], ...obj }
            }

         }


      }

      let keys = Object.keys(allRestaurantData)

      // sum totalsalaries, average salary and add workers number
      for (let key of keys) {
         let listSalaries = Object.values(allRestaurantData[key]);
         listSalaries = listSalaries.map(Number);

         let totalWorkersNumber = listSalaries.length; // number of workers
         let totalSalaries = listSalaries.reduce((a, b) => a + b, 0); // total salaries
         let averageSalary = totalSalaries / totalWorkersNumber;

         allRestaurantData[key].totalSalaries = totalSalaries;
         allRestaurantData[key].averageSalary = averageSalary;

      }
      let orderRestaurants = keys.sort((a, b) => allRestaurantData[b].averageSalary - allRestaurantData[a].averageSalary);
      let firstRestaurant = orderRestaurants[0];
      let firstAverageSalary = allRestaurantData[firstRestaurant].averageSalary;

      //delete average and total salary to order workers
      delete allRestaurantData[firstRestaurant].averageSalary;
      delete allRestaurantData[firstRestaurant].totalSalaries;

      let orderedWorkers = Object.entries(allRestaurantData[firstRestaurant]);
      orderedWorkers = orderedWorkers.sort((a, b) => b[1] - a[1]);

      let bestRestaurant = document.querySelector('#bestRestaurant p');

      bestRestaurant.textContent = `Name: ${firstRestaurant} Average Salary: ${(firstAverageSalary).toFixed(2)} Best Salary: ${(orderedWorkers[0][1]).toFixed(2)}`

      let bestRestaurantworkers = document.querySelector('#workers p');

      let print = '';
      for (let i = 0; i < orderedWorkers.length; i++) {
         let worker = orderedWorkers[i][0];
         let salary = orderedWorkers[i][1];
         print += `Name: ${worker} With Salary: ${salary} `
      }

      bestRestaurantworkers.textContent = print;
   }
}