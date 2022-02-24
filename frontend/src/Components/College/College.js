import React, { useEffect, useState } from "react";
import '../College/college.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
import { useHistory } from "react-router-dom";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";

function College({ state, collegeId, searched, search }) {
  const [fetcheddata, setfetcheddata] = useState();

  const history = useHistory();



  React.useEffect(() => {
    if (state) {
      axios
        .get(`http://localhost:8000/api/college/state/${state}`)
        .then((res) => {
          setfetcheddata(res.data);
          console.log("data", fetcheddata);
        })
        .catch((err) => {
          console.log("blog error", err);
        });
    }
    if (collegeId) {
      axios
        .get(`http://localhost:8000/api/college/similarCollege/${collegeId}`)
        .then((res) => {
          setfetcheddata(res.data);
          console.log("data", fetcheddata);
        })
        .catch((err) => {
          console.log("blog error", err);
        });
    }
    if (searched) {
      console.log("searchinggg");
      axios
        .get("http://localhost:8000/api/college")
        .then((res) => {
          setfetcheddata(res.data);
          console.log("data", fetcheddata);
        })
        .catch((err) => {
          console.log("blog error", err);
        });
    }

  }, []);
  return (
searched?
    <div className="College_container">
      <div class="College_wrapper">
        <Fade left cascade>
          <div class="College_table">

            {search?<div class="College_row College_header" style={{ cursor: "default" }}>
              <div class="College_cell">
                ID
      </div>
              <div class="College_cell">
                Name
      </div>
              <div class="College_cell">
                Year Founded
      </div>
              <div class="College_cell" style={{ textTransform: "uppercase" }}>
                City
      </div>
              <div class="College_cell" style={{ textTransform: "uppercase" }}>
                State
      </div>
              <div class="College_cell">
                Courses
      </div>
            </div>:<h2>You haven't written anything yet</h2>}
            {fetcheddata ? fetcheddata.filter(val=>{
              if(search == "") {
                return null;
              }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map((item) => (
              <div class="College_row" onClick={() => { history.push(`/college/${item._id}`); window.location.reload(); }}>
                <div class="College_cell" data-title="Id">
                  {item._id}
                </div>
                <div class="College_cell" data-title="Name">
                  {item.name}
                </div>
                <div class="College_cell" data-title="Year Founded">
                  {item.yearFounded}
                </div>
                <div class="College_cell" data-title="City">
                  {item.city}
                </div>
                <div class="College_cell" data-title="State">
                  {item.state}
                </div>
                <div class="College_cell" data-title="Courses">
                  {item.courses.map(cour => (cour + ", "))}
                </div>
              </div>
            )) : <CubeGrid size="90px" color="#5443C3" />}


          </div>
        </Fade>
      </div>
    </div>:
     <div className="College_container">
     <div class="College_wrapper">
       <Fade left cascade>
         <div class="College_table">

           {fetcheddata?<div class="College_row College_header" style={{ cursor: "default" }}>
             <div class="College_cell">
               ID
     </div>
             <div class="College_cell">
               Name
     </div>
             <div class="College_cell">
               Year Founded
     </div>
             <div class="College_cell" style={{ textTransform: "uppercase" }}>
               City
     </div>
             <div class="College_cell" style={{ textTransform: "uppercase" }}>
               State
     </div>
             <div class="College_cell">
               Courses
     </div>
           </div>:null}
           {fetcheddata ? fetcheddata.map((item) => (
             <div class="College_row" onClick={() => { history.push(`/college/${item._id}`); window.location.reload(); }}>
               <div class="College_cell" data-title="Id">
                 {item._id}
               </div>
               <div class="College_cell" data-title="Name">
                 {item.name}
               </div>
               <div class="College_cell" data-title="Year Founded">
                 {item.yearFounded}
               </div>
               <div class="College_cell" data-title="City">
                 {item.city}
               </div>
               <div class="College_cell" data-title="State">
                 {item.state}
               </div>
               <div class="College_cell" data-title="Courses">
                 {item.courses.map(cour => (cour + ", "))}
               </div>
             </div>
           )) : <CubeGrid size="90px" color="#5443C3" />}


         </div>
       </Fade>
     </div>
   </div>
  )
}

export default College
