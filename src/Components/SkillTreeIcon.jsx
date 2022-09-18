import React, { useContext, useState } from "react";
import "../Assets/CSS/SkillTreeIcon.css";
import goalkeepingData from "../Data/Goalkeeping";
import { dataContext } from "../dataContext";

function SkillTreeIcon(props) {

    const [isSelected, setSelect] = useState(false);
    const iconID = props.data.name + props.data.key;
    const path = props.data.tree + "/" + props.data.name;
    const {setData} = useContext(dataContext);

    function filter(hovered) {
        return (hovered.name === props.data.name && hovered.key === props.data.key);
    }

    function hover(isHovering) {
        if(isHovering){
            if(props.data.onHover === "GK") {
                setData(goalkeepingData.find(filter));
            }
            document.getElementById(iconID).src = require("../Assets/Images/Skill Tree/" + path + " On Hover.png");
        }
        else {
            if(props.data.onHover === "GK") {
                setData("");
            }
            if(!isSelected){
                document.getElementById(iconID).src = require("../Assets/Images/Skill Tree/" + path + ".png");
            }
            else {
                document.getElementById(iconID).src = require("../Assets/Images/Skill Tree/" + path + " Selected.png");
            }
        }
    }

    function select() {
        if(!isSelected){
            document.getElementById(iconID).src = require("../Assets/Images/Skill Tree/" + path + " Selected.png");
            setSelect(true);            
        } else {
            document.getElementById(iconID).src = require("../Assets/Images/Skill Tree/" + path + ".png");
            setSelect(false);
        }
    }

    return (
        <button className="skill-tree-icon-btn" type="button" name="button" onMouseOver={() => hover(true)} onMouseLeave={() => hover(false)} onClick={() => select()}>
            <img className="skill-tree-icon-image" id={iconID} src={props.icon} alt={props.data.name + " Icon"} />
        </button>
    );
}

export default SkillTreeIcon;