var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [
            {
                label: 'Average GDP per capita',
                data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
                backgroundColor: [
                    '#FFA500'
                ],
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per capita in 5 regions around the world',
                font: {
                    size: 36
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia have the highest GDP per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});