import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "./search.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Row } from "react-bootstrap";
function Search(){
    const [donors , setDonor] = useState([]);
    useEffect( ()=>{
        axios.get("http://localhost:4000/donor")
        .then(res => {
            console.log(res.data);
            setDonor(res.data);
        })
        .catch(error=>console.log(error));
    },[])

    function apsearch(){
        
            axios.get("http://localhost:4000/searchAp")
            .then(res=>{
                console.log(res.data)
                setDonor(res.data)
            })
            .catch(error=>console.log(error));

    }
    function ansearch(){
        
        axios.get("http://localhost:4000/searchAn")
        .then(res=>{
            console.log(res.data)
            setDonor(res.data)
        })
        .catch(error=>console.log(error));

}
function bpsearch(){
        
    axios.get("http://localhost:4000/searchBp")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}
function bnsearch(){
        
    axios.get("http://localhost:4000/searchBn")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}
function abpsearch(){
        
    axios.get("http://localhost:4000/searchABp")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}
function abnsearch(){
        
    axios.get("http://localhost:4000/searchABn")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}
function opsearch(){
        
    axios.get("http://localhost:4000/searchOp")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}
function onsearch(){
        
    axios.get("http://localhost:4000/searchOn")
    .then(res=>{
        console.log(res.data)
        setDonor(res.data)
    })
    .catch(error=>console.log(error));

}

    return(
        <>
            <NavBar/>
            <div style={{alignItems:"center",width:"60%",margin:"0 auto",padding:"30px"}}>
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}} onClick={apsearch}>A+</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}} onClick={ansearch}>A-</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={bpsearch}>B+</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={bnsearch}>B-</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={abpsearch}>AB+</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={abnsearch}>AB-</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={opsearch}>O+</Button>{' '}
            <Button variant="outline-danger" size="lg" style={{marginRight:"25px"}}onClick={onsearch}>O-</Button>{' '}

  </div>
            <h1 className={style.heading} style={{textAlign:"center"}}>Donors List</h1>
            
            <Table className={style.styledtable}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
{/*                 <th>Tobaco consumption<br/><center></center></th>
 */}                <th>address<br/><center></center></th>
                <th>Phone Number</th>
                <th>State</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Adhar.no</th>
            </tr>
        </thead>
         <tbody>
        { donors.map((donor) =>{
            return(
        <tr>
            <td>{donor.username}</td>
            <td>{donor.age}</td>
            <td>{donor.bloodgroup}</td>
{/*             <td>{donor.tobaconsumption}</td>
 */}            <td>{donor.address}</td>
            <td>{donor.phoneno}</td>
            <td>{donor.state}</td>
            <td>{donor.city}</td>
            <td>{donor.zipcode}</td>
            <td>{donor.adharno}</td>
            
        </tr>)}
        )}
        </tbody> 
        </Table> 
        </>
    );
}
export default Search