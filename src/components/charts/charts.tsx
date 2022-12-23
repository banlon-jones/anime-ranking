import React from "react";
import Anime from "../../models/anime";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./charts.css";

function Chart(Props : any) {
  const { animes } = Props;
  const data: any[] = [];

  const groupBy = (array: Anime[], key: string) : any => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const groupedAnime = groupBy(animes, 'year');

  const chartData = (groupedAnime: any) => {
    for (const key in groupedAnime) {
      if (key !== 'null'){
        data.push({year: key, values: groupedAnime[key], number: groupedAnime[key].length});
      }
    }
  };
  chartData(groupedAnime);

  // @ts-ignore
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          {
            payload[0].payload.values.map((item:Anime) => {
              return (<p> {item.title} </p>);
            })
          }
        </div>
      );
    }

    return null;
  };

  return(
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{top: 10,right: 30, left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
              <stop offset="30%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="70%" stopColor="#7be1a5" stopOpacity={0.5}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<CustomTooltip active={undefined} payload={undefined} label={undefined} />} />
          <Area type="monotone" dataKey="number" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"  />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
