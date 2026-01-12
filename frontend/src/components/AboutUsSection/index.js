import "./AboutUsSection.css";
import Meeting from "../../assets/img/igreja-presbiteriana-vila-formosa-coracao.png";

function AboutUsSection() {
  return (
    <section className="about-us-home container">
      <h1 className="title">Quem Somos</h1>
      <div className="about-us-home-grid">
        <div>
          <p className="about-us-home-text">
            Somos a Igreja Presbiteriana Vila Formosa, uma comunidade evangelica
            localizada em Campinas, no bairro Vila Formosa, comprometida com o
            ensino da Palavra de Deus, a comunhão e o serviço ao próximo.
          </p>
          <p className="about-us-home-text">
            Nosso principal objetivo é glorificar a Deus, anunciar o evangelho
            de Cristo e acolher pessoas, promovendo fé, amor e cuidado em todas
            as fases da vida.
          </p>
          <p className="about-us-home-text">
            Como igreja, buscamos viver o evangelho de forma prática, servindo à
            comunidade com responsabilidade, amor e dedicação, fundamentados nos
            princípios bíblicos.
          </p>
        </div>
        <div className="about-us-home-image-container">
          <img
            className="about-us-home-image"
            src={Meeting}
            alt="Homem fazendo reunião online com quatro outras pessoas."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
