import React from 'react'
import styles from "./activityCard.module.css"



export const ActivityCard = ({ activity }) => {
    
    const { season, duration, difficulty, name, Countries } = activity

    return (
      <div className={styles.cardContainer}>
        {name ? (
          <div>
            <h1>{name}</h1>
            {/* <h1>{Countries.name}</h1> como hago para que me aparezca el country*/}
            
            <h2>Duration: {duration} h</h2>
            <h2>Difficulty level: {difficulty}</h2>
            <h2>Ideal season to carry out the activity: {season}</h2>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
};

export default ActivityCard;
