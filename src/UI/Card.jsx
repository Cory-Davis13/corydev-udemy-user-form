import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["card-content"]}>{props.children}</div>
    </div>
  );
};

export default Card;
