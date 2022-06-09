import "./App.css";
import "./InputContainer";
import InputContainer from "./InputContainer";
import Modal from "./UI/Modal";
import UserData from "./UserData";
import Card from "./UI/Card";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      document.getElementById("modal").style.display = "block";
      setError("Name & age field must contain a valid value!");
      return;
    }
    if (e.target[1].value < 0) {
      document.getElementById("modal").style.display = "block";
      setError(
        "Age field must contain a valid age value! (No negative values allowed)"
      );
      return;
    }

    let user = {
      name: e.target[0].value,
      age: e.target[1].value,
    };
    e.target[0].value = "";
    e.target[1].value = "";
    setUserData([...userData, user]);
  };

  return (
    <div className="App">
      <Modal errorMessage={error}></Modal>
      <Card>
        <InputContainer formSubmit={handleFormSubmit} />
      </Card>
      {userData.length > 0 && (
        <Card>
          {userData.map((user) => {
            return (
              <UserData
                key={Math.random().toString()}
                name={user.name}
                age={user.age}
              />
            );
          })}
        </Card>
      )}
    </div>
  );
}

export default App;
