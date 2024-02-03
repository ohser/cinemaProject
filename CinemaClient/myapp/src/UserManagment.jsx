import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"



 function UserManagement() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [ShowUsers, setShowusers] = useState(false)

    const getUsers = async () => {
        const { data } = await axios.get("http://localhost:8000/users")
        console.log(data)
        setUsers(data)
    }

    const next = () => {
        const role = sessionStorage.getItem("role")
        if (role === "admin") {
            navigate("/create-users")
        } else {
            alert("You are not an admin")
        }

    }

    useEffect(() => {
        getUsers()
    }, [])

    const handleChange = (e) => {
        const usersCopy = [...users]
        const index = usersCopy[0].permissions.findIndex(p => p.name == e.target.value)
        usersCopy[0].permissions[index].isActive = !usersCopy[0].permissions[index].isActive
        console.log(usersCopy, "copy")
        setUsers(usersCopy)
    }


    const sendUser = async () => {
        const usersCopy = [...users]
        const myUser =  usersCopy[0]
        const {data} = await axios.put("http://localhost:8000/users/permissions", myUser)
        console.log(data)
    }

const showUsers = () => {

    setShowusers(!ShowUsers)
}

    return (
        <div style={{padding:'20px'}}>
           

            <h1> Users </h1>
            <br/>
            <button onClick={showUsers}>All Users</button>{' '}
            <button onClick={next} to="/create-users">Add User</button>
            <br />
            { ShowUsers &&  (
                <div style={{
                    border: "3px solid black",
                    marginBottom: "30px",
                    width: "400px",
                    margin: "10px",
                    padding:"10px",
                  }}>
                     Name :    <h2>{users[0]?.firstName}</h2> <h2>{users[0]?.lastName}</h2>
                     User Name : <h2>{users[0]?.firstName}</h2>
                     Session Time Out : <h2>{users[0]?. sessionTimeOut}</h2><br/>
                     Created Date :    <h2>{users[0]?.createdDate}</h2><br/>
                     Permissions :    <h2>{users[0]?.firstName}</h2><br/>
                     <button>Edit</button> {' '} <button>Delete</button> <br/>
                    </div>
              ) }

        
           

        </div>
    )
        }
    export default UserManagement
