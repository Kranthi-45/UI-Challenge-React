import React from 'react'
import '../styles/showcase2-container.css';

export const Showcase2Container = (props) => {
    return <>
        <div id="showcase2-container">
            <div className="showcase">
                <div className="subColContiners txtContainer">
                    <div className="feature-text mobfeaturetext">
                        <h1 className="section-title">{props.item.title} </h1>
                        <p className="section-left">{props.item.content} </p>
                    </div>
                </div>
                <div className="subColContiners imgContainer">
                    {props.item.showdowImage &&
                        <img className="showdowImage" src={props.item.showdowImage} alt='pic' />
                    }
                    <img className="showcase1pic img" src={props.item.image} alt='pic' style={{ position: 'relative' }} />
                    <span className={"num number" + (props.index + 1)}>{props.index + 1}</span>
                </div>
            </div>
        </div>
    </>
}
