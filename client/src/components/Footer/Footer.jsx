import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube, IoLogoTwitter } from "react-icons/io";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/" className="main-logo">
          Beats store
        </Link>
        <h6>subscribe now newsletter</h6>
        <div className="input-subscribe">
          <input type="text" placeholder="Your Email Address" />
          <span>signup</span>
        </div>
        <ul className="social-media-list-footer">
          <li className="item-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="item-social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>

          <li className="item-social">
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTwitter />
            </a>
          </li>
          <li className="item-social">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube />
            </a>
          </li>
        </ul>
        <ul className="nav-list-footer">
          <li>History</li>
          <li>Privacy Policy</li>
          <li>News</li>
          <li>terms & condition</li>
          <li>contact</li>
        </ul>
      </div>
    </footer>
  );
}
