import Navbar from "./Navbar";
import StackedArrow from "../repetitive/StackedArrow";
import blackStar from "../../assets/star_black.svg";

function HeroSection () {
    return (
      <section className="HeroSection">
      <Navbar></Navbar>
        <div className="HeroSectionWrapper">
            <div className="WelcomeBox">
                <div className="circle"></div>
                <h3>HELLO!</h3>
                <div className="SpeechCard">
                    <div className="smallStar">
                        <img src={blackStar} alt="black star"/>
                    </div>
                    <div className="biggerStar">
                        <img src={blackStar} alt="black star"/>
                    </div>
                    <p>I`m Daria, a frontend developer based in Belgrade. I`m passionate about bringing creative  ideas to life through beautifully crafted websites.  I specialize in building interactive and user-friendly web experiences that stand out. </p>
                </div>
            </div>

            <div className="resumeArea">
                <StackedArrow></StackedArrow>

                <button className="resumeBtn">
                    <a href="#!">Download my CV as PDF</a>
                </button>
            </div>
        </div>
      </section>
    );
  }

export default HeroSection;