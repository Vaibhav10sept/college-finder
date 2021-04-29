import React, { useEffect, useState } from "react";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";
import axios from "axios";
import { useParams } from "react-router-dom";
import Flip from 'react-reveal/Flip';
import '../User/user.css'
function User() {
  const [fetcheddata, setfetcheddata] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log("id from props", id);

    axios
      .get(`https://college-backend-assignment.herokuapp.com/api/student/${id}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("college students", fetcheddata);
      })
      .catch((err) => {
        console.log("blog error", err);
      });

  }, []);
  return (
  fetcheddata?
    <Flip bottom cascade>
    <div className="user_container">
      <div class="sc-user-profile">
        <img class="avatar" src="https://png.pngtree.com/png-vector/20200614/ourmid/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" alt="Ash" />
        <div class="username">Student Name: {fetcheddata.name}</div>
        <div class="bio">
          about
       </div>
        <div class="description">
          This para contains the short discription of student.
        </div>

        <div class="data">
          <span class="entypo-heart"> Profiles Details</span>
        </div>
        <div class="left">Student ID</div>
        <div class="right">{fetcheddata._id}</div>
        <div class="left">Name</div>
        <div class="right">{fetcheddata.name}</div>
        <div class="left">Year of batch</div>
        <div class="right">{fetcheddata.yearOfBatch}</div>
        <div class="left">College ID</div>
        <div class="right">{fetcheddata.collegeId}</div>
        <div class="left">Skills</div>
        <div class="right">{fetcheddata.skills.map(item=>(item+", "))}</div>

      </div>
    </div>
    </Flip>:<CubeGrid size="90px" color="#5443C3" />
  
  )
}

export default User
