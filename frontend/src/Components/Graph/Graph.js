import React, {  useState } from "react";
import '../Graph/graph.css'
import { PieChart, Pie,  Tooltip } from "recharts";
import axios from "axios";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default function Graph() {
  const [fetcheddata, setfetcheddata] = useState();
  const [fetcheddata2, setfetcheddata2] = useState();


  React.useEffect(() => {

    axios
      .get(`http://localhost:8000/api/college/countStates`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });


    axios
      .get(`http://localhost:8000/api/college/countCourses`)
      .then((res) => {
        setfetcheddata2(res.data);
        console.log("data", fetcheddata2);
      })
      .catch((err) => {
        console.log("blog error", err);
      });
  }, []);
  return (

    <div class="pie_chart">
      {fetcheddata ? (
        <div className="chartinn">
          <h2 className="headbar charthead">state wise division of colleges</h2>
          <PieChart width={400} height={400} >
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={fetcheddata}
              cx={150}
              cy={160}
              outerRadius={100}
              fill="#5443c3"
              label
              className="pie1"
            />
            <Tooltip />

          </PieChart>

        </div>) : <CubeGrid size="90px" color="#5443C3" />}

      {fetcheddata ? (
        <div className="chartinn">
          <h2 className="headbar charthead">course wise division of colleges</h2>
          <PieChart width={400} height={400} >
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={fetcheddata2}
              cx={150}
              cy={160}
              outerRadius={100}
              fill="#5443c3"
              label
              className="pie1"
            />
            <Tooltip />

          </PieChart>

        </div>) : <CubeGrid size="90px" color="#5443C3" />}



    </div>
    
  );

}
