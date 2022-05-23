import { Link } from "react-router-dom";

import Conteiner from "./Conteiner";
import styles from "./Navbar.module.css";

import ufmg from "../../img/UFMG.png";

export default function Navbar(/*props*/) {
  return (
    <nav>
      <Conteiner>
        <Link to="/">
          <img src={ufmg} alt="UFMG Vagas" />
        </Link>
        <Link to="/login">Login</Link>
        <Link to="/password_recovery">EsqueceuASenha</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/">feed</Link>
      </Conteiner>
    </nav>
  );
}
