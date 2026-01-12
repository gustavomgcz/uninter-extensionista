import "./ActionsSection.css";
import { FaBible, FaChurch, FaBookOpen } from "react-icons/fa";

function ActionsSection() {
  return (
    <section className="actions container">
      <h1 className="title">Programações</h1>
      <div className="actions-grid">
        <div className="actions-card">
          <div className="program-icon">
            <FaBible size={40} />
          </div>
          <h2 className="subtitle">Cultos</h2>
          <p className="actions-card-text">
            Terça-feira: 20:00 às 21:00
            <br />
            Domingo: 09:30 às 11:30
          </p>
          <p className="actions-card-text">
            Realizamos cultos às terças e domingos, um momento de comunhão,
            louvor e reflexão na Palavra de Deus, abertos a todos que desejam
            participar.
          </p>
        </div>
        <div className="actions-card">
          <div className="program-icon">
            <FaChurch size={40} />
          </div>
          <h2 className="subtitle">Escola Dominical</h2>
          <p className="actions-card-text">
            Segunda-feira: 16:00 às 17:00
            <br />
            Quinta-feira: 10:0 às 11:00
          </p>
          <p className="actions-card-text">
            A Escola Dominical acontece às segundas e quintas feiras, sendo um
            tempo de aprendizado e crescimento na Palavra de Deus, com classes
            voltadas para diferentes idades.
          </p>
        </div>
        <div className="actions-card">
          <div className="program-icon">
            <FaBookOpen size={40} />
          </div>
          <h2 className="subtitle">Estudo Bíblico</h2>
          <p className="actions-card-text">
            Quarta-feira: 16:00 às 17:00
            <br />
            Sexta-feira: 10:0 às 11:00
          </p>
          <p className="actions-card-text">
            O Estudo Bíblico é realizado às quartaas e sextas feiras,
            proporcionando um tempo de aprofundamento na Palavra de Deus,
            diálogo e crescimento na fé.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActionsSection;
