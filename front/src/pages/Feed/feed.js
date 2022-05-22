import React from "react";
import Feed from "../../components/Feed";
import Footer from "../../components/Footer";

const arrayVagas = [
  {
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Engenheiro de Software",
    empresa: "Google",
    localizacao: "Belo Horizonte - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    cargo: "Desenvolvedor de Software",
    empresa: "Totvs",
    localizacao: "Ipatinga - MG",
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
    cargo: "Comercial",
    empresa: "Coca-cola",
    localizacao: "Contagem - MG",
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
    return (
      <>
        <Feed vagas={arrayVagas} />
        <Footer />
      </>
    );
  }