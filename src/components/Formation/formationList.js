import { v4 as uuidv4 } from "uuid";
import js from "../../assets/formations/js.svg";
import react from "../../assets/formations/react.svg";

export const formationList = [
  {
    id: uuidv4(),
    year: "2022-2024",
    courseTech: "./imgs/formation/M_vermelho.png",
    courseName: "Análise e Desenvolvimento de Sistemas",
    duration: "5 semestres",
    companyName: "Mackenzie",
    description: `

    Tecnólogo em Análise e desenvolvimento de Sistemas. Formação para analisar, projetar, documentar, especificar, testar, implantar e manter sistemas computacionais de informação. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com qualidade, usabilidade, robustez, integridade e segurança de programas.`,
  },
  {
    id: uuidv4(),
    year: "2023",
    courseTech: js,
    courseName: "The Complete Javascript Course",
    duration: "68.5 horas",
    companyName: "Curso Udemy",
    description:
      "Curso completo de javascript, aprendizagem simples, passo a passo. Exemplos de código práticos, teoria, informações de como o javascript funciona internamente, e projetos completos. ",
    teacherProfileImg:
      "https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg",
    teacher: "Jonas Schmedtmann",
    github: "https://github.com/jonasschmedtmann",
    linkedIn: "",
    site: "https://codingheroes.io",
  },
  {
    id: uuidv4(),
    year: "2023 - 2024",
    courseTech: react,
    courseName: "The Ultimate React course",
    duration: "67 horas",
    companyName: "Udemy",
    description: `Uma abordagem prática para dominar o React, criando aplicativos sofisticados, apoiados por diagramas, teoria e análises dos bastidores do React.
    O pacote completo que leva você do zero à verdadeira compreensão do React e à construção de aplicativos da web modernos, poderosos e profissionais.
    Projetos reais. Explicações reais. Reagir de verdade.`,
    teacherProfileImg:
      "https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg",
    teacher: "Jonas Schmedtmann",
    github: "https://github.com/jonasschmedtmann",
    linkedIn: "",
    site: "https://codingheroes.io",
  },
];
