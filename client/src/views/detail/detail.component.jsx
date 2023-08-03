import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from "react";

import { getByDetail } from "../../redux/actions";
import styles from "./detail.module.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const {detail} = useSelector((state) => state);
  

 useEffect(() => {
   dispatch(getByDetail(id)); 
 }, [dispatch, id]);
  
  return (
    <div className={styles.detail}>
      <Link to={"/home"}>
        <button>HOME</button>
      </Link>
      <h1>MORE DETAILS OF:</h1>
      {detail.name ? (
        <>
          <h1>
            {detail.name}
            <h4>({detail.id})</h4>
          </h1>

          <img src={detail.flag} alt="" />
          <p>Continent: {detail.continent}</p>
          <p>Capital: {detail.capital}</p>
          <p>Subregion: {detail.subregion}</p>
          <p>Area: {detail.area} km2</p>
          <p>Population: {detail.population}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
      <div>
        <div>
          <h2>Tourist Activities:</h2>
        </div>
        {detail.Activities?.map((act) => {
          return (
            <div>
              <h4>Name: {act.name}</h4>
              <h4>Difficulty: {act.difficulty}</h4>
              <h4>Duration: {act.duration} hs</h4>
              <h4>Season: {act.season}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Detail