import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Outlet } from "react-router-dom";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let members = useSelector((state) => state.members);
  let movies = useSelector((state) => state.movies);
  let subs = useSelector((state) => state.subs);

  const [showMembers, setShowMembers] = useState(false);
  const [showAddMovies, setshowAddMovies] = useState(false);
  const [showAddMember, setsShowAddMember] = useState(false);

  const [AddMember, setAddMember] = useState({
    _id:  "",
    City:  "",
    Email:   "",
    name:   "",
  });

  
  const editMember = (member) => {
    navigate("/edit-member", { state: { member }});
  };

  const showMember = () => {
    setShowMembers(!showMembers);
    console.log(showMembers);
    console.log(members);
  };

  const ShowAddMember = () => {
    setShowMembers(false)
    setsShowAddMember(!showAddMember)
  }
  
  const deleteMember = (member) => {
    dispatch({ type: "DELETE-MEMBER", payload: member._id });
    navigate("/subscriptions-page");
  };
  
  const showAddMovie = () => {
    setshowAddMovies(!showAddMovies);
    console.log(showMembers);
    console.log(members);
  };
  console.log("Members from store:", members);
  console.log("movies from store:", movies);

  const cencelAddMember = () =>
  {
    setsShowAddMember(ShowAddMember == false)

  }

  const addMember = () => {
    const finalMember = { ...AddMember, _id: 133 };
    dispatch({ type: "ADD-MEMBER", payload: finalMember });
    setsShowAddMember(false);
  };

  return (
    <>
      <h1> Subscriptions</h1>
      <button onClick={showMember}>All Members</button>{" "}
      <button onClick={ShowAddMember}>Add Members</button>
      <br />
      {showAddMember && (
        <div>
          <br/>
          <strong>ADD NEW MEMBER</strong><br/>
          <br/>
          Name:{" "}
      <input
        value={AddMember.name}
        name="name"
        type="text"
        onChange={(e) => setAddMember({ ...AddMember, name: e.target.value })}
      ></input>
      <br />
      Email :{" "}
      <input
        name="Email"
        type="text"
        value={AddMember.Email}
        onChange={(e) => setAddMember({ ...AddMember, Email: e.target.value })}
      ></input>
      <br />
      City :{" "}
      <input
        name="City"
        value={AddMember.City}
        onChange={(e) => setAddMember({ ...AddMember, City: e.target.value })}
        type="text"
      ></input>
      <br/>
      <br/>
          <button onClick={addMember}>save</button>{' '} <button onClick={cencelAddMember}>cancel</button>

        </div>
      )}
      <div>
        {showMembers && (
          <div>
          {members.map((member) => (
  <div
    key={member._id}
    style={{
      border: "3px solid black",
      marginBottom: "10px",
      width: "400px",
      // height: "300px",
      margin: "10px",
    }}
  >
    <strong>
      <p>{member.name}</p>
    </strong>
    <br />
    <p>Email: {member.Email}</p>
    <p>City: {member.City}</p>
    <button onClick={() => editMember(member)}>Edit</button> {' '}<button onClick={() => deleteMember(member)}>Delete</button>
    <br/>
    <div
      key={member._id}
      style={{
        border: "3px solid black",
        marginBottom: "10px",
        width: "350px",
        // height: "300px",
        margin: "10px",
      }}>
<strong><p>Movies Watched</p></strong>     
<button onClick={showAddMovie}>Subscribe to new movie</button>
{showAddMovies && (
  <div> 
    
   
      <div  
      style={{
        border: "3px solid red",
        marginBottom: "20px",
        width: "300px",
        // height: "300px",
        margin: "10px",
      }}>
        <br/>
        <p>Add a new movie</p>
 <select  >{movies.map(x=> <option value={x._id} > {x.name } </option>)} </select>{' '}<input type="date"></input>
 <br/>
 <button>Subscribe</button>
 <br/>
      </div>
    

    
      
  
    </div>
)}
<ul>

</ul>
    </div>
  </div>
))}

          </div>
        )}
      </div>
    </>
  );
};

export default Subscriptions;
