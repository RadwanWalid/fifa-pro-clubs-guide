import React from "react";
import "../Assets/CSS/Home.css";
import "../Assets/CSS/General.css";
import BackgroundImage from "../Assets/Images/background.png";

function Home() {
  return (
      <div id="main-content" style={{backgroundImage:  `url('${BackgroundImage}')`}}>
      <section id="title">
        <h1 style={{fontSize: "625%", fontWeight: "bold"}}>FIFA 22</h1>
        <p className="sub-title">Pro CLubs Database</p>
        <img className="logo" src={require("../Assets/Images/ProClubsIcon.png")} alt="Pro Clubs Logo" />
      </section>
  
      <hr />
  
      <div id="deep-dive" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" style={{height: "400px", width: "80%"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#deep-dive" data-bs-slide-to="0" className="active variant" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#deep-dive" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#deep-dive" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Archetypes</h1>
          </div>
          <div className="carousel-item">
            <h1>Perks</h1>
          </div>
          <div className="carousel-item">
            <h1>Team Customization</h1>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#deep-dive" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#deep-dive" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  
      <hr style={{marginTop: "50px"}} />
  
      <section id="levelling-up">
        <h1 className="categories">Level Up</h1>
        <br />
      </section>
  
      <hr />
  
      <section id="skill-tree">
        <h1 className="categories">Skill Tree</h1>
        <br />
      </section>
  
      <hr />
  
      <section id="archetypes">
        <h1 className="categories">Archetypes</h1>
        <br />
      </section>
  
      <hr />
  
      <section id="perks">
        <h1 className="categories">Perks</h1>
        <br />
      </section>
    </div>
  );
}

export default Home;