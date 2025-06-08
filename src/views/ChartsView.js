import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

export default function ChartsView() {
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [{ label: 'Sales', data: [12, 19, 3, 5], backgroundColor: '#5c6ac4' }],
  };
  const doughnutData = {
    labels: ['Chrome', 'Firefox', 'Edge'],
    datasets: [{ data: [60, 25, 15], backgroundColor: ['#5c6ac4','#ecc94b','#f56565'] }],
  };

  return (
    <div className="space-y-8">
      <div><Bar data={barData} /></div>
      <div><Doughnut data={doughnutData} /></div>
    </div>
  );
}
