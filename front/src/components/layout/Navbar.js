import { Link, useHistory } from "react-router-dom";

import Conteiner from "./Conteiner";
import styles from "./Navbar.module.css";
import { useState } from "react";
import ufmg from "../../img/UFMG.png";

import { Button } from "@mui/material";

const empresa = true;

export default function Navbar(/*props*/) {

  const history = useHistory()
  const [logado, setLogado] = useState('')
  const handleClick = (event) =>{
    localStorage.setItem("login", false)
    console.log(localStorage.getItem("login"))  
    localStorage.setItem("login", false)
    console.log("depois")
    console.log(localStorage.getItem("login"))
    setLogado(localStorage.getItem("login"))
    history.push("/login")
  }

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
          </li>

          {empresa && (
            <li className={styles.items}>
              <Button variant="text" href="/cadastrar_vaga">
                Cadatrar Vagas
              </Button>
            </li>
          )}

          {logado && (
            <li className={styles.branco} onClick={handleClick}>
              <Button variant="contained">
                Logout
              </Button>
            </li>
          )}{!logado && (
            <>
              <li className={styles.branco}>
                <Button variant="contained" href="/login">
                  Login
                </Button>
              </li>
              <li className={styles.branco}>
                <Button variant="contained" href="/cadastro">
                  Cadastrar
                </Button>
              </li>
            </>
          )}
        </ul>
      </Conteiner>
    </nav>
  );
}
