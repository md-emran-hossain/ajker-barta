import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styles from '../../styles/Covid.module.css'
import { HiUsers } from 'react-icons/hi'
import { FcBusinessman, FcDataRecovery } from 'react-icons/fc'
import { BsEmojiSmile } from 'react-icons/bs'
import { RiHotelBedLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'

const Global = () => {
  const [globalData, setGlobalData] = useState({})
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/all?yesterday')
      .then(res => res.json())
      .then(data => setGlobalData(data))
      .catch(err => console.log(err.message))
  }, [])
  const { cases, recovered, active, deaths, todayCases, todayRecovered } = globalData
  const covidData = [
    {
      name: "TC",
      Globaly: cases,
    },
    {
      name: "TR",
      Globaly: recovered,
    },
    {
      name: "AC",
      Globaly: active
    },
    {
      name: "TD",
      Globaly: deaths,
    },
    {
      name: "TC",
      Globaly: todayCases
    },
    {
      name: "TR",
      Globaly: todayRecovered,
    }
  ];

  return (
    <div className={styles.global}>
      <div className="container">
        <h2 className={styles.title}>Global Update</h2>
        <div className={styles.globalRow}>
          <div className={styles.lasUpdate}>
            <div className={styles.infoBox}>
              <div>
                <HiUsers style={{ color: "#18dcff", fontSize: "25px", margin: "0 auto" }} />
                <p>Total Cases</p>
                <h1>{cases}</h1>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div>
                <BsEmojiSmile style={{ color: "#feca57", fontSize: "25px", margin: "0 auto" }} />
                <p>Total Recovered</p>
                <h1>{recovered}</h1>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div>
                <FcBusinessman style={{ fontSize: "25px", margin: "0 auto" }} />
                <p>Active Cases</p>
                <h1>{active}</h1>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div>
                <RiHotelBedLine style={{ color: "#0be881", fontSize: "25px", margin: "0 auto" }} />
                <p>Total Deaths</p>
                <h1>{deaths}</h1>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div>
                <AiOutlineUser style={{ color: "#f368e0", fontSize: "25px", margin: "0 auto" }} />
                <p>Todays Case</p>
                <h1>{todayCases}</h1>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div>
                <FcDataRecovery style={{ fontSize: "25px", margin: "0 auto" }} />
                <p>Todays Recovered</p>
                <h1>{todayRecovered}</h1>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.chart}>
              <ResponsiveContainer>
                <LineChart className={styles.lineChart} data={covidData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                  <YAxis style={{ fontSize: "11px" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Globaly"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.indicateColor}>
              <div><div style={{ color: "#18dcff", fontWeight: "500" }}>TC</div>Total Cases</div>
              <div><div style={{ color: "#feca57", fontWeight: "500" }}>TR</div>Total Recovered</div>
              <div><div style={{ color: "#ff4d4d", fontWeight: "500" }}>AC</div>Active Casess</div>
              <div><div style={{ color: "#0be881", fontWeight: "500" }}>TD</div>Total Deaths</div>
              <div><div style={{ color: "#f368e0", fontWeight: "500" }}>TC</div>Todays Case</div>
              <div><div style={{ color: "#3c40c6", fontWeight: "500" }}>TR</div>Todays Recovered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;