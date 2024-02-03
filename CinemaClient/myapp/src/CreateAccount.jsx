import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
export default function CreateAccount() {
    const [user, setUser] = useState({}) 
    const navigate = useNavigate()

    const submit = async () => {
        const response = await axios.post("http://localhost:8000/auth/create-password", user)
        if (response.status === 200) {
            navigate("/")
        }
    }
    return (
        <div>
            Username: <input  onChange={e => setUser({...user, userName: e.target.value})} type="text" /> <br />
            Password: <input onChange={e => setUser({...user, password: e.target.value})}  type="text" /> <br />
            <button onClick={submit}>Create</button>
        </div>
    )
}
