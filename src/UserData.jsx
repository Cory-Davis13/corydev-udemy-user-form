import styles from "./UserData.module.css";

const UserData = (props) => {
  return (
    <div className={styles["data-wrapper"]}>
      <span>{`${props.name} (${props.age})`}</span>
    </div>
  );
};

export default UserData;
