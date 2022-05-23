import { Link } from "react-router-dom";

import Conteiner from "./Conteiner";
import styles from "./Navbar.module.css";

import ufmg from "../../img/UFMG.png";

import { Button } from "@mui/material";

export default function Navbar(/*props*/) {
  return (
    <nav className={styles.navbar}>
      <Conteiner>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">
              <img className={styles.img} src={ufmg} alt="UFMG Vagas" />
            </Link>
          </li>
          <li className={styles.items} style={{ float: "right" }}>
            <Button variant="text" href="/">
              Vagas
            </Button>
            {/* <Link to="/">feed</Link> */}
          </li>
          <li className={styles.branco}>
            <Button variant="contained" href="/login">
              Login
            </Button>
            {/* <Link to="/login">Login</Link> */}
          </li>
          <li className={styles.branco}>
            <Button variant="contained" href="/cadastro">
              Cadastrar
            </Button>
          </li>
        </ul>
      </Conteiner>
    </nav>
  );
}
