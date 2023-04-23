var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Crime and Violence',
            'Empowerment',
            'Female Stereotypes',
            'Race, Ethnicity and Identity'
        ],
        datasets: [{
            label: 'India',
            data: [2117, 2365, 2471, 712],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'South Africa',
            data: [704, 368, 498, 97],
            fill: true,
            backgroundColor: 'rgb(255, 166, 77, .4)',
            borderColor: 'rgb(255, 128, 0)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 166, 77)'
        },
        {
            label: 'United Kingdom',
            data: [1906, 1240, 1823, 366],
            fill: true,
            backgroundColor: 'rgba(102, 255, 102, 0.3)',
            borderColor: 'rgba(0, 179, 0)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(102, 255, 102)'
        },
        {
            label: 'United States',
            data: [1309, 1296, 1446, 586],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'News outlet headline coverage themes across 4 countries',
                font: {
                    size: 30,
                    family: 'Open Sans'
                }
            },
            subtitle: {
                display: true,
                text: "Data shows the freqency of a theme appearing in a headline for the top 50 news outlets in the world, which are each headquartered in one of four countries.",
                font: {
                    size: 15,
                    family: 'Open Sans'
                },
            },
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        }
    }
});