var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Daily Mail',
            'Telegraph',
            'ABC News',
            'India Times',
            'Mirror',
            'The Washington Post',
            'The New York Times',
            'Independent',
            'New York Daily News',
            'Express'
        ],
        datasets: [{
            label: 'Average bias across 4 years (on a scale from 0 to 1)',
            data: [.21, .15, .18, .17, .21, .16, .13, .16, .19, .18],
            backgroundColor: [
                'rgba(0, 179, 0, 0.4)',
            ],
        },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                family: 'Open Sans'
            },
            title: {
                display: true,
                text: 'Bias Against Women in Top Global Media Outlets',
                font: {
                    size: 30,
                    family: 'Open Sans'
                }
            },
            subtitle: {
                display: true,
                text: 'Data collected by The Pudding measures bias among the top 50 global news outlets from 2017-2021. Outlets shown have the most frequent occurrences of headlines involving women.',
                font: {
                    size: 15,
                    family: 'Open Sans'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                label: "Bias rating out of 1"
            }
        },
    }
});