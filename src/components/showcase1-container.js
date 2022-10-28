import React from 'react'
import '../styles/showcase1-container.css';

export const Showcase1Container = (props) => {
  return <>
    <div id="showcase1-container">
      <div className="showcase">
        <div className="subColContiners">
          <span className={"num number" + (props.index + 1)}>{props.index + 1}</span>
          <img className="showcase1pic" src={props.item.image} alt='pic' />
        </div>
        <div className="subColContiners">
          <div className="feature-text ">
            <h1 className="section-title">{props.item.title} </h1>
            <p className="section-left">{props.item.content} </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
