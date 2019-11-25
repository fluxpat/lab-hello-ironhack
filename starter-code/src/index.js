import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

/* --------------------------------------------------------------- STYLING -------------------------------------------------------------- */

const ironhackLogo = "./images/ironhack-logo.svg";
const reactLogo = "./images/react-logo.svg";
const hamburgerIcon = "./images/menu-top.svg"
const declarativeIcon = "./images/icon1.png"
const componentsIcon = "./images/icon2.png"
const singleWayIcon = "./images/icon3.png"
const JSXIcon = "./images/icon4.png"
const bannerStyle = {
    color: 'white',
    backgroundColor: '#1F2535'
}

/* ---------------------------------------------------------------- HTML ---------------------------------------------------------------- */

const frontPage = (
    <div className='wholePage' style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className="introBanner" style={bannerStyle}>
            <div className="topNav">
                <img src={ironhackLogo} alt="ironhack logo" />
                <img src={hamburgerIcon} alt="hamburger" />
            </div>
            <img src={reactLogo} alt="reactLogo" class="reactLogo1" />
            <img src={reactLogo} alt="reactLogo" class="reactLogo2" />
            <img src={reactLogo} alt="reactLogo" class="reactLogo3" />
            {/* <img src={reactLogo} alt="reactLogo" class="reactLogo4" />
            <img src={reactLogo} alt="reactLogo" class="reactLogo5" /> */}
            <div className="bannerContent">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
                <button>Awesome!</button>
            </div>
        </div>
        <div className="componentCards">
            <div className="card">
                <img src={declarativeIcon} alt="declaractive icon" />
                <div className="cardText">
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
            </div>
            <div className="card">
                <img src={componentsIcon} alt="" />
                <div className="cardText">
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
            </div>
            <div className="card">
                <img src={singleWayIcon} alt="" />
                <div className="cardText">
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
            </div>
            <div className="card">
                <img src={JSXIcon} alt="" />
                <div className="cardText">
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    </div>
)

/* --------------------------------------------------------------- RENDER --------------------------------------------------------------- */

ReactDOM.render(frontPage, document.getElementById('root'))