import React from 'react'
import College from './College'
function CollegeDash() {
    const state = ["uttar pradesh", "haryana", "madhya pradesh", "maharashtra", "andhra pradesh", "assam", "jharkhand"]

    return (

        state.map(item => (
            <>
                <h1 className="headbar">Colleges in {item}</h1>
                <College state={item} />
            </>
        ))



    )
}

export default CollegeDash
