

// ---------- CHARTS ----------//
// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
function generateRandomData() {
  const newDataTemp = Array.from({ length: 7 }, () => Math.floor(Math.random() * 30) + 20);
  const newDataHumidity = Array.from({ length: 7 }, () => Math.floor(Math.random() * 30) + 30);
  const newDataLux = Array.from({ length: 7 }, () => Math.floor(Math.random() * 300) + 40);
console.log('object');
  // Cập nhật dữ liệu series trong options
  areaChartOptions.series = [
    { name: 'Temp', data: newDataTemp },
    { name: 'Humidity', data: newDataHumidity },
    { name: 'Lux', data: newDataLux },
  ];

  // Cập nhật biểu đồ
  areaChart.updateSeries(areaChartOptions.series);
}
// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Temp',
      data: [22, 21, 28, 36, 24, 30, 16],
    },
    {
      name: 'Humidity',
      data: [60, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'Lux',
      data: [400, 39, 50, 477, 60, 318, 40],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 325,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#ff4949', '#ff6d00', '#2e7d32'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },

  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};
setInterval(generateRandomData, 1000);
// Random nhiệt độ
// Function to generate a random temperature between 10°C and 40°C
function generateRandomTemperature() {
  return Math.floor(Math.random() * (40 - 10 + 1)) + 10;
}

// Function to update the temperature in the HTML
function updateTemperature() {
  const tempValueElement = document.getElementById('temp-value');
  const randomTemperature = generateRandomTemperature();
  tempValueElement.textContent = `${randomTemperature}°C`;
}

// Initial update
updateTemperature();

// Set up an interval to update the temperature every few seconds (e.g., every 5 seconds)
setInterval(updateTemperature, 100000); // Adjust the interval as needed

//-------------FAN,LIGHT-----------//
// Bật tắt quạt
const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
setInterval(()=>{
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
},1000)
areaChart.render();

const fanToggle = document.querySelector('#fan-toggle');
const fanIcon = document.querySelector('.card-inner1 i.fa-fan');

fanToggle.addEventListener('change', () => {
  if (fanToggle.checked) {
    fanIcon.classList.add('fa-spin');
  } else {
    fanIcon.classList.remove('fa-spin');
  }
});

// Bật tắt đèn
const lightToggle = document.querySelector('#light-toggle');
const lightIcon = document.querySelector('.card-inner2 i.fas.fa-lightbulb');

lightToggle.addEventListener('change', () => {
  if (lightToggle.checked) {
    lightIcon.style.color = 'yellow';
  } else {
    lightIcon.style.color = 'white';
  }
});
