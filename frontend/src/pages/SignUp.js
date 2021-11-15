import axios from "axios"
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Row,Col } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css"
export default function Signup() {
  const history = useHistory()

  const [ user, setUser] = useState({
      email:"",
      password:"",
      username: "",
      age:"",
  adharno:"",
  phoneno:"",
/*   tobaconsumption:"",
 */  address:"",
  city:"",
  state:"",
  zipcode:"",
  bloodgroup:""
  })
  

  /* const handleChange = e => {
      const {name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  } */

  let name,value;
  const handleChange = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user,[name]:value})
  }

  

  const register = () => {
      const { username, email, password, age,adharno,phoneno,address,city,state,zipcode,bloodgroup } = user
      console.log(user);
      if( username && email && password && age && adharno && phoneno && address && city && state && zipcode && bloodgroup){
          if(phoneno > 999999999 && phoneno< 9999999999){
            var re = /\S+@\S+\.\S+/;
            if(re.test(email)){
                if(adharno.length == 12){
            axios.post("http://localhost:4000/regis", user)
            .then( res => {
              alert(res.data.message)
              history.push("/login")
            })}
            else{
                alert("enter a valid adhar no")
            }
        }
        else{
            alert("enter valid mail")
        }
        }
        
    
        else{
            alert("invalid phone number")
        }
      } else {
          alert("invlid input")
      }
      
  }

  return (
      <div className="register">
          {console.log("User", user)}
          <h1>Register</h1>
          <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>


          
          <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>

          <input type="text" name="username" value={user.username} placeholder="Your Name" onChange={ handleChange }></input>

          
          <input type="text" name="age" value={user.age} onChange={handleChange} placeholder="AGE "></input>
          
          <input type="number" name="adharno" value={user.adharno} onChange={handleChange} placeholder="Adhar no"></input>
          
          <input type="number" name="phoneno" value={user.phoneno} onChange={handleChange} placeholder="Phone no"></input>
          
          
          
          <input type="text" name="address" placeholder="address" value={user.address} onChange={handleChange}></input>
          
          <input type="text" name="city" placeholder="City" value={user.city} onChange={handleChange}></input>
          
          <input type="text" name="state" placeholder="State" value={user.state} onChange={handleChange}></input>

          <input type="number" name="zipcode" value={user.zipcode} onChange={handleChange} placeholder="Zipcode"></input>

          <p>select your blood Group</p>
          <select name="bloodgroup" value={user.bloodgroup} onChange={handleChange}>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>

          </select>

          <div className="button" onClick={register} >Register</div>
          <div>or</div>
          <div className="button" onClick={() => history.push("/login")}>Login</div>
      </div>
  )

}