import React from "react";
import styles from "./Footer.module.css";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

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
