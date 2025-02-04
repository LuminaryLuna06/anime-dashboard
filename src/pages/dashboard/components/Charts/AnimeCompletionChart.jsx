import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import getAnimeStatistic from "../../../../api/hooks/getAnimeStatistic";

function AnimeCompletionChart() {
  const { data: completion, isLoading } = getAnimeStatistic();

  const completionData = [
    { name: "Watching", count: completion?.watching },
    { name: "Complete", count: completion?.completed },
    { name: "Dropped", count: completion?.dropped },
    { name: "Planned", count: completion?.plan_to_watch },
  ];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <h1 className="font-bold text-3xl my-4 text-center">User watched</h1>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={completionData}>
        <PolarGrid />
        <Tooltip content={<CustomTooltip />} />
        <PolarAngleAxis dataKey="name" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          name="Data"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default AnimeCompletionChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-pink-400">
          Users:
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};
