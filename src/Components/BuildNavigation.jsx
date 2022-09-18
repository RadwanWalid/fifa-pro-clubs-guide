import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/BuildNavigation.css";
import { UserContext } from "../userContext";

function BuildNavigation() {

    const navigate = useNavigate();
    const [previousPath, setPreviousPath] = useState(null);
    const {skillPoints} = useContext(UserContext);

    function navigateTo(e) {
        var url = window.location.href;
        setPreviousPath(url.split("/").pop());
        navigate("/PlayerBuild/SkillTree/" + e.target.innerHTML);
    }

    useEffect(() => {
        if(previousPath !== null) {
            document.getElementById(previousPath.toLowerCase() + "-btn").style.borderBottom = "0px";
            document.getElementById(previousPath.toLowerCase() + "-btn").style.backgroundColor = "#2F3545";
            document.getElementById(previousPath.toLowerCase() + "-btn").style.color = "white";
            document.getElementById(previousPath.toLowerCase() + "-btn").style.transition = "height 0.5s linear, border-bottom 0.25s linear, background-color 0.5s linear";
            document.getElementById(previousPath.toLowerCase() + "-btn").style.height = "25px";
        }

        var url = window.location.href;
        var path = url.split("/").pop();

        document.getElementById(path.toLowerCase() + "-btn").style.borderBottom = "2px solid #CD2862";
        document.getElementById(path.toLowerCase() + "-btn").style.backgroundColor = "#1D1F2C";
        document.getElementById(path.toLowerCase() + "-btn").style.color = "#C7F650";
        document.getElementById(path.toLowerCase() + "-btn").style.transition = "height 0.5s, border-bottom 0.25s, background-color 0.5s";
        document.getElementById(path.toLowerCase() + "-btn").style.height = "30px";
    });

    return (
            <div>
                <div className="row tree-ptr">
                    {/* <div className="col" id="athletic-ptr">
                        <button id="athletic-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Athletic</button>
                    </div> */}
                    <div className="col" id="physical-ptr">
                        <button id="physical-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Physical</button>
                    </div>
                    <div className="col" id="defending-ptr">
                        <button id="defending-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Defending</button>
                    </div>
                    <div className="col" id="dribbling-ptr">
                        <button id="dribbling-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Dribbling</button>
                    </div>
                    <div className="col" id="passing-ptr">
                        <button id="passing-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Passing</button>
                    </div>
                    <div className="col" id="shooting-ptr">
                        <button id="shooting-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Shooting</button>
                    </div>
                    <div className="col" id="pace-ptr">
                        <button id="pace-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Pace</button>
                    </div>
                    <div className="col" id="goalkeeping-ptr">
                        <button id="goalkeeping-btn" className="buildnav-btn" type="button" name="button" onClick={navigateTo}>Goalkeeping</button>
                    </div>
                </div>
                <div>
                    <p id="skill-pts">Skill Points Left: {skillPoints}</p>
                </div>
            </div>
    );
}

export default BuildNavigation;