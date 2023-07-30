import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillBellFill } from 'react-icons/bs';
import face from './dudes_face.png';

export function Search() {
    return (
        <>
            <div className="search-cont">
                <span className="srch"><AiOutlineSearch /></span> <input type="text" className="search" placeholder="Search anything..." />
            </div>
            <div className="faceBin">
                <img src={face} alt="Face" className="face" />
                <div>Maxie Mon Wachid</div>
                <IoIosArrowDown />
            </div>
            <div className="bell"><BsFillBellFill /></div>
        </>
    )
}