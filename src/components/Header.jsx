import react from 'react';
import logo from '../assets/images/Logo 1.png';
import phone from '../assets/images/Phone 1.png';
import vector1 from '../assets/images/Vector(1).png';
import vector2 from '../assets/images/Vector(2).png';
import group from '../assets/images/Group.png';
import curveimg from '../assets/images/wave.svg';

const Header = () => {
    return(
        <header>
            <img src={curveimg} alt="" />
        
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
              <a className="navbar-brand" href="/#"><img src={logo}/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">Pricing</a>
                  </li>
                </ul>
                <ul className="sign">
                  <li className="nav-item list-unstyled">
                    <a className="nav-link " href="/#">
                      Sign up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="heading-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="heading-content-text">
                  <h1>SMART BANKING FOR FRELENCER</h1>
                  <p>Draft is a revolutionary mobile app built<br/> to help you manage your busniess<br/> easily and save your money</p>
                      <a className="btn btn-custom" href="/#">Register Now <i className="fa-solid fa-right-long"></i></a>
                </div>
              </div>
             <div className="col-md-6">
               <div className="phone">
               <img src={phone}  alt="phone"/>
               <img src={vector1} alt="vector1"/>
                <img src={vector2} alt="vector2"/>
                <img src={group} alt="group"/>
              </div>
             </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;