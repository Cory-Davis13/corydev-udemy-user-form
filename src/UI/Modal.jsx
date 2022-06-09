import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

const Modal = (props) => {
  const handleButtonClick = (e) => {
    document.getElementById("modal").style.display = "none";
  };

  return (
    <div className={styles["modal-wrapper"]} id="modal">
      <Card>
        <div className={styles["modal-title"]}>
          <h2>Error</h2>
        </div>
        <div className={styles["modal-content"]}>
          {props.errorMessage}
          <Button onClick={handleButtonClick}>Close</Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
