import StarTitle from "../repetitive/StarTitle";
import WorkExample from "../repetitive/WorkExample";
import LineSeparator from "../repetitive/LineSeparator";

function MyWorksSection () {
    return (
        <div className="MyWorksWrapper">
            <div className="titleWrapper">
                <StarTitle text="My works"></StarTitle>
            </div>

            <div className="worksContainer">
                <WorkExample></WorkExample>
                <WorkExample></WorkExample>
                <WorkExample></WorkExample>
            </div>
            <LineSeparator></LineSeparator>
        </div>
    );
  }

export default MyWorksSection;