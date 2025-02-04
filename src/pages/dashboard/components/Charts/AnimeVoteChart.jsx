import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import getAnimeStatistic from "../../../../api/hooks/getAnimeStatistic";

function AnimeVoteChart() {
  const { data, isLoading } = getAnimeStatistic();
  const votes = data?.scores;
  return (
    <>
      <h1 className="font-bold text-3xl my-5 text-center">User votes</h1>
      <ResponsiveContainer
        width="100%"
        height={400}
        style={{ marginTop: "4px", marginBottom: "4px" }}
      >
        <BarChart
          width={500}
          height={300}
          data={votes}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="score" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="votes"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default AnimeVoteChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label} ⭐</p>
        <p className="text-sm text-pink-400">
          Vote:
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};
