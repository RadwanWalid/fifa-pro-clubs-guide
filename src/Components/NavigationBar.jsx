import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../Assets/CSS/NavigationBar.css";

function NavigationBar() {

  return (
    <Navbar className="navigation" expand="lg" variant="dark">
      <Container className="navContainer" fluid>
        <Navbar.Brand href="/"><img className="FIFAlogo" src={require("../Assets/Images/fifa-22-logo.png")} alt="" /></Navbar.Brand>
        <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
          <Nav>
            <Nav.Link id="navbarlink" href="/LevelUp">Level Up</Nav.Link>
            <Nav.Link id="navbarlink" href="/SkillTree">Skill Tree</Nav.Link>
            <Nav.Link id="navbarlink" href="/Archetypes">Archetypes</Nav.Link>
            <Nav.Link id="navbarlink" href="/Perks">Perks</Nav.Link>
            <Nav.Link id="navbarlink" href="/PlayerBuild/Athletic">Try Your Own Build</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavigationBar;