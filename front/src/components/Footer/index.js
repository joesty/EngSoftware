import React from "react";
import styles from "./Footer.module.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>UFMG vagas</span> &copy; 2022
      </p>
    </footer>
  );
}
