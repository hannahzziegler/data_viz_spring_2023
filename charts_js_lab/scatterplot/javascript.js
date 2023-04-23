var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            data: [
                { x: 71.5, y: 3678 },
            ],
            label: "China",
            borderColor: "#01295F",
            backgroundColor: "rgb(1, 41, 95)",
            borderWidth: 2,

        }, {
            data: [
                { x: 61.1, y: 2548 },
            ],
            label: "India",
            borderColor: "#437F97",
            backgroundColor: "#437F97",
            borderWidth: 2,

        }, {
            data: [
                { x: 77.1, y: 45986 },
            ],
            label: "US",
            borderColor: "#849324",
            backgroundColor: "#849324",
            borderWidth: 2,

        }, {
            data: [
                { x: 68.3, y: 5878 },
            ],
            label: "Indonesia",
            borderColor: "#FFB30F",
            backgroundColor: "#FFB30F",
            borderWidth: 2,

        }, {
            data: [
                { x: 71.9, y: 11461 },
            ],
            label: "Brazil",
            borderColor: "#FD151B",
            backgroundColor: "#FD151B",
            borderWidth: 2,

        }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Higher GDP in large nations often leads to longer lives, data shows',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Life expectancy and GDP in a nation have a positive relationship – meaning that as one increases, so does the other.'
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'GDP per Capita'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Life Expectancy'
                }
            }
        }
    }
});