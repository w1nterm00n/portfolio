import Navbar from "./Navbar";
import StackedArrow from "../repetitive/StackedArrow";
import blackStar from "../../assets/star_black.svg";

function HeroSection () {
    return (
      <section className="HeroSection">
      <Navbar></Navbar>
        <div className="HeroSectionWrapper">

            {/* <div className="circle"></div> */}

            <div className="WelcomeBox">
                <div className="circle"></div>
                <h3>HELLO!</h3>
                <div className="smallStar">
                    <img src={blackStar} alt="black star"/>
                </div>
                <div className="biggerStar">
                    <img src={blackStar} alt="black star"/>
                </div>
                <div className="SpeechCard">
                    <p>I`m Daria, a frontend developer based in Belgrade. I’m passionate about bringing creative  ideas to life through beautifully crafted websites.  I specialize in building interactive and user-friendly web experiences that stand out. </p>
                </div>
            </div>

            <StackedArrow></StackedArrow>

            <button className="resumeBtn">
                <a href="#!">Download my CV as PDF</a>
            </button>

        </div>
      </section>
    );
  }

export default HeroSection;