
// from data.js
var tableData = data;

// Get a reference for the table body
var tbody = d3.select('tbody');

// Console.log the ufo data from data.js
console.log(data);

// Function to build table
function buildtable(ufoData) {
    tbody.html('')
    ufoData.forEach((dataRow) => {
        var row = tbody.append('tr');
        Object.values(dataRow).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        })
    })
};
buildtable(tableData)
var button = d3.select('#filter-btn');
button.on('click', function() {
    d3.event.preventDefault()
    var input = d3.select('#datetime').property(value);
    var filteredData = tableData.filter(row => row.datetime === input)
    buildtable(filteredData)
});






