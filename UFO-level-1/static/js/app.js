// from data.js
var tableData = data;

// show table
 var tbody = d3.select('tbody');

 console.log(data);

 data.forEach(function(sighting) {
     console.log(sighting);
     var row = tbody.append("tr");

     Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
     });
 });

 // get search bar to work
var button = d3.select('#filter-btn');

button.on('click', function() {
    var inputFilter = d3.select('#datetime');
    var inputValue = inputFilter.property('value');
    console.log(inputValue);

    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData);

    var tbody = d3.select('tbody');

    tbody.html("")

    filterData.forEach(sighting => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => row.append('td').text(value));
    });
});

// it shows up at the end but all the old info stays up too