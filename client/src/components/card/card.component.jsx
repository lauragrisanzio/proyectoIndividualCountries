import {Link} from "react-router-dom"

import styles from "./card.module.css";

function Card({ country }) {

 const {id, name, flag, continent} = country
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={flag} alt="" />
        <Link to={`/home/${id}`}>
          <h2>{name}</h2>
        </Link>
        <p>{continent}</p>
      </div>
    </div>
  );
}
export default Card; 

//esta informacion la saco de mi backend
//los modelos|
