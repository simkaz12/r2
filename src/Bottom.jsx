import React from "react";
import { RiExchangeDollarLine } from 'react-icons/ri';
import { BsThreeDots, BsArrowUpRight } from 'react-icons/bs';


export default function Bottom() {
    return (
        <>
            <div className="bottom-container">
                <div className="left">
                    <span className="cirkle"><RiExchangeDollarLine /></span><span>Monthly Recurring Revenue</span><span><BsThreeDots /></span>
                    <div className="smallbin">
                        <div className="categorie">
                            <p>Net Profit</p>
                        </div>
                        <h2>390,040</h2>
                        <div className="bottom">
                            <span className="green"><BsArrowUpRight /> 41%</span><span> vs 320,583 last year</span>
                        </div>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}