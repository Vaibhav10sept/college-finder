import React, { useEffect, useState } from "react";
import '../Institue/institute.css'
import { useParams } from "react-router-dom";
import Tabs from '../Tabs/Tabs';
import axios from "axios";
import { CubeGrid } from "styled-loaders-react";
import Student from "../Student/Student";

function Institute() {
    const { id } = useParams();

    const [fetcheddata, setfetcheddata] = useState();
    useEffect(() => {

    axios
        .get(`https://college-backend-assignment.herokuapp.com/api/college/${id}`)
        .then((res) => {
            setfetcheddata(res.data);
            console.log("data", fetcheddata);
        })
        .catch((err) => {
            console.log("blog error", err);
        });
    }, []);


    return (
        <div>
            <section class="about" id="about">
                <div class="container">
                    <div class="heading text-center">
                    {fetcheddata?  <h2>College
                        {" "}Name: <span> {fetcheddata.name}</span></h2>:null}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                    <div class="rowcol">
                        <div class="col-lg-6">
                            <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" class="img-fluid" />
                        </div>

                        {fetcheddata ? <div class="col-md-6">
                            <div class="col-md-7">
                                <h3>About the Institution </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>College ID : {fetcheddata._id}</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>College_Name : {fetcheddata.name}</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    Year founded : {fetcheddata.yearFounded}</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>Location : {fetcheddata.city}, {fetcheddata.state}</h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    No of Student : 100 </h4>
                                </div>
                                <div class="col-md-6">
                                    <h4>
                                        <i class="far fa-star"></i>
                                    Courses offered : {fetcheddata.courses.map(item => ( item + ", " ))}</h4>
                                </div>
                            </div>
                        </div> :
                            <CubeGrid size="90px" color="#5443C3" />

                        }
                    </div>
                </div>
                {/* <Student collegeId={id}/> */}
                <Tabs collegeId={id}/>
            </section>
        </div>
    )
}

export default Institute
