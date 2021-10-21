import React, { useEffect, useState } from "react";
import {Spinner} from "react-bootstrap";

function CohortChart ({google}) {
const [chart, setChart] = useState(null);
    
  useEffect(() => {
    if (google && !chart) {
        //TODO draw the chart
    }
  }, null);

  return (
    <>
      {!google && <Spinner />}
      <div id="pizzaChart" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default CohortChart;