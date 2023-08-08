import {Link} from "react-router-dom"

import styles from "./card.module.css";

function Card({ country }) {

 const {id, name, flag, continent} = country
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Link className={styles.Link} to={`/home/${id}`}>
        <img src={flag} alt="" />
        
          <h2>{name}</h2>
        
        <p>{continent}</p>
        </Link>
      </div>
    </div>
  );
}
export default Card; 

//esta informacion la saco de mi backend
//los modelos|
