import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Pace() {

    const treeType = window.location.pathname.split("/").pop();

    return (
        <div id="pace-tree">
            <SkillTreeIcon data={{tree: treeType, name: "Acceleration", key: 1}} icon={require("../../Assets/Images/Skill Tree/Pace/Acceleration.png")} />
            <SkillTreeIcon data={{tree: treeType, name:"Sprint-Speed", key: 1}} icon={require("../../Assets/Images/Skill Tree/Pace/Sprint-Speed.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Acceleration", key: 2}} icon={require("../../Assets/Images/Skill Tree/Pace/Acceleration.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Sprint-Speed", key: 2}} icon={require("../../Assets/Images/Skill Tree/Pace/Sprint-Speed.png")} />
            <br />  
            <SkillTreeIcon data={{tree: treeType, name: "Acceleration", key: 3}} icon={require("../../Assets/Images/Skill Tree/Pace/Acceleration.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Sprint-Speed", key: 4}} icon={require("../../Assets/Images/Skill Tree/Pace/Sprint-Speed.png")} />
            <SkillTreeIcon data={{tree: treeType, name: "Sprint-Speed", key: 3}} icon={require("../../Assets/Images/Skill Tree/Pace/Sprint-Speed.png")} />
            <br />
            <SkillTreeIcon data={{tree: treeType, name: "Cheetah", key: 1}} icon={require("../../Assets/Images/Skill Tree/Pace/Cheetah.png")} />
        </div>
    );
};

export default Pace;