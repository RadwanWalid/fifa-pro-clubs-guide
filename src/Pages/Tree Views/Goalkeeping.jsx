import React, { useEffect, useState } from "react";
import AttributeDetails from "../../Components/AttributeDetails";
import SkillTreeIcon from "../../Components/SkillTreeIcon";
import { dataContext } from "../../dataContext";
import "../../Assets/CSS/Goalkeeping.css";

function Goalkeeping() {

    const treeType = window.location.pathname.split("/").pop();
    const [data, setData] = useState("");
    const [info, setInfo] = useState("");

    useEffect(() => {
        if(data !== "")
            setInfo(<AttributeDetails name={data.name} cost={data.cost} description={data.description} />);
        else
            setInfo("");
    },[data]);

    return (
        <dataContext.Provider value={{data, setData}}>
            <div className="tree" id="goalkeeping-tree">
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Reflexes", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Reflexes.png")} />
                <br />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Diving", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Diving.png")} />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Kicking", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Kicking.png")} />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Positioning", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Positioning.png")} />
                <br />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Handling", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Handling.png")} />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Kicking", key: 2}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Kicking.png")} />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Reflexes", key: 2}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Reflexes.png")} />
                <br />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Hawk", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Hawk.png")} />
                <SkillTreeIcon data={{onHover: "GK", tree: treeType, name: "Wall", key: 1}} icon={require("../../Assets/Images/Skill Tree/Goalkeeping/Wall.png")} />
            </div>
            <div className="icon-details" id="skill-tree-icon-info">
                {info}
            </div>
            </dataContext.Provider>
    );
};

export default Goalkeeping;