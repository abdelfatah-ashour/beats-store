import React, {useState} from "react";
import {validRegister} from "../utilities/validRegister";
import {Toast} from "../utilities/Toast";
import {Link} from "react-router-dom";
import Axios from "../utilities/defaultAxios";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/Register.css";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await validRegister(user)
      .then(async () => {
        await Axios.post("/auth/register", user)
          .then(({data}) => {
            Toast("success", data.message);
          })
          .catch(error => {
            throw new Error(error?.response?.data.message || error.message);
          });
      })
      .catch(error => {
        Toast("error", error.message);
      });
  };

  return (
    <SEO title="Login">
      <div className="container-register">
        <div className="register">
          <div className="head-register">
            <h6>Register</h6>
            <div className="overlay-register"></div>
          </div>
          <div className="group-control">
            <label htmlFor="usernameElem">username</label>
            <input
              type="text"
              name="username"
              id="usernameElem"
              onChange={handleChange}
            />
          </div>
          <div className="group-control">
            <label htmlFor="emailElem">email address</label>
            <input
              type="email"
              name="email"
              id="emailElem"
              onChange={handleChange}
            />
          </div>
          <div className="group-control">
            <label htmlFor="passwordElem">password</label>
            <input
              type="password"
              name="password"
              id="passwordElem"
              onChange={handleChange}
            />
          </div>
          <small>
            Already have account ? <Link to="/login">Login</Link>
          </small>
          <div className="group-control">
            <button className="btn-register" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </div>
    </SEO>
  );
}
