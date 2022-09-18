import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Physical() {
    
    const treeType = window.location.pathname.split("/").pop();

    return (
        <div>
            <div className="col" id="left-goalkeeping-tree">
                <SkillTreeIcon data={{tree: treeType, name: "Strength", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Strength.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Stamina", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Stamina.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Strength", key: 2}} icon={require("../../Assets/Images/Skill Tree/Physical/Strength.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Jumping", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Jumping.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Reactions", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Reactions.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Bull", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Bull.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Reactions", key: 2}} icon={require("../../Assets/Images/Skill Tree/Physical/Reactions.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Aggression", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Aggression.png")} />
            </div>

            <div className="col" id="right-goalkeeping-tree">
                <SkillTreeIcon data={{tree: treeType, name: "Stamina", key: 2}} icon={require("../../Assets/Images/Skill Tree/Physical/Stamina.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Reactions", key: 3}} icon={require("../../Assets/Images/Skill Tree/Physical/Reactions.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Aggression", key: 2}} icon={require("../../Assets/Images/Skill Tree/Physical/Aggression.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Jumping", key: 2}} icon={require("../../Assets/Images/Skill Tree/Physical/Jumping.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType, name: "Jumping", key: 3}} icon={require("../../Assets/Images/Skill Tree/Physical/Jumping.png")} />
                <SkillTreeIcon data={{tree: treeType, name: "Acrobat", key: 1}} icon={require("../../Assets/Images/Skill Tree/Physical/Acrobat.png")} />
            </div>
        </div>
    );
};

export default Physical;