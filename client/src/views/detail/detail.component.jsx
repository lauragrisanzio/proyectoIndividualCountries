import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";

import { getByDetail } from "../../redux/actions";
import "./detail.styles.css"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const {detail} = useSelector((state) => state);
  

 useEffect(() => {
   dispatch(getByDetail(id)); 
 }, [dispatch]);
  
  return (
    <div className="Detail">
      <h1>CONOZCA MAS DETALLES DE:</h1>
      {detail.name ? (
        <>
          <h1>{detail.name}<h4>({detail.id})</h4></h1>
          
          <img src={detail.flag} alt="" />
          <p>Continente: {detail.continent}</p>
          <p>Capital: {detail.capital}</p>
          <p>Subregión: {detail.subregion}</p>
          <p>Área: {detail.area} km2</p>
          <p>Población: {detail.population}</p>
        
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Detail