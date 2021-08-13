import React from "react";
import HeadPage from "../components/HeadPage/HeadPage";
import {AiTwotoneSound, AiOutlineApi} from "react-icons/ai";
import IMG from "../assets/imgs/img-3_770x.jpg";
import simpleImg from "../assets/imgs/blog-5.jpg";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/Services.css";

export default function Services() {
  return (
    <SEO title="Services">
      <HeadPage direction="services" />
      <div className="container">
        <div className="overview">
          <div className="content">
            <h3>disconnect from the outer world</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi a
              adipisci itaque iure perspiciatis totam rem saepe assumenda
              minima, eaque quaerat perferendis ullam, magni repellendus soluta
              ratione laborum architecto. Eos!
            </p>
            <ul>
              <li>
                <span>
                  <AiTwotoneSound />
                </span>
                <span>quality engineering</span>
              </li>
              <li>
                <span>
                  <AiTwotoneSound />
                </span>
                <span>bass perfectionist </span>
              </li>
              <li>
                <span>
                  <AiTwotoneSound />
                </span>
                <span>grand experience</span>
              </li>
              <li>
                <span>
                  <AiTwotoneSound />
                </span>
                <span>perfect companion</span>
              </li>
            </ul>
          </div>
          <div className="container-img">
            <img src={IMG} alt="" loading="lazy" />
          </div>
        </div>
        <div className="features-performance">
          <div className="head-of-feat">
            <h6>experience the sound</h6>
            <h3>features that amazing you</h3>
          </div>
          <div className="boxes-feat">
            <div className="one-box">
              <div>
                <span>
                  <AiTwotoneSound />
                </span>
              </div>
              <div>
                <h4>hifi sound</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  placeat beatae laborum cumque, impedit eos quae est magni
                  laudantium illum dolorem nostrum quia quaerat voluptas
                  quisquam nihil facere ratione rerum!
                </p>
              </div>
            </div>
            <div className="one-box">
              <div>
                <span>
                  <AiTwotoneSound />
                </span>
              </div>
              <div>
                <h4>multi devices</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  placeat beatae laborum cumque, impedit eos quae est magni
                  laudantium illum dolorem nostrum quia quaerat voluptas
                  quisquam nihil facere ratione rerum!
                </p>
              </div>
            </div>
            <div className="one-box">
              <div>
                <span>
                  <AiTwotoneSound />
                </span>
              </div>
              <div>
                <h4>dolby speakers</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  placeat beatae laborum cumque, impedit eos quae est magni
                  laudantium illum dolorem nostrum quia quaerat voluptas
                  quisquam nihil facere ratione rerum!
                </p>
              </div>
            </div>
            <div className="one-box">
              <div>
                <span>
                  <AiTwotoneSound />
                </span>
              </div>
              <div>
                <h4>3.5mm jack</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  placeat beatae laborum cumque, impedit eos quae est magni
                  laudantium illum dolorem nostrum quia quaerat voluptas
                  quisquam nihil facere ratione rerum!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="simply">
          <div className="head-of-simply">
            <h6>simple thing</h6>
            <h3>the sound movement can reach the soul</h3>
          </div>
          <div className="wrapper-simply">
            <div className="content">
              <h6>support in all major devices</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                error nostrum libero aut, inventore soluta minus eligendi
                possimus! Eos temporibus earum corrupti neque repudiandae
                dolorem ab, quaerat nobis recusandae aliquid.
              </p>
            </div>
            <div>
              <img src={simpleImg} alt="simply" loading="lazy" />
            </div>
            <div>
              <ul className="list-options">
                <li>
                  <span>
                    <AiOutlineApi />
                  </span>
                  <span>seamless cloud&apos; music</span>
                </li>
                <li>
                  <span>
                    <AiOutlineApi />
                  </span>
                  <span>13 Hrs long sound delivery</span>
                </li>
                <li>
                  <span>
                    <AiOutlineApi />
                  </span>
                  <span>13 color</span>
                </li>
                <li>
                  <span>
                    <AiOutlineApi />
                  </span>
                  <span>creativity in design</span>
                </li>
                <li>
                  <span>
                    <AiOutlineApi />
                  </span>
                  <span>break edition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SEO>
  );
}
