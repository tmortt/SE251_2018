document.getElementById('salaries');



fetch('http://ict.neit.edu/evanrense/salaries.php')

.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });