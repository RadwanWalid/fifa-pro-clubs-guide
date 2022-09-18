import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Shooting() {

    const treeType = window.location.pathname.split("/").pop();
    
    return (
        <div>
            <div className="col" id="left-shooting-tree">
                <SkillTreeIcon data={{tree: treeType , name: "FK-Accuracy" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/FK-Accuracy.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Penalties" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Penalties.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "FK-Accuracy" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/FK-Accuracy.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Shot-Power" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Shot-Power.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "FK-Accuracy" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Shooting/FK-Accuracy.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Penalties" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Penalties.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Heading-Accuracy" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Heading-Accuracy.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Weak-Foot" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Weak-Foot.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Heading-Accuracy" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Heading-Accuracy.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Sniper" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Sniper.png")} />
            </div>
            <div className="col" id="right-shooting-tree">
                <SkillTreeIcon data={{tree: treeType , name: "Finishing" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Finishing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Long-Shots" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Long-Shots.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Finishing" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Finishing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Long-Shots" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Long-Shots.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Penalties" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Shooting/Penalties.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Finishing" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Shooting/Finishing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Long-Shots" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Shooting/Long-Shots.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Weak-Foot" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Weak-Foot.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Volleys" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Volleys.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Volleys" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Shooting/Volleys.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Finisher" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Shooting/Finisher.png")} />
            </div>
        </div>
    );
};

export default Shooting;