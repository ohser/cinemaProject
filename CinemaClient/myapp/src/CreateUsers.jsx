import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUsers() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role !== "admin") {
      navigate("/");
    }
  }, []);

  const cancel = () => {
    navigate("/main-page-admin");
  }

  const createUser = async () => {
    const response = await axios.post(
      "http://localhost:8000/auth/create-account",
      { userName: userName }
    );
    if (response.status === 201) {
      alert("User created successfully");
      navigate("/");
    }
  };

  return (
    <div style={{padding:"20px"}}>
      <strong>Add New User </strong>
      <br />
      <br />
      First Name : <input></input>
      <br />
      <br />

      Lest Name : <input></input>
      <br />
      <br />

      Username:{" "}
      <input onChange={(e) => setUserName(e.target.value)} type="text" />
      <br />
      <br />

      Session time out (Minutes): <input type="number"></input>
      <br />
      <br />

      Premission:
      <br />
      <br />

      <input type="checkbox" id="viewSubscriptions" />
      <label for="viewSubscriptions">View Subscriptions</label>
      <br />
      <input type="checkbox" id="createSubscriptions" />
      <label for="createSubscriptions">Create Subscriptions</label>
      <br />
      <input type="checkbox" id="deleteSubscriptions" />
      <label for="deleteSubscriptions">Delete Subscriptions</label>
      <br />
      <input type="checkbox" id="updateSubscriptions" />
      <label for="updateSubscriptions">Update Subscriptions</label>
      <br />
      <input type="checkbox" id="viewMovies" />
      <label for="viewMovies">View Movies</label>
      <br />
      <input type="checkbox" id="createMovies" />
      <label for="createMovies">Create Movies</label>
      <br />
      <input type="checkbox" id="deleteMovies" />
      <label for="deleteMovies">Delete Movies</label>
      <br />
      <input type="checkbox" id="updateMovies" /> <label for="updateMovies">Update Movies</label>
      <br />
      <br/>
      <button onClick={createUser}> Save</button> {' '} <button onClick={cancel}> Cancel</button>

      <table></table>
    </div>
  );
}
