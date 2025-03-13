

const ctx = document.getElementById('myChart');
  
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Blue', 'Red', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'cost of #',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

