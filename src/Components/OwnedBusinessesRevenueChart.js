import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js bileşenlerini kaydet
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OwnedBusinessesRevenueChart = () => {
  // Grafik verileri
  const data = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran"], // X ekseni
    datasets: [
      {
        label: "Gelir",
        data: [5000, 7000, 8000, 6000, 9000, 11000], // Y ekseni
        borderColor: "rgba(75, 192, 192, 1)", // Çizgi rengi
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Çizgi altı dolgusu
        tension: 0.3, // Çizgiyi yumuşatır
      },
    ],
  };

  // Grafik seçenekleri
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Owned Businesses Revenue Chart",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default OwnedBusinessesRevenueChart;
