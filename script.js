// Generate some random data
var xValues = Array.from({length: 100}, (_, i) => i);
var yValues = Array.from({length: 100}, () => Math.random() * 100);

// Define data trace
var trace = {
    x: xValues,
    y: yValues,
    type: 'scatter'
};

// Define layout
var layout = {
    title: 'Plotly Line Chart',
    xaxis: {
        title: 'X Axis'
    },
    yaxis: {
        title: 'Y Axis'
    },
    margin: {
        l: 50,
        r: 50,
        t: 50,
        b: 50
    },
    dragmode: 'zoom', // Enable zoom and pan
    selectdirection: 'h', // Horizontal selection
    showlegend: false
};

// Plot the chart
Plotly.newPlot('chart', [trace], layout);
