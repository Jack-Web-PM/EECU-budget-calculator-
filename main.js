

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

const ctx2 = document.getElementById('myChartTwo');

new Chart(ctx2, {
  type: 'bar',
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

function dark() {
  var d = document.body;
  d.classList.toggle("dark-mode");
}

function light() {
  var l = document.body;
  l.classList.toggle("light-mode");
}




document.getElementById("theme").addEventListener("click", () => {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta.content === "light") {
    meta.content = "dark";
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    meta.content = "light";
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
});















