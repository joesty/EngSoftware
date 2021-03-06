import React, { useState, useEffect } from "react";
import Feed from "../../components/Feed";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

var arrayVagass = [
  {
    title: "Engenheiro de Software",
    name: "Google",
    city_state: "Belo Horizonte - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "150,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
  {
    title: "Desenvolvedor de Software",
    name: "Totvs",
    city_state: "Ipatinga - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "3000,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
  {
    title: "Comercial",
    name: "Coca-cola",
    city_state: "Contagem - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "150,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
  {
    title: "Engenheiro de Software",
    name: "Google",
    city_state: "Belo Horizonte - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "150,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
  {
    title: "Desenvolvedor de Software",
    name: "Totvs",
    city_state: "Ipatinga - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "150,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
  {
    title: "Comercial",
    name: "Coca-cola",
    city_state: "Contagem - MG",
    email: "teste@gmail.com",
    descricao:
      "Estamos procurando um Engenheiro de Software com interesse especial em projetar, desenvolver e instalar soluções de software. As responsabilidades do Engenheiro de Software incluem reunir requisitos do usuário, definir funcionalidade de sistemas e escrever códigos em várias linguagens, como Java, Ruby on Rails, ou linguagens de programação .NET (por exemplo, C++ ou JScript.NET.) O candidato ideal deve ter familiaridade com o ciclo de vida de desenvolvimento de softwares (SDLC), desde a análise preliminar do sistema até as fases de teste e implantação. Basicamente, a função do Engenheiro de Software é desenvolver softwares de alta qualidade, inovadores e completamente funcionais em conformidade com os padrões de codificação e projeto técnico.",
    beneficios: {
      valeRefeicao: "150,00",
      salario: "150,00",
      planoSaude: "150,00",
      valeTransporte: "150,00",
      incentivoEstudo: "150,00",
      auxilioHomeOffice: "150,00",
    },
  },
];

export default function FeedVagas() {
  const history = useHistory();
  const [arrayVagas, setArrayVagas] = useState([""]);
  const handleClick = () => {
    history.push("/cadastrar_vaga");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/jobs/");
      console.log(response.data);
      setArrayVagas(response.data);
    }
    fetchData();
  }, []);

  return <Feed vagas={arrayVagas} />;
}
