import React from "react";
import styles from "../Style/Card.module.css";

const Card = ({ ele }) => {
  const { gym_name, address1, address2, distance_text, duration_text } = ele;
 
  // gym_name address1 address2 distance_text duration_text

  return (
    <div className={styles.contanier}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <p>{gym_name}</p>
        <p>
          {address1} ,{address2}
        </p>
        <p>
          {distance_text} | {duration_text}
        </p>
        <div>
          <p>3600</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
