import React from "react";
import SkillTreeIcon from "../../Components/SkillTreeIcon";

function Passing() {
    
    const treeType = window.location.pathname.split("/").pop();

    return (
        <div>
            <div className="col" id="left-passing-tree">
                <SkillTreeIcon data={{tree: treeType , name: "Crossing" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Crossing.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Vision" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Vision.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Curve" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Curve.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Crossing" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Passing/Crossing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Curve" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Passing/Curve.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Artist" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Artist.png")} />
            </div>
            <div className="col" id="right-passing-tree">
                <SkillTreeIcon data={{tree: treeType , name: "Short-Passing" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Short-Passing.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Short-Passing" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Passing/Short-Passing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Long-Passing" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Long-Passing.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Vision" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Passing/Vision.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Vision" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Passing/Vision.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Short-Passing" , key: 3}} icon={require("../../Assets/Images/Skill Tree/Passing/Short-Passing.png")} />
                <SkillTreeIcon data={{tree: treeType , name: "Long-Passing" , key: 2}} icon={require("../../Assets/Images/Skill Tree/Passing/Long-Passing.png")} />
                <br />
                <SkillTreeIcon data={{tree: treeType , name: "Architect" , key: 1}} icon={require("../../Assets/Images/Skill Tree/Passing/Architect.png")} />
            </div>
        </div>
    );
};

export default Passing;