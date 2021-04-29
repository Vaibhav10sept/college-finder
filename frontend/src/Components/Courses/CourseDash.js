import React from 'react'
import Course from './Course'
function CourseDash() {
    const state = ["uttar pradesh", "haryana", "madhya pradesh", "maharashtra", "andhra pradesh", "assam", "jharkhand"]
    const course = ["IT", "CSE", "ML",  "PHD", "HM", "BSC", "BCOM", "MCOM", "BA", "MA", "MSC"];
    return (
        
           course.map(item=>(
               <>
            <h1 className="headbar">Colleges that offers {item}</h1>
            <Course course={item}/>
            </>
           )) 
           

     
    )
}

export default CourseDash
