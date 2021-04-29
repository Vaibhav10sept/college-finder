import React from 'react'
import { CubeGrid } from "styled-loaders-react";
import './preloader.css';
function Preloader() {
  return (
    <div className="preloader">
      Developed by: Vaibhav Tiwari
      <div> <br />
        <CubeGrid size="120px" color="white" />
      </div>
    </div>
  )
}

export default Preloader
