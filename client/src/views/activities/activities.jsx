import React from 'react'
import { Link } from "react-router-dom";

import "./activities.module.css"


const Activities = () => {
  return (
    <div>
      activities
      <Link to="/activity/allActivities">
        <button>VIEW ALL ACTIVITIES</button>
      </Link>
      
      <Link to="/activity/createActivity">
        <button>CREATE NEW ACTIVITY</button>
      </Link>
    </div>
  );
}

export default Activities