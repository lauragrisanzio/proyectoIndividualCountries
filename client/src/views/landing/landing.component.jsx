import { Link } from "react-router-dom";

import styles from "./landing.module.css";


const Landing = () => {
  return (
    <div className={styles.landing}>
          <h1>EXPLORE DE WORLD!!</h1>
          <br />
      <Link to={"/home"}>
        <button>WELCOME</button>
      </Link>
    </div>
  );
}

export default Landing