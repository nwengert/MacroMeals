import React from 'react';
import BodBuds from './images/bodBudsNoB.png';
import veggieWelcome from './images/veggieWelcome.png';

function Header() {
    return (
        <div id="headerDiv">
            <div id="welcomeDiv">
                <div id="titleDiv">
                    <img src={veggieWelcome} id="welcomeImg" alt="Welcome"/>
                </div>
                <p id="macrosMealCreator">Macros Meal Creator </p>
                <div id="byBodBudsDiv">by <img src={BodBuds} id="bodyBuddiesImg" alt="bodyBuddies"/></div>
                <hr/>
                {/* <HeaderNav /> */}
            </div>
        </div>
    )
}
export default Header
