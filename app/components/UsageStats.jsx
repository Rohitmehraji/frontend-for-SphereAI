'use client';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale);

export default function UsageStats({ usage = [10, 15, 22, 9, 32, 45, 12] }) {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Tool Usage',
      data: usage,
      backgroundColor: '#6366f1',
      borderRadius: 7,
      borderSkipped: false,
      barPercentage: 0.6,
    }]
  };
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: '#475569', stepSize: 5 } },
      x: { ticks: { color: '#6366f1' } }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-7 mt-10 max-w-xl mx-auto">
      <h2 className="font-bold text-lg mb-2 text-indigo-700">Your AI Tool Usage (week)</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
