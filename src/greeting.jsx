import React from "react";
import { BsCalendarDate } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

export function Greeting() {
    return (
        <>
            <div className="greet">
                <h1>Welcome back, Maxie</h1>
                <p>Maximize product sales and store management in order to get the best results</p>
            </div>
            <div className="monthDrop">
                <div className="month">
                    <BsCalendarDate />
                    <p>This Month</p>
                    <IoIosArrowDown />
                </div>
                <button className="blackBtn">Download Report</button>
            </div>
        </>
    );
}