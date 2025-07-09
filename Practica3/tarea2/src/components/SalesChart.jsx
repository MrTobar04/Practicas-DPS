"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import styles from "../app/page.module.css";

const SalesChart = ({ data }) => {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height={400}>
        
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#0070f3" />
        </LineChart>

        
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
