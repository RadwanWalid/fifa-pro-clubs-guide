import React from "react";
import "../Assets/CSS/Footer.css";

function Footer() {
    return (
        <div className="copyright">
            <section id="contact-me">
                <a href="https://www.linkedin.com/"><button className="btn btn-outline-dark" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in button-icons"></i> LinkedIn</button></a>
                <a href="https://twitter.com/"><button className="btn btn-outline-dark"><i className="fab fa-twitter button-icons"></i> Twitter</button></a>
                <a href="mailto:hood.redcrimealley@gmail.com"><button className="btn btn-outline-dark" type="button"><i className="fas fa-phone-alt button-icons"></i> Contact Us</button></a>
                <br />
                <br />
                <a href="https://www.ea.com/games/fifa/pitch-notes/news/pitch-notes-fifa-22-pro-clubs-deep-dive"><button className="btn btn-outline-dark ea icon"><img className="button-icons" src={require("../Assets/Images/EA_logo_logotype green.png")} alt="EA Logo" />Website</button></a>
            </section>
            <p>© 2022 Red Hood.</p>
            <p>This website is not affiliated with or sponsored by Electronic Arts Inc. or its Licensors.</p>
       </div>
    );
};

export default Footer;