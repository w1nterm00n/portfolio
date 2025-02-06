import StarTitle from "../repetitive/StarTitle";
import WorkExample from "../repetitive/WorkExample";
import LineSeparator from "../repetitive/LineSeparator";
import { myWorks } from '../../../public/myWorks';

function MyWorksSection () {
    return (
        <div id="myWorks" className="MyWorksWrapper">
            <div className="titleWrapper">
                <StarTitle text="My works"></StarTitle>
            </div>

            <div className="worksContainer">

                {/* <WorkExample></WorkExample>
                <WorkExample></WorkExample>
                <WorkExample></WorkExample> */}

                {myWorks.map((item, index) => (
                    <WorkExample
                    key={index}
                    nameOfWebsite={item.nameOfWebsite}
                    linkToWebsite={item.linkToWebsite}
                    websiteDescription={item.websiteDescription}
                    logoImage={item.logoImage}
                    mobileImage={item.mobileImage}
                    desktopImage={item.desktopImage}
                    />
                ))}

            </div>
            <LineSeparator></LineSeparator>
        </div>
    );
  }

export default MyWorksSection;