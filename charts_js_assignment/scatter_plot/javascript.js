var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'scatter',
  padding: 10,
  data: {
    datasets: [{
      data: [
        { x: 65.21, y: 23.77 },
      ],
      label: "MSN",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,

    }, {
      data: [
        { x: 90.03, y: 0.03 },
      ],
      label: "Google News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    },
    {
      data: [
        { x: 40.67, y: 1.72 },
      ],
      label: "ESPN",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    },
    {
      data: [
        { x: 67.40, y: 48.27 },
      ],
      label: "Fox News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 47.58, y: 11.91 },
      ],
      label: "Yahoo Finance",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 53.71, y: 26.84 },
      ],
      label: "Buzzfeed",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 29.50, y: 46.15 },
      ],
      label: "New York Times",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 52.65, y: 45.94 },
      ],
      label: "USA Today",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 59.14, y: 4.20 },
      ],
      label: "Huffington Post",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 59.13, y: 11.63 },
      ],
      label: "Yahoo Sports",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 48.49, y: 57.73 },
      ],
      label: "Washington Post",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 38.72, y: 48.62 },
      ],
      label: "Forbes",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 32.80, y: 4.92 },
      ],
      label: "CNET",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 57.58, y: 45.93 },
      ],
      label: "NBC News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 55.43, y: 31.96 },
      ],
      label: "Popsugar",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 33.28, y: 12.04 },
      ],
      label: "Bloomberg",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 47.68, y: 49.35 },
      ],
      label: "Insider",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 59.33, y: 65.87 },
      ],
      label: "ABC News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 72.47, y: 32.25 },
      ],
      label: "Yahoo News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 57.84, y: 10.34 },
      ],
      label: "Breitbart",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 87.31, y: 10.07 },
      ],
      label: "KSL News Utah",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 87.03, y: 64.84 },
      ],
      label: "New York Daily News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 25.94, y: 5.28 },
      ],
      label: "Politico",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 61.23, y: 18.42 },
      ],
      label: "SF Gate",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 39.77, y: 42.59 },
      ],
      label: "NPR",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 68.54, y: 46.20 },
      ],
      label: "CBS News",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 85.85, y: 4.27 },
      ],
      label: "Raw Story",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 62.68, y: 60.51 },
      ],
      label: "People",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 15.30, y: 0.31 },
      ],
      label: "Seeking Alpha",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 40.83, y: 9.56 },
      ],
      label: "TMZ",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 54.34, y: 35.31 },
      ],
      label: "LA Times",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 30.81, y: 12.71 },
      ],
      label: "Rolling Stone",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 47.21, y: 12.55 },
      ],
      label: "Bleacher Report",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 31.81, y: 5.54 },
      ],
      label: "Pitchfork",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 40.03, y: 15.06 },
      ],
      label: "CNBC",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 43.65, y: 7.77 },
      ],
      label: "Gizmodo",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 29.95, y: 17.97 },
      ],
      label: "Wall Street Journal",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 52.20, y: 16.11 },
      ],
      label: "Complex",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 67.09, y: 53.37 },
      ],
      label: "New York Post",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 37.55, y: 24.44 },
      ],
      label: "Refinery29",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }, {
      data: [
        { x: 38.12, y: 16.67 },
      ],
      label: "Slate",
      borderColor: "#3e95cd",
      backgroundColor: "rgb(62,149,205,0.1)",
      borderWidth: 2,
      pointRadius: 6,
    }
    ]
  },
  options: {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Bias'
        },
        max: 100
      },
      x: {
        title: {
          display: true,
          text: 'Polarity'
        }
      },

    },
    plugins: {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Polarization and bias toward women in U.S. media outlets' headlines",
        padding: 1,
        font: {
          size: 30,
          family: 'Open Sans'
        }
      },
      subtitle: {
        display: true,
        text: "America's 50 biggest news outlets mostly hover around a 10-40% bias and 30-60% polarization percentage when writing headlines about women.",
        padding: 10,
        font: {
          size: 15,
          family: 'Open Sans'
        }
      }
    }
  }
});