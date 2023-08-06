import { Link } from "react-router-dom";

import styles from "./landing.module.css";


const Landing = () => {
  const string = "EXPLORE THE WORLD"
  const length = string.length
  const deg = 360/length
  
  return (
    <div>
      <div className={styles.landing}>
        <div className={styles.explore}>
          <Link to={"/home"}style={{ textDecoration: 'none' }}>
            <p>¡EXPLORE DE WORLD!</p>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Landing