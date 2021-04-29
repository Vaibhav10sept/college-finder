import React from 'react'
import Courses from '../Courses/Course'
import Graph from '../Graph/Graph'
import Institute from '../Institue/Institute'
import Table from '../Table/Table'
import User from '../User/User'
import Slide from 'react-reveal/Slide';
import './dash.css'
import StudentDash from '../Courses/CourseDash'

import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  useHistory,
  Link,
  NavLink
} from "react-router-dom";
import CollegeDash from '../College/CollegeDash'
import Landing from '../landing/Landing'

function Dash() {
  return (
    <div>

      <div class="dashbody">
        <input type="checkbox" id="mobilmenu" />
        <div class="sidebar">
          <Link to="/">
            <div class="logo"><i class="fa fa-shopping-bag"></i><h2>Welcome User</h2></div></Link>
          <div class="menu">
            <Slide top cascade>
              <ul>

                <NavLink to="/state" className="Nav_link" activeClassName="activeRoute"> <li class="rout"> Colleges by State</li></NavLink>

                <NavLink to="/course" className="Nav_link" activeClassName="activeRoute">  <li class="rout">  Colleges by Course</li></NavLink>
                <NavLink to="/chart" className="Nav_link" activeClassName="activeRoute">     <li class="rout">  View Charts</li></NavLink>
          





              </ul>
            </Slide>
          </div>
        </div>
        <label id="mmenu" for="mobilmenu">
          <i class="fa fa-bars"></i>
          <i class="fa fa-times"></i>
        </label>
        <div class="icerik">
          <div class="ust">
            <div class="ara">
              <input type="text" placeholder="Search Product" />
              <i class="fa fa-search"></i>
            </div>
            <div class="kullanıcı">
              <a target="_blank" href="https://portfolio-vaibhav-tiwari.herokuapp.com"><i class="fas fa-wallet"></i></a>
              <a target="_blank" href="https://github.com/Vaibhav10sept"><i class="fa fa-github" aria-hidden="true"></i></a>
              <a target="_blank" href="https://www.linkedin.com/in/vaibhav-tiwari-8043b6175/"><label style={{ position: "relative" }} >
                <i id="bildirim" class="fa fa-linkedin" aria-hidden="true"></i>
              </label></a>
              <span>Vaibhav Tiwari</span>
              

            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route exact path="/state" component={CollegeDash} />
            <Route exact path="/course" component={StudentDash} />
            <Route exact path="/chart" component={Graph} />
            <Route exact path="/college/:id" component={Institute} />
            <Route exact path="/student/:id" component={User} />



          </Switch>
          {/* <College />
        <Graph />
        <User />
        <Institute />
        <Courses /> */}
        </div>

      </div>

    </div >
  )
}

export default Dash
