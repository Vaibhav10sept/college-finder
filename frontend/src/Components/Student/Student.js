import React, { useEffect, useState } from "react";
import './student.css'
import axios from "axios";
import Fade from 'react-reveal/Fade';
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";
import { useHistory } from "react-router-dom";

function Student({ collegeId }) {
  const [fetcheddata, setfetcheddata] = useState();
  const history = useHistory();

  useEffect(() => {
    console.log("id from props",collegeId);

    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/student/collegeId/${collegeId}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("college students", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });

  }, []);
  return (
    <div className="Student_container">
      <div class="Student_wrapper">
        <Fade left cascade>
          <div class="Student_table">

            <div class="Student_row Student_header">
              <div class="Student_cell">
                ID
      </div>
              <div class="Student_cell">
                NAME
      </div>
              <div class="Student_cell">
                BATCH_YEAR
      </div>
              {/* <div class="Student_cell">
                College_ID
      </div> */}
              <div class="Student_cell">
                SKILLS
      </div>

            </div>
            {fetcheddata ? fetcheddata.map(item=>(
              <div class="Student_row"  onClick={()=> { history.push(`/student/${item._id}`);}}>
              <div class="Student_cell" data-title="ID">
                {item._id}
              </div>
              <div class="Student_cell" data-title="Name">
                {item.name}
              </div>
              <div class="Student_cell" data-title="Batch Year">
                {item.yearOfBatch}
              </div>
              {/* <div class="Student_cell" data-title="College Id">
                {item.collegeId}
              </div> */}
              <div class="Student_cell" data-title="Courses">
                {item.skills.map(skill=>(skill+", "))}
              </div>

            </div>
            )) : <CubeGrid size="90px" color="#5443C3" />}
      

          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Student
