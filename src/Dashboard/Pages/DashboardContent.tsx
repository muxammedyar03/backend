import React, { useState } from 'react';
import { themeVariables, useTheme } from '../../Context/Theme';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Download } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent: React.FC = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const {theme} = useTheme()
  const themeClass = themeVariables[theme]

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Completed Orders',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Incoming Orders',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    // Implement Excel download logic here
    console.log('Downloading Excel file...');
  };

  return (
    <div className={`p-6 ${themeClass.text}`}>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="mb-4 flex space-x-4">
        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleDateChange}
          className={`${themeClass.input} ${themeClass.borderSecondary} rounded p-2`}
        />
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleDateChange}
          className={` ${themeClass.input} ${themeClass.borderSecondary} rounded p-2`}
        />
        <button
          onClick={handleDownload}
          className={` ${themeClass.button} px-4 py-2 rounded flex_center gap-2`}
        >
          <Download/>
          Download Excel
        </button>
      </div>
      <div className={` ${themeClass.secondaryBg} ${themeClass.borderSecondary}  text-white p-4 rounded shadow w-[80%]`}>
        <Line data={chartData}/>
      </div>
    </div>
  );
};

export default DashboardContent;

