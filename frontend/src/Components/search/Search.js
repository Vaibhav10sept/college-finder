import React from 'react'
import axios from "axios";
import College from '../College/College';

function Search({search}) {
  const [fetcheddata, setfetcheddata] = React.useState();
    return (
        <>
        {search? <h3>Search result for: {search}</h3>:null}
       
      <College searched={true} search={search} />
      </>
    )
}

export default Search
