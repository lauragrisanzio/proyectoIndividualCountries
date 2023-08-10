import styles from "./header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../card/card.component";

import { orderByAz, orderByPopulation, filterByActivity, filterContinent, getActivities, getCountries } from "../../redux/actions";

import React from 'react'

const Header = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries); //= a mapStateToProps, me traigo la info del estado global
  const countries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) =>state.allActivities)
  
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities());
  }, [dispatch]);


  const handleOrder = (event) => {
    setAux(!aux);
    dispatch(orderByAz(event.target.value));
  };

   const handleOrderPopulation = (event) => {
     setAux(!aux);
     dispatch(orderByPopulation(event.target.value));
   };

  const handleFilterContinent = (event) => {
    event.preventDefault();
    dispatch(filterContinent(event.target.value));
    if(event.target.value==="All") getCountries()
  };
const handleFilterActivity = (event) => {
  event.preventDefault();
  dispatch(filterByActivity(event.target.value));
  };
  
  return (
    <div className={styles.containerFilters}>
      <select name="order" autoFocus onChange={handleOrder}>
        <option value="" selected>
          Alphabetical Order:
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select name="orderPopulation" autoFocus onChange={handleOrderPopulation}>
        <option value="" selected>
          Population Order:
        </option>
        <option value="Lower Population">Lower Population</option>
        <option value="Higher Population">Higher Population</option>
      </select>

      <select name="filter" onChange={handleFilterContinent}>
        <option value="All" selected>
          Filter by Continent:
        </option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
      </select>

      {/* *ver traduciopn con la Vico  */}
      <select name="filter" id="Filter Activity"onChange={handleFilterActivity}>
        <option value="All" selected>
          Filter by Activities's Season
        </option>
        {allActivities.map((a) => (
          <option value={a.name}>{a.name}</option>
        ))}
        
      </select>

      {/* {countries.map(({ id, name, flag, continent }) => {
        return (
          <Card
            // key={id}
            // id={id}
            // flag={flag}
            // name={name}
            // continent={continent}
          />
        );
      })} */}
    </div>
  );
}

export default Header