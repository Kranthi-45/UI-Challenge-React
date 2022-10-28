/* eslint-disable no-lone-blocks */
import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import '../styles/TopMenu.css';
import { NavBar } from './navbar';

export const TopMenu = () => {

    const menudata =
        [
            {
                type: "link",
                title: "This Month",
            },
            {
                type: "link",
                title: "SKIN",
            },
            {
                type: "link",
                title: "HAIR",
            },
            {
                type: "link",
                title: "BATH",
            },
            {
                type: "link",
                title: "SALE",
            },
            {
                type: "button",
                title: "LOGIN >",
            }
        ]


    return (<>
        <div className="banner">
            <div className="navbar">
                <img src="./assets/logo.svg" className="logo desktopMenu"
                    alt="logo" />

                <ul className="desktopMenu" >
                    {
                        menudata.map((item, index) => <NavBar key={index} item={item} index={index} />)
                    }
                </ul>
            </div>

            <nav className="navbar navbar-expand-md bg-light navbar-light mobileMenu" style={{ backgroundColor: '#212529' }} >
                <img src="../../assets/logo.svg" alt='logo' />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon">
                        <img src="./assets/hamburger.svg" alt='humberger' />
                    </span>
                    <span className="my-1 mx-2 close" style={{ color: '#212529' }} >
                        <img src="./assets/hamburger-close.svg" alt='humbergerclse' />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav" style={{ textAlign: 'center', width: 340 }} >
                        {
                            menudata.map((item, index) => <NavBar key={index} item={item} index={index} />)
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </>)

}
