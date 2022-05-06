import React from "react";
import { useHistory } from "react-router-dom";


function CadastroConfirmado(){
    
    const history = useHistory();

    function handleClick(){
        history.push("/home")
    }
    
    return(
        <div>
            <h3>Em Desenvolvimento ...</h3>

            <div>
                Bem vindo ao Match Vagas UFMG, seu cadastro foi efetuado com sucesso click no botão abaixo para ir para nosso feede de Vagas
            </div>
            
            <button type="button" onClick={handleClick}>
                Ir Para o Feed
            </button>
        </div>
    );

}

export default CadastroConfirmado