import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Defending() {
    
    const treeType = window.location.pathname.split("/").pop();

    return (
        <div className="col" id="defending-tree">
            <SkillTreeIcon data={{tree: treeType, name: "Interceptions", key: 1}} icon={require("../../Assets/Images/Skill Tree/Defending/Interceptions.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Standing-Tackle", key: 1}} icon={require("../../Assets/Images/Skill Tree/Defending/Standing-Tackle.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Defensive-Awareness", key: 1}} icon={require("../../Assets/Images/Skill Tree/Defending/Defensive-Awareness.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Sliding-Tackle", key: 1}} icon={require("../../Assets/Images/Skill Tree/Defending/Sliding-Tackle.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Defensive-Awareness", key: 2}} icon={require("../../Assets/Images/Skill Tree/Defending/Defensive-Awareness.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Standing-Tackle", key: 2}} icon={require("../../Assets/Images/Skill Tree/Defending/Standing-Tackle.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Sliding-Tackle", key: 2}} icon={require("../../Assets/Images/Skill Tree/Defending/Sliding-Tackle.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Interceptions", key: 2}} icon={require("../../Assets/Images/Skill Tree/Defending/Interceptions.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Standing-Tackle", key: 3}} icon={require("../../Assets/Images/Skill Tree/Defending/Standing-Tackle.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Gaurdian", key: 1}} icon={require("../../Assets/Images/Skill Tree/Defending/Gaurdian.png")} />
        </div>
    );
};

export default Defending;