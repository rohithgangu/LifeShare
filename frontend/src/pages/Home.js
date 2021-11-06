import React from 'react';
import styles from './home.module.css';
import {Carousel,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import register from '../images/register.jpeg';
import health from '../images/thank.jpeg';
import donate from '../images/donate.jpeg';
import NavBar from '../components/NavBar';
function Home(){
    return(
        <div>
                    <NavBar/>

        <div className={styles.container}>
            <h1 style = {{marginTop :'15px'}}>Welcome</h1>
            <div className={styles.quoteDiv}>
            <span className={styles.quote}>There is a hope of life to someone in your Blood donation
</span>
          </div> 
            <Carousel style ={{width : '500px',/* marginLeft : "500px"*/marginTop : '50px',marginBottom: '50px', color:'black'}}>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={register}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3 style ={{color:'black'}}>Register</h3>
    <p style ={{color:'black'}}>sign in and fill the details</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img style={{height : "333px"}}
    className="d-block w-100"
    src={donate}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3 style ={{color:'black'}}>Donate</h3>
    <p style ={{color:'black'}}>Donating blood regularly is beneficial to prevent and reduce heart attacks and liver ailment.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img   style={{height : "333px"}}   className="d-block w-100"
 src ={health}
  />

  <Carousel.Caption>
    <h3 style ={{color:'black'}}>Health</h3>
    <p style ={{color:'black'}}>Your blood can now save the lives of others.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

        <p className={styles.para} style = {{marginLeft : '15px',marginRight : '15px'}}>
        
        Donating blood regularly has proved beneficial not only for the recipient but also the donor. It is helpful for the vital organs, and it reduces risk for chronic diseases such as cancer and stroke.

For certain treatments like chemotherapy, blood is required on a daily basis, whereas victims of accident may require up to 100 units of blood transfusion. In India, blood shortage is more than 2 million pint and counting.</p>
                 
      </div>



</div>
    )
    };
export default Home