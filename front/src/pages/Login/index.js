import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {
    return(
        <div className="main">
            <div className="sub-sub-main">
                <h1>Bem-vindo!</h1>
                O local onde as melhores organizações e os melhores profissionais se encontram.
                <div className="login">
                    <div>
                        <div>
                            <h1>Faça seu login</h1> 
                        </div>
                        <div>
                            <input type="text" placeholder="E-mail de acesso" className="name"/>
                        </div>
                        <div className="Senha">
                            <div>
                                <input type="text" placeholder="Senha" className="name"/>
                            </div>
                        </div>
                        <div>
                            <p className="link">
                                <a href="/password_recovery">Esqueceu a Senha?</a>
                            </p>
                        </div>
                        <Link to="/home_page">
                            <button onClick={{}}>
                                Entrar
                            </button>
                        </Link>
                        <div>
                            <p className="link_cadastro">
                                Ainda não tem conta? <a href="/user_cadaster">Cadastre-se</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login