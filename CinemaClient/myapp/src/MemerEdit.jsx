import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const MemerEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let members = useSelector((state) => state.members);
  const location = useLocation();

  const {  state: { member } } = location;

  const [editedMember, setEditedMember] = useState({
    _id: member?._id || "",
    City: member?.City || "",
    Email: member?.Email || "",
    name: member?.name || "",
  });

  const SubscriptionsPage = () => {
    navigate("/subscriptions-page");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setEditedMember((prevMember) => ({ ...prevMember, [name]: value }));
  };

  
  

  const handleUpdate = async () => {
    try {
      console.log("Before Dispatch:", members);
      if (editedMember) {
        console.log("Dispatching Update:", editedMember);
        dispatch({ type: "UPDATE-MEMBER", payload: editedMember });
        console.log("After Dispatch:", members);
        navigate("/subscriptions-page");
      } else {
        console.error("member update failed.");
      }
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };

  return (
    <div>
      <h1>Members</h1>
      EditMembers: {editedMember.name}
      <br/>
      <br/>
      Name:
      <input
        value={editedMember.name}
        name="name"
        type="text"
        onChange={handleInputChange}
      ></input>
      <br />
      Email :{" "}
      <input
        name="Email"
        type="text"
        value={editedMember.Email}
        onChange={handleInputChange}
      ></input>
      <br />
      City :{" "}
      <input
        name="City"
        value={editedMember.City}
        onChange={handleInputChange}
        type="text"
      ></input>
      <br />
      <br/>
      <button onClick={handleUpdate}>Update</button>{' '}
      <button onClick={SubscriptionsPage}>Cancel</button>
    </div>
  );
};

export default MemerEdit;
