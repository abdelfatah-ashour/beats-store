import React, {useState} from "react";
import SEO from "../components/SEO/SEO.jsx";
import {validLogin} from "../utilities/validRegister";
import {Toast} from "../utilities/Toast";
import Axios from "../utilities/defaultAxios";
import {Link} from "react-router-dom";
import {get} from "js-cookie";
import {LOGIN} from "../Redux/slices/authSlice";
import {useDispatch} from "react-redux";
import "../assets/css/Register.css";

export default function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
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
    await validLogin(user)
      .then(async () => {
        await Axios.post("/auth/login", user)
          .then(response => {
            const result = JSON.parse(get("user_info"));
            dispatch(LOGIN(result));
            Toast("success", response.data.message);
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
            <h6>Login</h6>
            <div className="overlay-register"></div>
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
          <small style={{margin: "2rem 0"}}>
            don&apos;t have account ? <Link to="/signup">Register</Link>
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
