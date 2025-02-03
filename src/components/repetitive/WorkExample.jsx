import triangle from "../../assets/transperent-triangle.svg";
import viewMoreArrow from "../../assets/viewMoreArrow.svg"
import { useState } from "react";

function WorkExample () {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="WorkExample">
            <div className="WorkExampleWrapper">

                <div className="logoWrapper">
                    <span className="corner top-left"></span>
                    <span className="corner top-right"></span>
                    <span className="corner bottom-left"></span>
                    <span className="corner bottom-right"></span>
                </div>

                <div className="nameOfWebsite">
                    <div className="stackedTriangles">
                        <div className="triangle filled"></div>
                        <img className="first" src={triangle} alt="triangle"/>
                        <img className="second" src={triangle} alt="triangle"/>
                    </div>

                    <h4>Name of website</h4>
                </div>

                <p className="desc">
                Description (blah blah blahblah blah blah blah blah blahblah blah blah blah blah blahblah blah blah blah blah blah)
                </p>

                <div className="viewMore" onClick={() => setIsExpanded(!isExpanded)}>
                    <a href="#!">View More</a>
                    <div className={`viewMoreArrows ${isExpanded ? "opened" : ""}`}>
                        <img className="first" src={viewMoreArrow} alt="viewMoreArrow" />
                        <img className="second" src={viewMoreArrow} alt="viewMoreArrow" />
                    </div>
                </div>

                {isExpanded && (
                    <div className="mobileScreen">
                    <p>мобильный скриншот сайта</p>
                    </div>
                )}
            </div>

            <div className="mobileScreenFlex">
                
            </div>
        </div>
    );
  }

export default WorkExample;