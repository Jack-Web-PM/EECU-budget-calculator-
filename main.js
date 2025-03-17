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
    labels: ['/12 Monthly Gross', '12% State Tax', '7% Fed Tax', '6.2% Social Security', '1.45% Medicare', '1% State Disability', '5% Retirement Investment', '-$180 Medical Insurance', 'House Payment Afford 33%', 'Your Monthly Income'],
    datasets: [{
      label: 'cost of #',
      data: [12, 12, 7, 5, 2, 3, 3, 3, 3, 3],
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
    labels: ['Blue', 'Red', 'Yellow', 'Green', 'Purple', 'Orange',],
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


function reset(){
  let table = document.getElementById("check");
  table.innerHTML = `<tr>
  <td class="regTable">
      <input type="text" placeholder="Title" id="21">
  </td>
  <td class="regTable">
      <button onclick="swapDW()" id="22">Deposit</button>
  </td>
  <td class="regTable">
      <input type="text" placeholder="Amount" id="23">
  </td>
  <td class="regTable">
      <button onclick="addPayment()">Add Payment</button>
  </td>
</tr>`

  k = b - j;
  document.getElementById("ahhhh").innerText = "Your current Balance is $" + k.toFixed(2);
}

function addPayment () {
  let table = document.getElementById("check");
  let row = document.createElement("tr")
  let first = document.createElement("td")
  let second = document.createElement("td")
  let third = document.createElement("td")
  let fourth = document.createElement("td")

  let name = document.getElementById("21").value;
  first.innerText = name;
  
  let amount = parseFloat(document.getElementById("23").value);
  third.innerText = "$" + amount;

  let m;
  
  if (dwBool) {
      second.innerText = "Deposit";
      m = k + amount;
  } else {
      second.innerText = "Withdrawal";
      m = k - amount;
  }

  fourth.innerText = "$" + m.toFixed(2);
  k = m;

  first.setAttribute("class", "cool2");
  second.setAttribute("class", "cool2");
  third.setAttribute("class", "cool2");
  fourth.setAttribute("class", "cool2");
  row.append(first);
  row.append(second);
  row.append(third);
  row.append(fourth);
  table.append(row);

}



