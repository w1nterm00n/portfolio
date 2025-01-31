import grey_star from '../../assets/grey_star.svg'

function StarTitle ({ text }) {
    return (
        <div className="StarTitleWrapper">
            <div className="StarTitle">
                <div className="decoration">
                    <div className="ellipse"></div>
                    <div className="star">
                        <img src={grey_star} alt="grey_star" />
                    </div>
                </div>
                <h2>{text}</h2>
            </div>
        </div>
    );
  }

export default StarTitle;