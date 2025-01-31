import StarTitle from "../repetitive/StarTitle";
import TimelineItem from "../repetitive/TimelineItem";
import LineSeparator from "../repetitive/LineSeparator";

function AboutMeSection () {
    return (
        <div className="AboutMeSection">
            <StarTitle text="About me"></StarTitle>

            <div className="ContentWrapper">
                <div className="MySkillsWrapper">
                    <div className="circles">
                        <div className="dark_circle"></div>
                        <div className="light_circle"></div>
                    </div>
                    <div className="TextAboutSkills">
                        <h3>My Skills:</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS, SCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>

                <div className="MyEducationWrapper">
                    <div className="line"></div>
                    <div className="Timelines">
                        <TimelineItem year={2021} desc={"I graduated from high school"}></TimelineItem>
                        <TimelineItem year={2025} desc={"I got secondary professional education at Moscow Technological Institute with a degree in Information systems and programming"}></TimelineItem>
                    </div>
                </div>
            </div>

            <LineSeparator></LineSeparator>
        </div>
    );
  }

export default AboutMeSection;