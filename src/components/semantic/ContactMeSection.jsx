import StarTitle from "../repetitive/StarTitle";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import telegram from "../../assets/telegram.svg";
import StackedArrow from "../repetitive/StackedArrow";

function ContactMeSection () {
    return (
        <div id="contact" className="ContactMeSection">

            <div className="circle"></div>
            
            <div className="arrowSection">
                <StackedArrow></StackedArrow>
            </div>

            <div className="ContactCardArea">
                <div className="ContactCard">
                    <StarTitle text="Contact me"></StarTitle>
                    <p className="desc">I’m always open to exciting opportunities and collaborations. Let’s connect!</p>
                    <div className="socialMediaSection">
                        <div className="email">
                            <img src={email} alt="email pic" />
                            <p>kordesovad@gmail.com</p>
                        </div>
                        <div className="socialMediaLinks">
                            <a href="#!" className="socialMedia">
                                <img src={telegram} alt="telegram pic" />
                            </a>
                            <a href="#!" className="socialMedia">
                                <img src={linkedin} alt="linkedin pic" />
                            </a>
                            <a href="#!" className="socialMedia">
                                <img src={github} alt="github pic" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default ContactMeSection;