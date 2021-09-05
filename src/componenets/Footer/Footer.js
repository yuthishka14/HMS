import React from 'react'
import './Footer.css';
import Verline from "../../assets/img/footer/VerLine.png";
import Cont from "../../assets/img/footer/cont.png";
import printerest from "../../assets/img/footer/printerest.png";
import Gle from "../../assets/img/footer/gle.png";
import Twt from "../../assets/img/footer/Twt.png";
import Youtb from "../../assets/img/footer/Youtb.png";
import Facebk from "../../assets/img/footer/faceb.png";
import In from "../../assets/img/footer/in.png";

function Footer() {
    return (
        <div className="footer">
    
<div className="block1">

  <h4>Service</h4>
  <p>Armadal Hospitalis committed to provide compassionate care and excellent service that transcends conventional healthcare.</p>
</div>

<div className="block4">
  <img className="verlineImg" src={Verline} alt="verline"/>
</div>

<div className="block2">
<h4>Categories</h4>
<p>E-Channeling </p>
<p>Pharmacy Service</p>
<p>Lab/Scans service</p>
<p>Ambulance service</p>
<p>Staff related service</p>
</div>

<div className="block3">

  <h4>Contact us</h4>
  <p>armadalhospital@gmail.com</p>
</div>

<div className="ways">
<a href="https://www.pinterest.com"> <img src={printerest} width="30" height="30"/></a>
<a href="https://myaccount.google.com"> <img src={Gle} width="30" height="30"/></a>
<a href="https://twitter.com"> <img src={Twt} width="30" height="30"/></a>
<a href="https://www.youtube.com/"><img src={Youtb} width="30" height="30"/></a>
<a href="https://www.facebook.com"> <img src={Facebk} width="30" height="30"/></a>
<a href="https://wwww.logging-in.com"><img src={In} width="30" height="30"/></a>
</div>
</div>
    )
}

export default Footer
