import React from "react";
import {Link} from "react-router-dom";
import {FaPen} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
import {RiWirelessChargingLine} from "react-icons/ri";
import {BsMusicNoteBeamed} from "react-icons/bs";
import {FcIdea} from "react-icons/fc";
import {FiPhoneCall} from "react-icons/fi";
import HeadPage from "../components/HeadPage/HeadPage.jsx";
import IMG from "../assets/imgs/blog-5.jpg";
import IMG1 from "../assets/imgs/blog-5.jpg";
import IMG2 from "../assets/imgs/blog-7.jpg";
import HeadOfSection from "../components/HeadOfSection/HeadOfSection.jsx";
import CLIENT1 from "../assets/imgs/test-1_200x200.jpg";
import CLIENT2 from "../assets/imgs/test-2_200x200.jpg";
import CLIENT3 from "../assets/imgs/testi-1_200x200.png";
import SEO from "../components/SEO/SEO.jsx";
import "../assets/css/About.css";

export default function About() {
  const customer = [
    {
      name: "andy harris",
      img: CLIENT1,
      position: "musician",
    },
    {
      name: "julia madison",
      img: CLIENT2,
      position: "developer",
    },
    {
      name: "layla micheal",
      img: CLIENT3,
      position: "professor",
    },
  ];

  const performancePeople = [
    {
      name: "sonya gilbert",
      position: "CEO",
      img: "",
    },
    {
      name: "calvin fisher",
      position: "production manager",
      img: "",
    },
    {
      name: "irvin gross",
      position: "sales executive",
      img: "",
    },
    {
      name: "sherry lindsey",
      position: "receptionist",
      img: "",
    },
  ];
  return (
    <SEO title="About">
      <HeadPage direction="about" />
      <div className="fullfill">
        <div className="container">
          <div className="wrapper-fullfill">
            <div className="content">
              <h6>music is poem</h6>
              <h3>FullFill Your Music Needs...</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                minima non ipsa delectus aliquam molestiae dolor nihil
                consequuntur animi repellat enim ut dolorum esse eius
                consequatur veniam porro minus officia, eius consequatur veniam
                porro minus officia?
              </p>
              <div className="sub-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                  minima non ipsa delectus aliquam molestiae dolor nihil
                  consequuntur animi repellat enim ut dolorum esse eius
                  consequatur veniam porro minus officia ,eius consequatur
                  veniam porro minus officia?
                </p>
                <span>keith greene</span>
              </div>
            </div>
            <div className="img-content">
              <img src={IMG} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="container">
          <div className="wrapper-details">
            <div className="content">
              <h6>feel in the sound</h6>
              <h3>feel hte decibels closely</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                numquam fugiat repellat doloremque, suscipit, in voluptate alias
                aliquid necessitatibus culpa voluptatum maiores placeat mollitia
                neque. Atque ipsam magnam illo quae?
              </p>
              <Link to="/about">read more</Link>
            </div>
            <div className="details-boxs">
              <div className="one-box">
                <div>
                  <span>
                    <AiFillHeart />
                  </span>
                  <span>listing differently</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>

              <div className="one-box">
                <div>
                  <span>
                    <FaPen />
                  </span>
                  <span>dance your heart</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>

              <div className="one-box">
                <div>
                  <span>
                    <RiWirelessChargingLine />
                  </span>
                  <span>go wireless</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>

              <div className="one-box">
                <div>
                  <span>
                    <BsMusicNoteBeamed />
                  </span>
                  <span>feel the rhythm</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>

              <div className="one-box">
                <div>
                  <span>
                    <FiPhoneCall />
                  </span>
                  <span>sound of silence</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>

              <div className="one-box">
                <div>
                  <span>
                    <FcIdea />
                  </span>
                  <span>quality perfectionist</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  asperiores veniam commodi quos illo aspernatur dolores omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-thing">
        <div className="container">
          <HeadOfSection
            sub="simple thing"
            main="every breath, note and beat in studio quality"
          />
          <div className="container-simple">
            <div className="one-simple">
              <div className="content-img">
                <img src={IMG1} alt="" loading="lazy" />
                <div className="overImg"></div>
              </div>
              <div className="content">
                <h3>fine engineering only your ears</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi vel est atque sit expedita nam id, magnam, nostrum ex
                  sapiente temporibus iure labore aliquid? Repudiandae soluta
                  repellendus eum consequatur harum.
                </p>
              </div>
            </div>
            <div className="one-simple">
              <div className="content">
                <h3>keeping your ears safe and music loud</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi vel est atque sit expedita nam id, magnam, nostrum ex
                  sapiente temporibus iure labore aliquid? Repudiandae soluta
                  repellendus eum consequatur harum.
                </p>
              </div>
              <div className="content-img">
                <img src={IMG2} alt="" loading="lazy" />
                <div className="overImg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-client" style={{backgroundColor: "#222"}}>
        <div className="container">
          <div className="wrapper-simple">
            <HeadOfSection sub="our client" main="thus spoke our customers" />
            <div className="wrapper-cards">
              {customer.map((client, i) => {
                return (
                  <div className="client-card" key={i}>
                    <p className="content">
                      &quot; Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Dolorum placeat totam, atque, necessitatibus fugiat
                      animi beatae qui, iure blanditiis quibusdam velit corporis
                      quaerat vitae. Nam asperiores voluptate quos repellendus
                      sed.&quot;
                    </p>
                    <div className="content-info">
                      <div>
                        <img
                          src={client.img}
                          alt={client.name}
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <span>{client.name}</span>
                        <span>{client.position}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="high-performance">
        <div className="container">
          <div className="wrapper-high-performance">
            <HeadOfSection sub="high performance" main="our team" />
            <div className="container-of-experience">
              {performancePeople.map((one, i) => {
                return (
                  <div className="one-experience" key={i}>
                    <div className="img-experience"></div>
                    <div className="content-experience">
                      <h3>{one.name}</h3>
                      <h6>{one.position}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SEO>
  );
}
