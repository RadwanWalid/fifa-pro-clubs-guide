import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Dribbling() {
    
    const treeType = window.location.pathname.split("/").pop();

    return (
        <div>
            <div className="col" id="left-dribbling-tree">
                <SkillTreeIcon data={{tree: treeType , name: "Balance" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Balance.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Ball-Control" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Ball-Control.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Dribbling" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Dribbling.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Ball-Control" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Ball-Control.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Attacking-Position" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Attacking-Position.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Skill-Moves" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Skill-Moves.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Ball-Control" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Ball-Control.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Maestro" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Maestro.png")} />
            </div>
            <div className="col" id="right-dribbling-tree">
                <SkillTreeIcon data={{tree: treeType , name: "Agility" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Agility.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Dribbling" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Dribbling.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Agility" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Agility.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Balance" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Balance.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Skill-Moves" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Skill-Moves.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Attacking-Position" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Attacking-Position.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Lynx" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Dribbling/Lynx.png")} />
            </div>
        </div>
    );
};

export default Dribbling;