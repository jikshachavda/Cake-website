import React from "react";
import Navbar from "./Navbar";
import "./Cake.css";
import chef from "./images/chef-1.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="About-Section">
        <div className="images">
          <img src={chef} alt="" />
        </div>
        <div className="About-content">
          <h2>
            <span>w</span>hy <span>c</span>hoose <span>u</span>s{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            est, ratione nesciunt beatae minus aperiam laboriosam cum corporis
            maxime sapiente ex, facilis distinctio. Mollitia, reiciendis.
            Repudiandae molestiae itaque error natus?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
      </div>
      <div className="About-container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo,
          deserunt hic nisi saepe iste perspiciatis inventore officia amet
          eligendi? Beatae perspiciatis commodi ex odit quae quas possimus
          labore fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate deserunt laboriosam vero veniam deleniti vel similique
          asperiores sit? Eaque non enim omnis vitae nulla ipsa rem! Dignissimos
          ratione perspiciatis cupiditate?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Eos illo, deserunt hic nisi saepe iste
          perspiciatis inventore officia amet eligendi? Beatae perspiciatis
          commodi ex odit quae quas possimus labore fuga? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptate deserunt laboriosam vero
          veniam deleniti vel similique asperiores sit? Eaque non enim omnis
          vitae nulla ipsa rem! Dignissimos ratione perspiciatis
          cupiditate?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eos illo, deserunt hic nisi saepe iste perspiciatis inventore officia
          amet eligendi? Beatae perspiciatis commodi ex odit quae quas possimus
          labore fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptate deserunt laboriosam vero veniam deleniti vel similique
          asperiores sit? Eaque non enim omnis vitae nulla ipsa rem! Dignissimos
          ratione perspiciatis cupiditate?
        </p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
      <div className="About-Section">
        <div className="About-content">
          <h2>
            <span>w</span>hy <span>c</span>hoose <span>u</span>s{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            est, ratione nesciunt beatae minus aperiam laboriosam cum corporis
            maxime sapiente ex, facilis distinctio. Mollitia, reiciendis.
            Repudiandae molestiae itaque error natus?
          </p>
          <a href="#" className="btn">
            Read more
          </a>
        </div>
        <div className="images">
          <img src={chef} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
