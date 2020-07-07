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

    filterData.forEach(sighting => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => row.append('td').text(value));
    });
});

// it shows up in the console log but how to get it on screen?

// select all tr in table to remove then append with filtered by date

button.on('click', function() {
    var searchFilter = d3.select('#datetime');
    var searchValue = searchFilter.property('value');

    var filterData = tableData.filter(sighting => sighting.datetime === searchValue);
    console.log(filterData);
})