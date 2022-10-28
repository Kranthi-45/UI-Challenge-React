import React from 'react'
import '../styles/Footer.css';

export const Footer = () => {
    return <>
        <footer className="footer-distributed">
            <div className="row">
                <div className="col-md-2">
                    <div className="footer-left">
                        <img  src="./assets/logo.svg" className="logo" alt="logo" />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="footer-right">
                        <img src="../../assets/instagram.svg"  alt="instalogo"/>
                        <img src="../../assets/facebook.svg"   alt="fblogo"/>
                        <img src="../../assets/twitter.svg"  alt="twitlogo" />
                    </div>
                </div>
            </div>
        </footer>
    </>
}
