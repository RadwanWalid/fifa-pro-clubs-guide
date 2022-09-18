import React, { useEffect} from "react";
import "../Assets/CSS/Gauge.css";

function Gauge() {

    function changeDonutColor(gauge) {
        var value = parseInt(gauge.getElementsByTagName("span")[0].innerHTML);
        gauge.style.setProperty("--value", value);

        if (value >= 0 && value <= 50) {
            gauge.style.setProperty("--fill", "#D80E34");
        } else if (value > 50 && value <= 70) {
            gauge.style.setProperty("--fill", "#E4B90B");
        } else if (value > 70 && value <= 80) {
            gauge.style.setProperty("--fill", "#1EB711");
        } else {
            gauge.style.setProperty("--fill", "#0AA507");
        }
    }

    useEffect(() => {
        Array.from(document.getElementsByClassName("semi-donut-model-2")).forEach(changeDonutColor);
    });

    return (
        <th className="semi-donut-model-2 margin" >
            <span className="semi-donut-value">
                {Math.floor(Math.random() * 100)}
            </span>
        </th>
    );
};

export default Gauge;