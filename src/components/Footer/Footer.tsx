import { Typography } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">SEANPHAI</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Design and dev by seanphai
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
