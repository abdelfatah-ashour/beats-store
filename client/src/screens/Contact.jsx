import React from "react";
import {MdCall, MdEmail} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";
import HeadPage from "../components/HeadPage/HeadPage.jsx";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <SEO title="Contact">
      <HeadPage direction="contact" />
      <div className="contact">
        <div className="cards">
          <div className="card">
            <div className="icon-card">
              <MdCall />
            </div>
            <div className="info-card">
              <h6>Phone</h6>
              <span>
                <strong>toll-free :</strong>0803 - 080 -3082
              </span>
              <span>
                <strong>Fax :</strong>0803 - 080 -3082
              </span>
            </div>
          </div>
          <div className="card">
            <div className="icon-card">
              <MdEmail />
            </div>
            <div className="info-card">
              <div>
                <h6>Email</h6>
                <span>mail@example.com</span>
                <br />
                <span>support@example.com</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="icon-card">
              <AiFillHome />
            </div>
            <div className="info-card">
              <h6>Address</h6>
              <span>No. 58 A, East MAdison Street, MD, USA 4508</span>
              <span>support@example.com</span>
            </div>
          </div>
        </div>
        <div className="form">
          <h4>contact form</h4>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone" />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>send</button>
        </div>
      </div>
    </SEO>
  );
}
