import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Match Vagas UFMG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div className="tudoFooter">
        <div>
          <AppBar position="static">
            <Toolbar
              className="maeFooter"
              style={{ backgroundColor: "#FFF", height: "4.5rem" }}
            >
              <img className="UFMG" src="../../img/UFMG.png" alt="UFMG" />
              <div className="iconsFooter">
                <div className="iconsFooter1">
                  <a
                    className="insta"
                    href="https://www.instagram.com/cpe.jr"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <InstagramIcon className="footersIcons2" />
                  </a>
                </div>
                <div className="iconsFooter2">
                  <a
                    className="face"
                    href="https://www.facebook.com/cpejr"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FacebookIcon className="footersIcons" />
                  </a>
                </div>
                <div className="iconsFooter2">
                  <a
                    className="wpp"
                    href="https://api.whatsapp.com/send?phone=5531988265561&text=Olá,%20meu%20amigo!"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsAppIcon className="footersIcons" />
                  </a>
                </div>
                <div className="iconsFooter2">
                  <a
                    className="emailFooter"
                    href="mailto:tainanalbuquerque@cpejr.com.br?subject=Contato&body=Olá"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <TelegramIcon className="footersIcons" />
                  </a>
                </div>
              </div>
              <Copyright sx={{ mt: 5 }} />
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

export default Footer;
