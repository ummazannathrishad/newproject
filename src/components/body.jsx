import react from 'react';
import creditcard from '../assets/images/Credit Card.png';
import ChartsCard from '../assets/images/Charts Card.png';
import message from '../assets/images/Messages.png';
import freeplan from '../assets/images/Free plan.png';
import Premium from '../assets/images/Premium.png';

const body = () => {
    return (
        <main>
        <div className="card-text">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
             <div className="card-design">
    
              <h2 >One card for all<br/> your payments</h2>
              <p>Get 3% back on everything you buy<br/> with the Draft card. Register today and<br/> enjoy aspect of your business</p>
            </div>
            </div>
            <div className="col-md-6">
              <img src={creditcard} alt="card" className="img-fluid"/>
            </div>
          </div>
    
        </div>
      </div>
      <div className="day">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="balance-price">
                <p>Balance</p>
                <h3>$5,600</h3>
              </div>
              <div className="transaction">
                <p>Last Transaction</p>
                <h3>$230</h3>
              </div>
            </div>
              <div className="chart-img">
                <img src={ChartsCard} alt="chart card" className="img-fluid"/>
              </div>
          </div>
          <div className="col-md-6">
            <div className="balance">
            <h2>Manage your<br/> finances like a<br/> pro in no time</h2>
            <p>With Draft, book keeping, banking, and<br/> invoices are all in one place. You will<br/> always know where you stand</p>
          </div>
            <a className="btn btn-custom" href="/#">Learn More <i className="fa-solid fa-right-long"></i></a>
          </div>
        </div>
    
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="language">
            <h2>We support you<br/> in 5 different<br/> laguages</h2>
            <p>Our support team is there to help you in 5<br/> different laguages - English, French,<br/> Spanish, Portuguese and German.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="message">
            <img src={message} alt="message" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="service text-center mt-5">
            <h3>An exceptional service,<span>at the right price</span></h3>
            <p>Start with our free plan and switch to premium as you grow</p>
          </div>
    
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={freeplan} alt="free"/>
        </div>
        <div className="col-md-6">
          <img src={Premium} alt="premium"/>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="frequently text-center">
            <h3>Frequently <span>asked questions</span></h3>
             <p>If you are not sure whether Draft is suitalbe for you or<br/>
              not, do not worry. We are here to explain everything you<br/>
              might want to know</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            What is the difference between Draft and a Bank account ? 
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Who can open a draft account ?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            What if we withdraw money abroad ?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Can I cancel my subscription or switch to another account anytime ?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            What happens if I withdraw more than $250 ? 
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
    </div>
    </div>
    </main>

    );
}
export default body;
