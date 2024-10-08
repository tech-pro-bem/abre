"use client";
import "./style.css";
import "../styles/theme.css";
interface SobreNos {
  title: string;
  text: string;
  video: string;
}
const sobreNos: SobreNos = {
  title: "Conheça a ABRE",
  text: `Somos a ABRE e nossa missão é acolher pessoas com esquizofrenia e de seus familiares. 
  Em nossos projetos, conseguimos trazer as forças e potencialidades de cada pessoa, promovendo o bem-estar na comunidade.
  Acreditamos que as pessoas são mais que um diagnóstico. Por isso, compartilhamos conhecimento sempre com ética e transparência.
  Nossa ONG é formada por pessoas que lutam para garantir os direitos, reduzir o estigma e promover diálogos sobre a doença.
  Faça com a gente a diferença. Abra sua mente. Abra suas portas.`,
  video: "https://www.youtube.com/embed/Nn9Z-LsPK70",
};
const wordsInBold = [
  "ABRE",
  "acolher",
  "promovendo o bem-estar",
  "ética e transparência",
  "pessoas que lutam",
];
const stylizeWords = (text: string) => {
  const regex = new RegExp(`(${wordsInBold.join("|")})`, "gi");
  return text
    .split(regex)
    .map((words, index) =>
      wordsInBold.includes(words) ? <span key={index}>{words}</span> : words
    );
};

export const About = () => {
  return (
    <div className="container__about">
      <div className="container__about__buttons">
        <button className="container__about__button">Conheça a ABRE</button>
      </div>
      <div className="container__about__title__text__video">
        <div className="container__about__title__text">
          <h1 className="container__about__title">{sobreNos.title}</h1>

          <div className="container__about__text">
            {sobreNos.text.split("\n").map((paragraph, index) => (
              <p
                className="container__about__text__paragraph"
                key={index}
              >
                {stylizeWords(paragraph)}
              </p>
            ))}
          </div>
        </div>
        <iframe
          className="container__about__video"
          src={sobreNos.video}
          title="Escutem a Nossa Voz"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
