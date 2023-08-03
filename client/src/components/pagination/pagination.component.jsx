import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Pagination = ({ currentPage, pageNumber, pageClick }) => {

  let pageNumbers = []

  for (let i = 0; i <=pageNumber; i++) {
    
    return pageNumbers.push(i)
  }
 
     
  const nextPage = () => {
      if(currentPage<pageNumber)
        pageClick(currentPage + 1);
   }
    
    const previousPage = () => {
        if (currentPage > 1)
           pageClick(currentPage - 1)
    }

    return (
      
    <div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
   
}

export default Pagination