import React from 'react'
import '../styles/TopMenu.css';
export const NavBar = (props) => {
    var navItem;
    if (props.item.type === "link") {
        navItem = <li ><a href="./" className="nav-link"  >{props.item.title}</a></li>;
    } else {
        navItem = <li ><a href="./" className="nav-link loginBtn" >{props.item.title}</a></li>;
    }
    return (<>
        {navItem}
    </>)
}
