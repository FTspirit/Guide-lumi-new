import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { Container } from "react-bootstrap";
import "./Footer.scss";
function Footer() {
  return (
    <Container fluid className="bg-color footer-container">
      <div className="footer">
        <div className="footerPara">
          {`© 2022 Lumi Việt Nam - Đỗ Đức Dục, Nam Từ Liêm, Hà Nội, Hotline: 0335.44.55.99`}
        </div>
        <div className="footerIcons">
          <a href="https://www.facebook.com/groups/aiotvietnam">
            <BsFacebook className="footerIcon footerIconFacebook" />
          </a>
          <a href="https://www.youtube.com/channel/UCVzLL8E2ZjR3483h8S2_OtA">
            <BsYoutube className="footerIcon footerIconYoutube" />
          </a>
        </div>
      </div>
    </Container>
  );
}
export default Footer;
