import React, { useEffect, useState } from "react";
import '../Courses/courses.css'
import Fade from 'react-reveal/Fade';
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";

function Course({course}) {
  const [fetcheddata, setfetcheddata] = useState();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
  axios
      .get(`http://localhost:8000/api/college/course/${course}`)
      .then((res) => {
        setfetcheddata(res.data);
        console.log("data", fetcheddata);
      })
      .catch((err) => {
        console.log("error", err);
      });
 
  }, []);
  return (
    <div className="Courses_container">
      <div class="Courses_wrapper">
        <Fade left cascade>
          <div class="Courses_table">

            <div class="Courses_row Courses_header" style={{cursor:"default!important"}}>
              <div class="Courses_cell">
                ID
      </div>
              <div class="Courses_cell">
                Name
      </div>
              <div class="Courses_cell">
                Year Founded
      </div>
              <div class="Courses_cell">
                City
      </div>
              <div class="Courses_cell">
                State
      </div>
              <div class="Courses_cell">
                Country
      </div>

              <div class="Courses_cell">
                Courses
      </div>
            </div>
            {fetcheddata ? fetcheddata.map((item) => (
              <div class="Courses_row" onClick={()=> { history.push(`/college/${item._id}`);}}>
                <div class="Courses_cell" data-title="ID">
                  {item._id}
                </div>
                <div class="Courses_cell" data-title="Name">
                  {item.name}
                </div>
                <div class="Courses_cell" data-title="Year Founded">
                  {item.yearFounded}
                </div>
                <div class="Courses_cell" data-title="City">
                  {item.city}
                </div>
                <div class="Courses_cell" data-title="State">
                  {item.state}
                </div>
                <div class="Courses_cell" data-title="Country">
                  India
            </div>

                <div class="Courses_cell" data-title="Location">
                  {item.courses.map(cour=>(cour+", "))}
                </div>
                </div>
            )):<CubeGrid size="90px" color="#5443C3" />}


              </div>
        </Fade>
      </div>
      </div>
  )
}

export default Course












// import React from 'react'
// import '../Courses/courses.css'
// function Courses() {
//     return (
//         <div>
//               <div class="blog-card">
//     <div class="meta">
//       <div class="photo" style={{backgroundimage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"}}></div>
//       <ul class="details">
//         <li class="author"><a href="#">John Doe</a></li>
//         <li class="date">Aug. 24, 2015</li>
//         <li class="tags">
//           <ul>
//             <li><a href="#">Learn</a></li>
//             <li><a href="#">Code</a></li>
//             <li><a href="#">HTML</a></li>
//             <li><a href="#">CSS</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div class="description">
//       <h1>Learning to Code</h1>
//       <h2>Opening a door to the future</h2>
//       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
//       <p class="read-more">
//         <a href="#">Read More</a>
//       </p>
//     </div>
//   </div>
//   <div class="blog-card alt">
//     <div class="meta">
//       <div class="photo" style={{backgroundimage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"}} ></div>
//       <ul class="details">
//         <li class="author"><a href="#">Jane Doe</a></li>
//         <li class="date">July. 15, 2015</li>
//         <li class="tags">
//           <ul>
//             <li><a href="#">Learn</a></li>
//             <li><a href="#">Code</a></li>
//             <li><a href="#">JavaScript</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//     <div class="description">
//       <h1>Mastering the Language</h1>
//       <h2>Java is not the same as JavaScript</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
//       <p class="read-more">
//         <a href="#">Read More</a>
//       </p>
//     </div>
//   </div>
//         </div>
//     )
// }

// export default Courses
