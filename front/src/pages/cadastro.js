import * as React from "react";
import { useHistory } from "react-router-dom";


function Cadastro () {
    const history = useHistory();

    function alunoClick(){
        history.push("/cadastrar_aluno")
    }

    function empresaClick(){
        history.push("/cadastrar_empresa")
    }

    return(
        <div>
            <h3>Em desenvolvimento</h3>
            <button type="button" onClick={alunoClick}>
                Cadastrar como aluno
            </button>
            <button type="button" onClick={empresaClick}>
                Cadastrar como empresa
            </button>
        </div>

        
    );
}
export default Cadastro
