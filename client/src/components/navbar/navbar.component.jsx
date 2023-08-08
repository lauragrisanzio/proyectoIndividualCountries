import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function NavBar({ handleChange, handleSubmit }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.searchBox}>
        <form />
        <input
          className={styles.searchTerm}
          placeholder="Country to know..."
          type="search"
          onChange={handleChange}
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={handleSubmit}
        >
          <i>Search </i>
        </button>
        <Link to={"/activity"}>
          <button className={styles.buttonActivities}>Activities</button>
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
