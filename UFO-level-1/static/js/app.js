// from data.js
var tableData = data;

// YOUR CODE HERE!
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