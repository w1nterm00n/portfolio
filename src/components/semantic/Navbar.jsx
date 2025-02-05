import { Link } from "react-scroll";

function Navbar () {
    return (
      <>
        <div className="navbarWrapper">
        <nav>
            <ul>
                <li><Link to="myWorks" smooth={true} duration={500}>My Works</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About me</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact me</Link></li>
            </ul>
        </nav>
        </div>
      </>
    );
  }

export default Navbar;