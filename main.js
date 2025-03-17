const pieChartCanvas = document.createElement("canvas");
const barChartCanvas = document.createElement("canvas");
const mixedChartCanvas = document.createElement("canvas");

const canvasContainer = document.querySelector(".chart");
const lightModeBtn = document.getElementById('lightTheme');
const darkModeBtn = document.getElementById('darkTheme');

const pieChartBtn = document.getElementById("showPieChart");
const barChartBtn = document.getElementById("showBarChart");
const mixedChartBtn = document.getElementById("showMixedChart");
const chartBtns = document.querySelectorAll(".changeChart > button");

new Chart(pieChartCanvas, {
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

new Chart(barChartCanvas, {
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

new Chart(mixedChartCanvas, {
  data: {
      datasets: [{
          type: 'bar',
          label: 'Bar Dataset',
          data: [10, 20, 30, 40]
      }],
      labels: ['January', 'February', 'March', 'April']
  },
});

canvasContainer.appendChild(pieChartCanvas);

function showChart(chartType) {
  canvasContainer.innerHTML = '';
  for (let btn of chartBtns) {
    btn.classList.remove("active");
  }
  if (chartType === "pie") {
    canvasContainer.appendChild(pieChartCanvas);
    pieChartBtn.classList.add("active");
  } else if (chartType === "bar") {
    canvasContainer.appendChild(barChartCanvas);
    barChartBtn.classList.add("active");
  } else if (chartType === "mixed") {
    canvasContainer.appendChild(mixedChartCanvas);
    mixedChartBtn.classList.add("active");
  }
}

function dark() {
  var d = document.body;
  d.classList.remove("light-mode");
  d.classList.add("dark-mode");
  darkModeBtn.classList.add("active");
  lightModeBtn.classList.remove("active");
}

function light() {
  var d = document.body;
  d.classList.remove("dark-mode");
  d.classList.add("light-mode");
  lightModeBtn.classList.add("active");
  darkModeBtn.classList.remove("active");
}

// document.getElementById("theme").addEventListener("click", () => {
//   const meta = document.querySelector('meta[name="color-scheme"]');
//   if (meta.content === "light") {
//     meta.content = "dark";
//     document.body.classList.remove("light-mode");
//     document.body.classList.add("dark-mode");
//   } else {
//     meta.content = "light";
//     document.body.classList.remove("dark-mode");
//     document.body.classList.add("light-mode");
//   }
// });
