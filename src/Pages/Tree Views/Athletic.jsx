import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/CSS/Athletic.css";
import { UserContext } from "../../userContext";


function Athletic() {

  const navigate = useNavigate();
  const {setSkillPoints} = useContext(UserContext);

  function goToSkillTree(event) {

    document.getElementById("step-1").style.backgroundColor = "#0D6EFD";

    navigate("/PlayerBuild/SkillTree/Physical");
    
    event.preventDefault();
  }

  function change(event) {
    setSkillPoints(event.target.value);
  }

    return (
      <div>
        <form className="row athletic-form" id="athletic-form" onSubmit={goToSkillTree}>
          <div className="col-md-6">
            <div className="po">
              <h6 id="position-child">Enter Position:</h6>
              <br />
              <select className="pos" id="pos-select" name="" defaultValue="Default">
                <option value="Default" disabled>Enter your position</option>
                <option value="">ST</option>
                <option value="">RW</option>
                <option value="">LW</option>
                <option value="">CF</option>
                <option value="">RF</option>
                <option value="">LF</option>
                <option value="">CAM</option>
                <option value="">RM</option>
                <option value="">LM</option>
                <option value="">CM</option>
                <option value="">CDM</option>
                <option value="">LWB</option>
                <option value="">LB</option>
                <option value="">CB</option>
                <option value="">RB</option>
                <option value="">RWB</option>
                <option value="">GK</option>
              </select>
            <br />
          </div>
            <div className="he">
              <h6>Choose Height:</h6>
              <br />
              <select className="height" id="height-select" name="" defaultValue="Default">
                <option value="Default" disabled>Choose Height</option>
                <option value="">5'3" - 5'4"</option>
                <option value="">5'5" - 5'6"</option>
                <option value="">5'7" - 5'8"</option>
                <option value="">5'9" - 5'10"</option>
                <option value="">5'11" - 6'0"</option>
                <option value="">6'1" - 6'2"</option>
                <option value="">6'3" - 6'4"</option>
                <option value="">6'5" - 6'6"</option>
                <option value="">6'7"</option>
              </select>
            </div>
            <div className="we">
              <h6>Choose Weight:</h6>
              <br />
              <select className="weight" id="weight-select" name="" defaultValue="Default">
                <option value="Default" disabled>Choose Weight</option>
                <option value="">100lbs - 119lbs</option>
                <option value="">120lbs - 149lbs</option>
                <option value="">150lbs - 174lbs</option>
                <option value="">175lbs - 199lbs</option>
                <option value="">200lbs - 224lbs</option>
                <option value="">225lbs - 253lbs</option>
              </select>
            </div>
            <div className="pts">
              <input id="skill-points" type="number" min="0" max="110" name="" placeholder="Skill Points" onChange={change} />
            </div>
            <button className="submit-btn" type="submit">Jump In</button>
          </div>
        </form>
      </div>
    );
}

export default Athletic;