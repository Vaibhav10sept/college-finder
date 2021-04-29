import React, { useEffect, useState } from "react";
import Student from '../Student/Student'
import '../Tabs/tabs.css'
import College from '../College/College'

function Tabs({ collegeId }) {
  
  // <Student collegeId={collegeId} />
const [showstudent, setshowstudent] = useState(false)
const [showcollege, setshowcollege] = useState(false)

  return (
    <div className="tab_cont">
      <section class="tabs">
        <input id="tab-1" onClick={()=>{setshowstudent(true);setshowcollege(false)}} type="radio" name="radio-set" class="tab-selector-1" />
        <label for="tab-1"  class="tab-label-1">Student List</label>
        <input id="tab-2" onClick={()=>{setshowstudent(false);setshowcollege(true)}} type="radio" name="radio-set" class="tab-selector-2" />
        <label for="tab-2" class="tab-label-2">Similar Colleges</label>
{showstudent?<Student collegeId={collegeId} />:null}
{showcollege?<College collegeId={collegeId} />:null}

      </section>
    </div>
  )
}

export default Tabs
