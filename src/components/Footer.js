import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  // useContext --------------------------------
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      <div>
        <div className="footer-s">
          <div>
            <h3>Food Plaza</h3>
            <p>© 2024 Amit</p>
            <p>Pvt. Ltd</p>
          </div>
          <div className="social">
            <h3>Social Links</h3>
            <div>
              <i></i>
              <p>
                <a
                  href="https://www.linkedin.com/in/amit-gangwar-a63174250/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <i></i>
              <p>
                <a href="https://github.com/Xerox563" target="_blank">
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <i></i>
              <p>
                <a
                  href="https://www.instagram.com/_just._jack_/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-s2">
          <h3>Company</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Help</p>
          <p>Contact Us</p>
          <p>About</p>
          <p>Careers</p>
        </div>
      </div>
      <div>
        <h4>Created By ❤️ Amit Gangwar</h4>
        <h4>Email - gangwaramit449@gmail.com</h4>
      </div>
    </div>
  );
};
export default Footer;
