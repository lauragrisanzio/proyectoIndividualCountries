
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getActivities } from "../../redux/actions";
import ActivityCard from "../activityCard/activityCard.component";

import "./activitiesCards.module.css";

const ActivitiesCards = () => {

  const dispatch = useDispatch();
  const { allActivities } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <Link to={"/activity"}>
        <button>BACK</button>
      </Link>
      <p>Muestra todas las actividades creadas</p>
      {/* <select name="orderPopulation" autoFocus>
        <option value="" selected>
          Population Order:
        </option>
        <option value="Lower Population">Lower Population</option>
        <option value="Higher Population">Higher Population</option>
      </select> */}{" "}
      ---se puede agregar un filtro
      {allActivities &&
        allActivities.map((activity) => <ActivityCard activity={activity} />)}
    </div>
  );
};

export default ActivitiesCards;
