import { useState } from "react";
import styles from './FormInput.module.css';

const FormInput = (props) => {
  const intialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(intialUserInput);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(userInput);
    console.log("Submit");
  };

  const formResetHandler = () => {
    setUserInput(intialUserInput);
    console.log("RESET");
  };
  const inputFormHandler = (input, value) => {
    setUserInput((preValue) => {
      return {
        ...preValue,
        [input]: +value,
      };
    });
    console.log(input, value);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputFormHandler("current-savings", event.target.value);
            }}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputFormHandler("contribution", event.target.value);
            }}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputFormHandler("expected-return", event.target.value);
            }}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputFormHandler("duration", event.target.value);
            }}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button onClick={formResetHandler} type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormInput;
