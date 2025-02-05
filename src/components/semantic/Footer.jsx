import heart from "../../assets/heart.svg"

function Footer () {
    return (
        <div className="footerWrapper">
            <div className="footerTriangles">
                <div className="light-triangle"></div>
                <div className="dark-triangles">
                    <div className="border-triangle-smaller"></div>
                    <div className="border-triangle-bigger"></div>
                </div>
            </div>
            <footer>
                <div className="footerContent">
                    <div className="codedWithLove">
                        <p>Coded with</p>
                        <img src={heart} alt="heart" />
                    </div>

                    <div className="info">
                        <div className="year">2025</div>
                        <div className="githubLink">
                            <a href="https://github.com/w1nterm00n/">w1nterm00n</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
  }

export default Footer;