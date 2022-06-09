import styles from "./InputContainer.module.css";
import Button from "./UI/Button";

const InputContainer = (props) => {
  return (
    <>
      <form className={styles["user-form"]} onSubmit={props.formSubmit}>
        <label className={styles["form-label"]} htmlFor="name">
          Name
        </label>
        <input
          className={styles["form-input"]}
          id="name"
          name="name"
          type="text"
        />

        <label className={styles["form-label"]} htmlFor="age">
          Age
        </label>
        <input
          className={styles["form-input"]}
          id="age"
          name="age"
          type="number"
        />
        <Button>Submit</Button>
      </form>
    </>
  );
};

export default InputContainer;
