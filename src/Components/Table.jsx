import React, { Fragment, useEffect } from 'react';
import Gauge from './Gauge';
import "../Assets/CSS/Table.css";

function Table(props) {

    function changeColor(bar) {
        if (bar.ariaValueNow >= 0 && bar.ariaValueNow <= 50) {
            bar.style.backgroundColor = "#D80E34";
        } else if (bar.ariaValueNow > 50 && bar.ariaValueNow <= 70) {
            bar.style.backgroundColor = "#E4B90B";
        } else if (bar.ariaValueNow > 70 && bar.ariaValueNow <= 80) {
            bar.style.backgroundColor = "#1EB711";
        } else {
            bar.style.backgroundColor = "#0AA507";
        }
    }

    useEffect(() => {
        Array.from(document.getElementsByClassName("progress-bar")).forEach(changeColor);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>{props.heading}</th>
                </tr>
            </thead>
            {<TableRowItem stats={props.stats} heading={props.heading} />}
        </table>
    );
};

const TableRowItem = ({ stats }) => {
    return (
        <tbody>
            <tr id="gauge-row">
                <Gauge />
            </tr>

            {stats.map((statsItem, index) =>{
                return (
                    <Fragment key={index}>
                        <tr id="stats-info">
                            <td id="stats-name">{statsItem.name}</td>
                            <td id="stats-value">{statsItem.value}</td>
                            <td className="growth-value"></td>
                        </tr>

                        <tr>
                            <td id="progressbar">
                                <div className="progress">
                                    <div className="progress-bar attribute-value" role="progressbar" style={{width: `${statsItem.value*1.5}px`}} aria-valuenow={statsItem.value} aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: "0px"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </td>
                        </tr>
                    </Fragment>
                );
            })}
        </tbody>
    );
};

export default Table;