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
    <section className="container">
      <div className="about-content">
        <div className="about-title__text">
          <div className="about-buttons">
            <button className="about-button__know">Conheça a ABRE</button>
          </div>

          <h1 className="about-title">{sobreNos.title}</h1>

          <div className="about-text">
            {sobreNos.text.split("\n").map((paragraph, index) => (
              <p
                className="about-text__paragraph"
                key={index}
              >
                {stylizeWords(paragraph)}
              </p>
            ))}
          </div>
        </div>
        <iframe
          className="about-video"
          src={sobreNos.video}
          title="Escutem a Nossa Voz"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
