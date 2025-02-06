import triangle from "../../assets/transperent-triangle.svg";
import viewMoreArrow from "../../assets/viewMoreArrow.svg"
import { useState } from "react";

function WorkExample (props) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="WorkExample">
            <div className="WorkExampleWrapper">

                <div className="logoWrapper">
                    <span className="corner top-left"></span>
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>
                    <span className="corner bottom-right"></span>
                    <img src={props.logoImage} alt="logo of website" />
                </div>

                <div className="nameOfWebsite">
                    <div className="stackedTriangles">
                        <div className="triangle filled"></div>
                        <img className="first" src={triangle} alt="triangle"/>
                        <img className="second" src={triangle} alt="triangle"/>
                    </div>

                    <a href={props.linkToWebsite}>{props.nameOfWebsite}</a>
                </div>

                <p className="desc">
                    {props.websiteDescription}
                </p>

                <div className="viewMore" onClick={() => setIsExpanded(!isExpanded)}>
                    <a href="#!">View More</a>
                    <div className={`viewMoreArrows ${isExpanded ? "opened" : ""}`}>
                        <img className="first" src={viewMoreArrow} alt="viewMoreArrow" />
                        <img className="second" src={viewMoreArrow} alt="viewMoreArrow" />
                    </div>
                </div>

                {isExpanded && (
                    <div className="mobileScreen screenBorder mobileScreenDropDown">
                        <img src={props.mobileImage} alt="mobile screenshot" />
                    </div>
                )}
            </div>

            <div className="mobileScreen screenBorder mobileScreenFlex">
                <img src={props.mobileImage} alt="mobile screenshot" />
            </div>

            <div className="desktopScreen screenBorder">
                <img src={props.desktopImage} alt="desktopScreen screenshot" />
            </div>
        </div>
    );
  }

export default WorkExample;