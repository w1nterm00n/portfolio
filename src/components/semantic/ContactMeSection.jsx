import StarTitle from "../repetitive/StarTitle";
import emailPic from "../../assets/email.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import telegram from "../../assets/telegram.svg";
import StackedArrow from "../repetitive/StackedArrow";
import { useState } from "react";

function ContactMeSection () {
    const [emailCopied, setEmailCopied] = useState(false);
    const email = "kordesovad@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000); // Через 2 сек скрываем "Скопировано!"
        });
    };

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
                        <div className="email-container" onClick={copyToClipboard}>
                            <img src={emailPic} alt="email pic" />
                            <p>{email}</p>
                            {emailCopied && <span className="copied-popup">Copied to clipboard!</span>}
                        </div>
                        <div className="socialMediaLinks">
                            <a href="https://t.me/w1nterm00n" className="socialMedia">
                                <img src={telegram} alt="telegram pic" />
                            </a>
                            <a href="https://www.linkedin.com/in/daria-kordesova-025222324/" className="socialMedia">
                                <img src={linkedin} alt="linkedin pic" />
                            </a>
                            <a href="https://github.com/w1nterm00n/" className="socialMedia">
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