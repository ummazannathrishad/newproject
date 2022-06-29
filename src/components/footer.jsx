import react from 'react';
import logo from '../assets/images/Logo 1.png';



const footer = () =>{
    return(
        <footer>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="context">
       <img src={logo} className="mb-4"/>
       <p>Copyright ©2021 Draft LLC.<br/>
        All rights reserved.</p>
      </div>
    </div>
    <div className="col-md-2">
   <ul className="list-unstyled footer-section">
     <li><a href="/#" className="text-decoration-none">Team</a></li>
     <li><a href="/#" className="text-decoration-none">Press</a></li>
     <li><a href="/#" className="text-decoration-none">Fees</a></li>
   </ul>
    </div>
    <div className="col-md-2">
      <ul class="list-unstyled footer-section">
        <li><a href="/#" className="text-decoration-none">Services</a></li>
        <li><a href="/#" className="text-decoration-none">Projects</a></li>
        <li><a href="/#" className="text-decoration-none">Affiliate</a></li>
      </ul>
    </div>
    <div className="col-md-2">
      <ul className="list-unstyled footer-section">
        <li><a href="/#" className="text-decoration-none">Terms of use</a></li>
        <li><a href="/#" className="text-decoration-none">Privacy Policy</a></li>
        <li><a href="/#" className="text-decoration-none">Contact us</a></li>
      </ul>
    </div>
  </div>
</div>
</footer>
    );
}
export default footer;