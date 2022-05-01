import React from 'react'
import './login.css'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const history = useHistory();
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
                        <p>
                            <button onClick={() => history.push("/home_page")}>
                                Entrar
                            </button>
                        </p>
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