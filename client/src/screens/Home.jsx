import React from "react";
import {AiOutlinePlayCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import Carousal from "../components/Carousal/Carousal";
import IMG1 from "../assets/imgs/img-1a_600x.png";
import IMG2 from "../assets/imgs/img-2_600x.png";
import IMG3 from "../assets/imgs/img-3_770x.jpg";
import ENG1 from "../assets/imgs/test-1_200x200.jpg";
import ENG2 from "../assets/imgs/test-2_200x200.jpg";
import ENG3 from "../assets/imgs/testi-1_200x200.png";
import HeadOfSection from "../components/HeadOfSection/HeadOfSection";
import SEO from "../components/SEO/SEO.jsx";
import news from "../utilities/new-api.json";
import "../assets/css/Home.css";

export default function Home() {
  const popular = [
    {name: "layla matt", position: "cto - mason", image: ENG2},
    {
      name: "micheal jackson",
      position: "marketing manger - facebook",
      image: ENG1,
    },
    {name: "sara john", position: "big fan  - boom", image: ENG3},
  ];

  const handleDisplayExperience = id => {
    const sliders = document.querySelectorAll(".slide-container");
    sliders.forEach((slide, i) => {
      if (i === id) {
        sliders[i].classList.add("active-slide-experience");
      }
      if (i !== id) {
        sliders[i].classList.remove("active-slide-experience");
      }
    });
  };

  return (
    <SEO title="BOOM | official Page">
      <Carousal />
      <div className="container">
        <div className="buy-now">
          <div className="sub-buy-now">
            <div className="parent-img">
              <img src={IMG1} alt="" loading="lazy" />
            </div>
            <div className="parent-content">
              <span>simple awesome</span>
              <h3>amazing music gadgets for music lovers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sit laborum placeat beatae corrupti!
              </p>
              <button>buy now</button>
            </div>
          </div>
          <div className="sub-buy-now">
            <div className="parent-img">
              <img src={IMG2} alt="" loading="lazy" />
            </div>
            <div className="parent-content">
              <span>long lasting comfort</span>
              <h3>high-quality sound true wireless earbuds</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                sit laborum placeat beatae corrupti!
              </p>
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="feat">
            <div className="sub-feat">
              <img src={IMG3} alt="" loading="lazy" />
            </div>
            <div className="sub-feat">
              <span>advanced features</span>
              <h3>ultimate comfort and best sound </h3>
              <ul>
                <li>
                  <span>B</span>
                  <span>bluetooth connectivity</span>
                </li>
                <li>
                  <span>W</span>
                  <span>wireless headphones</span>
                </li>
                <li>
                  <span>B</span>
                  <span>long lasting battery</span>
                </li>
                <li>
                  <span>W</span>
                  <span>high water & dust register</span>
                </li>
                <li>
                  <span>M</span>
                  <span>one touch control</span>
                </li>
                <li>
                  <span>S</span>
                  <span>active noise canceling</span>
                </li>
              </ul>
              <button>buy now</button>
            </div>
          </div>
        </div>
      </div>
      {/* start experience */}
      <div className="experience">
        <div className="container">
          <div className="container-experience">
            <HeadOfSection
              main="wireless headphones & ear-buds are comfort & fit"
              sub="magical listing experience"
            />
            <div className="display-experience">
              {popular.map((eng, i) => {
                return (
                  <div
                    className={
                      i === 0
                        ? "slide-container active-slide-experience"
                        : "slide-container"
                    }
                    key={eng.name + eng.position}
                  >
                    <div className="popular-img">
                      <div className="img">
                        <div className="over-img"></div>
                        <img src={eng.image} alt="" loading="lazy" />
                      </div>
                    </div>
                    <div className="info-eng">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore labore aut laudantium rerum, quibusdam
                        recusandae ducimus eum, accusantium voluptate excepturi
                        veniam autem incidunt itaque cupiditate sint quia
                        reprehenderit nihil
                      </p>
                      <h3>{eng.name}</h3>
                      <h6>{eng.position}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
            <ul className="paginate">
              {[0, 1, 2].map(item => {
                return (
                  <li
                    key={item + Math.ceil(Math.random() * Math.random())}
                    onClick={() => handleDisplayExperience(item)}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* start the right headPhones */}
      <div className="theRightHeadPhones">
        <div className="overlayRightHeadPone"></div>
        <div className="wrapper-content">
          <h3>The Right HeadPhone</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            molestiae ut perferendis quam et ex aperiam expedita dolore animi
            dolorem sapiente, repellat atque, repudiandae non nostrum! In
            blanditiis possimus aperiam?
          </p>
          <span>
            <AiOutlinePlayCircle />
          </span>
        </div>
      </div>
      {/* start performance */}
      <div className="performance">
        <div className="container">
          <HeadOfSection
            main="rhythmic music blog"
            sub="good treble performance"
          />
          <div className="wrapper-people">
            {news.slice(0, 3).map(_ => {
              return (
                <div className="one-people" key={_._id}>
                  <div className="wrapper-img">
                    <img
                      src={process.env.aPI + "/" + _.imageOfArticle}
                      alt={_.author}
                      loading="lazy"
                    />
                  </div>
                  <div className="wrapper-content">
                    <h4>{_.head}</h4>
                    <span>{_.author}</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto repellat enim mollitia reiciendis ipsum,
                      repellendus, minus officia optio sit delectus sunt, quidem
                      ipsa pariatur beatae aut dolorum commodi! Unde, modi.
                    </p>
                    <Link to={"/news/" + _._id}>read more</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SEO>
  );
}
