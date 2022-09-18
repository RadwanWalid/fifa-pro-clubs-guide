import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import FinalStats from "../Components/FinalStats";
import Athletic from "./Tree Views/Athletic";
import Physical from "./Tree Views/Physical";
import Defending from "./Tree Views/Defending";
import Dribbling from "./Tree Views/Dribbling";
import Passing from "./Tree Views/Passing";
import Shooting from "./Tree Views/Shooting";
import Pace from "./Tree Views/Pace";
import Goalkeeping from "./Tree Views/Goalkeeping";
import BuildBackground from "../Assets/Images/build-background.png";
import WithBuildNav from "../Routes/WithBuildNav";
import WithoutBuildNav from "../Routes/WithoutBuildNav";
import "../Assets/CSS/PlayerBuild.css";
import { UserContext } from "../userContext";

function PlayerBuild() {

    const location = useLocation();
    const navigate = useNavigate();
    const [skillPoints, setSkillPoints] = useState(0);

    function goTo(step) {
        if(step === 1) {
            document.getElementById("step-1").style.backgroundColor = "#C7F650";
            document.getElementById("step-2").style.backgroundColor = "grey";
            navigate("/PlayerBuild/Athletic");
        } else {
            document.getElementById("step-1").style.backgroundColor = "initial";
            document.getElementById("step-2").style.backgroundColor = "#C7F650";
            navigate("/PlayerBuild/SkillTree/Physical");
        }
    }

    useEffect(() => {

    }, [location]);

    return (
        <div id="main-content" style={{backgroundImage: `url('${BuildBackground}')`}}>
            <div style={{backgroundColor: "rgba(28,31,26,0.5)", paddingBottom: "50px", height: "auto"}}>
                <UserContext.Provider value={{skillPoints, setSkillPoints}}>
                    <Routes>
                            <Route element={<WithoutBuildNav />}>
                                <Route path='Athletic' element={<Athletic />}/>
                            </Route>
                            <Route element={<WithBuildNav />}>
                                <Route path='SkillTree/Physical' element={<Physical />}/>
                                <Route path='SkillTree/Defending' element={<Defending />}/>
                                <Route path='SkillTree/Dribbling' element={<Dribbling />}/>
                                <Route path='SkillTree/Passing' element={<Passing />}/>
                                <Route path='SkillTree/Shooting' element={<Shooting />}/>
                                <Route path='SkillTree/Pace' element={<Pace />}/>
                                <Route path='SkillTree/Goalkeeping' element={<Goalkeeping />}/>
                            </Route>
                    </Routes>
                </UserContext.Provider>
            </div>
            <div>
                <button id="step-1" onClick={() => goTo(1)}>Step 1</button>
                <button id="step-2" onClick={() => goTo(2)}>Step 2</button>
            </div>
            <FinalStats />
        </div>
    );
};

export default PlayerBuild;