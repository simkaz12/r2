import React from "react";
import { FaDollarSign } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { MdOutlineStoreMallDirectory } from 'react-icons/md';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { CgCalendar } from 'react-icons/cg';
import './App.css';

export default function SmallInfo() {
    return (
        <>
            <div className="bin">
                <div className="smallbin">
                    <div className="categorie">
                        <span className="cirkle blue"><FaDollarSign /></span>
                        <p>Net Profit</p>
                    </div>
                    <h2><BiDollar />302.1K</h2>
                    <div className="bottom">
                        <span className="red"><BsArrowDownRight /> 2.9%</span><span> vs <BiDollar />300.3k last year</span>
                    </div>
                </div>
                <div className="smallbin">
                    <div className="categorie">
                        <span className="cirkle"><MdOutlineStoreMallDirectory /></span>
                        <p>Net Profit</p>
                    </div>
                    <h2>12,900</h2>
                    <div className="bottom">
                        <span className="green"><BsArrowUpRight /> 12.9%</span><span> vs 1030 last year</span>
                    </div>
                </div>
                <div className="smallbin">
                    <div className="categorie">
                        <span className="cirkle"><CgCalendar /></span>
                        <p>Net Profit</p>
                    </div>
                    <h2>390,040</h2>
                    <div className="bottom">
                        <span className="green"><BsArrowUpRight /> 41%</span><span> vs 320,583 last year</span>
                    </div>
                </div>
                <div className="smallbin">
                    <div className="categorie">
                        <span className="cirkle"><IoPeopleCircleOutline /></span>
                        <p>Net Profit</p>
                    </div>
                    <h2>3.1M</h2>
                    <div className="bottom">
                        <span className="red"><BsArrowDownRight /> 1.7%</span><span> vs 3.3M last year</span>
                    </div>
                </div>
            </div>
        </>
    )
}