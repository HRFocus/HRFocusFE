import React from "react";
import "./Support.css";
import Cards from "../../../shared/FormElements/Cards/Cards";
import Logo from "../../../utils/Images/logo.png";
import { HiChat } from "react-icons/hi";
import { PiChatsCircle } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
const Support = () => {
  return (
    <div className="support-container">
      <div className="support-heading">
        <div className="support-logo">
          <img src={Logo} alt="logo" height="100%" />
        </div>
        <h1>Contact our friendly team</h1>
        <p>Let us know how we can help.</p>
      </div>
      <div className="support-cards-container">
        <Cards>
          <div className="icon-card">
            <HiChat />
          </div>
          <div className="card-desc">
          <h3>Chat to sales</h3>
          <p>speak to our friendly team</p>
          <b>hrfocus@gmail.com</b>
          </div>
        </Cards>
        <Cards>
          <div className="icon-card">
            <PiChatsCircle/>
          </div>
          <div className="card-desc">
          <h3>Chat to sales</h3>
          <p>speak to our friendly team</p>
          <b>hrfocus@gmail.com</b>
          </div>
        </Cards>
        <Cards>
          <div className="icon-card">
            <IoLocationOutline/>
          </div>
          <div className="card-desc">
          <h3>Chat to sales</h3>
          <p>speak to our friendly team</p>
          <b>hrfocus@gmail.com</b>
          </div>
        </Cards>
        <Cards>
          <div className="icon-card">
          <MdOutlineLocalPhone />
          </div>
          <div className="card-desc">
          <h3>Chat to sales</h3>
          <p>speak to our friendly team</p>
          <b>hrfocus@gmail.com</b>
          </div>
        </Cards>
      </div>
      <div className="faq">
        <h1>Frequently asked Question</h1>
        <div className="questions">
        <details>
          <summary>Is there a free trial available</summary>
          <p>
          Yes you can try us for free for 30days. If you want, we'll provide you with a free <br/>
          30-minute onboarding call to get you up and running
          </p>
        </details>
        <details>
          <summary>Can I change my plan later?</summary>
          <p>
          Yes you can try us for free for 30days. If you want, we'll provide you with a free <br/>
          30-minute onboarding call to get you up and running
          </p>
        </details>
         <details>
          <summary>Do you provide tutorials?</summary>
          <p>
          Yes you can try us for free for 30days. If you want, we'll provide you with a free <br/>
          30-minute onboarding call to get you up and running
          </p>
        </details>
        
        </div>
      </div>
    </div>
  );
};

export default Support;
