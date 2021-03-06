
// set the dimensions and margins of the graph
var margin = {top: 16, right: 50, bottom: 40, left: 0},
    width = 890 - margin.left - margin.right,
    height = 204 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#user-data-chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + "0" + "," + margin.top + ")");

// Parse the Data
d3.csv("/public/javascripts/user-data-account-chart.csv", function(data) {

  //what's the highest number
  var tops = (d3.max(data, function(d) { return d.Energy; }));
  console.log("the data="+ tops);

  console.log("highest="+ (d3.max(data, function(d) { return d.Energy; })));

  // List of groups = header of the csv files
  var keys = data.columns.slice(1)

  // Add X axis
  var x = d3.scaleLinear()
    .domain(d3.extent(data, function(d) { return d.year; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
      

     // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 2000])
    .range([ height, 0 ]);
  svg.append("g")
    .attr("transform", "translate(" + "840" + ",0)")
    .call(d3.axisRight(y).ticks(3));

    



  // color palette
  var color = d3.scaleOrdinal()
    .domain(keys)
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3'])

  //stack the data?
  var stackedData = d3.stack()
    .keys(keys)
    (data)
    console.log("This is the stack result: ", stackedData)

  // Show the areas
  svg
    .selectAll("mylayers")
    .data(stackedData)
    .enter()
    .append("path")
      .style("fill", function(d) { console.log(d.key) ; return color(d.key); })
      .attr("d", d3.area()
        .x(function(d, i) { return x(d.data.year); })
        .y0(function(d) { return y(d[0]); })
        .y1(function(d) { return y(d[1]); })
    )

})
