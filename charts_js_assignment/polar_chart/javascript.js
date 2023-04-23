var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
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
            label: 'My First Dataset',
            data: [.21, .15, .18, .17, .21, .16, .13, .16, .19, .18],
            backgroundColor: [
                '#4363d8',
                '#f58231',
                '#911eb4',
                '#e6194B',
                '#ffd700',
                '#9A6324',
                '#00ffff',
                '#ff00ff',
                '#800000',
                '#3cb44b'
            ]
        }]
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
                text: 'Data collected by The Pudding measures bias on a scale from 0 to 1 among the top 50 global news outlets. Outlets shown on the chart have the most frequent occurrences of headlines involving women.',
                font: {
                    size: 15,
                    family: 'Open Sans'
                }
            }
        }
    }
});