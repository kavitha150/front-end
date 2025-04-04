import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { AreaChart, Area } from "recharts";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import "./Dashboard.css";


const threatData = [
  { name: "SQL Injection", count: 30 },
  { name: "XSS", count: 45 },
  { name: "DDoS", count: 25 },
  { name: "Phishing", count: 40 },
  { name: "Ransomware", count: 20 }
];

const attackTrends = [
  { month: "Jan", attacks: 5 },
  { month: "Feb", attacks: 15 },
  { month: "Mar", attacks: 25 },
  { month: "Apr", attacks: 30 },
  { month: "May", attacks: 20 }
];

const pieData = [
  { name: "High Risk", value: 40 },
  { name: "Medium Risk", value: 35 },
  { name: "Low Risk", value: 25 }
];

const areaData = [
  { name: "Jan", risk: 20 },
  { name: "Feb", risk: 30 },
  { name: "Mar", risk: 50 },
  { name: "Apr", risk: 40 },
  { name: "May", risk: 60 }
];

const radarData = [
  { category: "SQL Injection", level: 90 },
  { category: "XSS", level: 80 },
  { category: "DDoS", level: 60 },
  { category: "Phishing", level: 85 },
  { category: "Ransomware", level: 70 }
];

const COLORS = ["#FF5733", "#FFC300", "#28A745"];

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1>cybersecurity Threat Dashboard</h1>

      <div style={styles.chartContainer}>
        <h3>🟠 Threat Frequency (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={threatData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h3>🔵 Attack Trends Over Time (Line Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attackTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="attacks" stroke="#FF5733" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h3>🟢 Risk Distribution (Pie Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h3>🟣 Risk Levels Over Time (Area Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="risk" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.chartContainer}>
        <h3>🔴 Vulnerability Radar (Radar Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis />
            <Radar name="Threat Level" dataKey="level" stroke="#FF5733" fill="#FF5733" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" },
  chartContainer: { marginBottom: "40px" }
};

export default Dashboard;













// import React from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const data = [
//     { name: "Safe Websites", value: 70 },
//     { name: "SQL Injection Risk", value: 15 },
//     { name: "XSS Threats", value: 10 },
//     { name: "Other Risks", value: 5 },
// ];

// const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#FF0000"];

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>📊 Threat Analysis Dashboard</h2>
//             <PieChart width={400} height={400}>
//                 <Pie data={data} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value">
//                     {data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                 </Pie>
//                 <Tooltip />
//             </PieChart>
//         </div>
//     );
// };

// export default Dashboard;
