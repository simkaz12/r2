import React from "react";
import logo from './icon.png';
import { MdOutlineSpaceDashboard, MdOutlineStoreMallDirectory } from 'react-icons/md';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { BiBarChartAlt2, BiSupport } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';



export default function Navbar() {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <img src={logo} alt="princie logo" />
                    <span className="princie_position"> Princie</span>
                </div>
                <div className="navTop">
                    <a href="#" className="navElement selected"><span className="dash"><MdOutlineSpaceDashboard /></span> Dashboard</a>
                    <a href="#" className="navElement"><IoPeopleCircleOutline /> Product</a>
                    <a href="#" className="navElement"><MdOutlineStoreMallDirectory /> Store</a>
                    <a href="#" className="navElement"><IoPeopleCircleOutline /> Visitor</a>
                    <a href="#" className="navElement"><BiBarChartAlt2 /> Analitics</a>
                    <a href="#" className="navElement"><IoMdNotificationsOutline /> Notification</a>
                </div>
                <div className="navBot">
                    <a href="#" className="navElement"><BiSupport /> Help Center</a>
                    <a href="#" className="navElement"><FiSettings /> Settings</a>
                </div>
                <div className="darkMode">
                    <div><BsMoon /> Dark Mode</div>
                </div>
            </nav >
        </>
    )
}