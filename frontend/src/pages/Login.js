import React, {useState} from "react"
 import "./login.css"
 import axios from "axios"
import { useHistory,Redirect } from "react-router-dom"
const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:4000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/Search")
        })
    }

    return (
      <div className="login" style={{marginTop:"100px"}}>
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
      <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => history.push("/SignUp")}>Register</div>
  </div>

    )
}

export default Login