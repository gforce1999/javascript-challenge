// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//  Use d3 to update each cell's text with
//  ufo sightings values (datetime, city, state,
//  country, shape, durationMinutes, comments)
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo sighting object
    var cell = row.append("td");
    cell.text(value);
  });
}); 

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click",runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault()
         
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    // Filter desired values
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    console.log(filteredData);

    // remove current table from table body
    tbody.html("");

    // append new
    filteredData.forEach(function(ufoSighting) {
      console.log(ufoSighting);
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the ufo sighting object
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

