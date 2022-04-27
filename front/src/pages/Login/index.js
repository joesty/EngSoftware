import React from 'react'
import './login.css'

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
                                <a href="#">Esqueceu a Senha?</a>
                            </p>
                        </div>
                        <button>Entrar</button>
                        <div>
                            <p className="link_cadastro">
                                Ainda não tem conta? <a href="#">Cadastre-se</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login