import PageTitle from "components/PageTitle";
import Action from "components/Action";
import { useEffect } from "react";
import Xmas from "../../assets/img/xmas.jpg";
import Meeting from "../../assets/img/encontro-com-deus.jpg";
import Messages from "../../assets/img/messages.jpg";

function Actions() {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageTitle title="Ações" />
      <main>
        <div className="container">
          <Action
            title="Natal Solidário - Semeado Esperança"
            imgSrc={Xmas}
            imgAlt="Foto de presentes embrulhados em um plastico prata e uma arvore de natal ao fundo"
          >
            <p className="actions-text">
              Em dezembro vivemos a 4ª edição do nosso Natal Solidário - Semeado
              Esperança.
            </p>
            <p className="actions-text">
              Mais uma vez vimos de perto como a graça de Deus transforma vidas.
              Foi Ele quem nos fortaleceu, quem nos uniu e quem nos chamou para
              servir. Por isso, entramos com o coração cheio da verdade de
              Gálatas 6:9: “E não nos cansemos de fazer o bem, pois no tempo
              certo colheremos, se não desanimarmos.”
            </p>
            <p className="actions-text">
              E assim seguimos, semeando esperança. Com amor, cuidado, alegria,
              presentes, brincadeiras e palavra de Deus ao coração das crianças.
              E não por nós mesmos, mas porque o Senhor nos capacitou e abriu
              cada porta para que esse dia acontecesse.
            </p>
            <p className="actions-text">
              Que essa semente de esperança cresça nas crianças e também em cada
              voluntário que, pela graça de Deus, fez parte dessa missão tão
              especial. Toda glória seja dada ao Senhor, que nos capacitou a
              viver mais um ano servindo em Seu nome.
            </p>
          </Action>
          <Action
            title="Encontro com Deus"
            imgSrc={Meeting}
            imgAlt="Foto de um homem e uma mulher de olhos fechados com as mãos abertas com as palmas viradas para cima"
            invert="invert"
          >
            <p className="actions-text">
              O Encontro com Deus é um momento especial de pausa e intimidade
              com o Senhor, preparado para todos que desejam se aproximar mais
              Dele. Em meio à rotina e aos desafios do dia a dia, somos
              convidados a separar um tempo para silenciar o coração, ouvir a
              voz de Deus e fortalecer nossa fé.
            </p>
            <p className="actions-text">
              Durante o encontro, vivenciamos momentos de louvor, reflexão na
              Palavra e oração, criando um ambiente propício para falar com Deus
              de forma sincera e ouvir aquilo que Ele deseja ministrar aos
              nossos corações. É um tempo de renovação espiritual, cura, consolo
              e direcionamento.
            </p>
            <p className="actions-text">
              O Encontro com Deus acontece toda última quinta-feira do mês, a
              partir das 19h, e é aberto a todos que desejam viver essa
              experiência de comunhão e entrega. Venha participar conosco desse
              tempo precioso na presença de Deus.
            </p>
          </Action>
          <Action
            title="Série de Mensagens"
            imgSrc={Messages}
            imgAlt="Imagem referente a riscos e compliance"
          >
            <p className="actions-text">
              A Série de Mensagens é um convite à reflexão e ao reencontro com o
              propósito de Deus para nossas vidas. Por meio de conteúdos
              compartilhados em nossas redes sociais, buscamos alcançar aqueles
              que já reconheceram que, em algum momento, se sentiram perdidos ou
              fora de rota, oferecendo direção, esperança e encorajamento à luz
              da Palavra de Deus.
            </p>
            <p className="actions-text">
              Cada mensagem é preparada com cuidado para ajudar na reconstrução
              da fé, no realinhamento do coração e na redescoberta do caminho
              que conduz à presença de Deus. São palavras simples, porém
              profundas, que falam sobre graça, arrependimento, amor e
              transformação, lembrando que sempre é tempo de voltar.
            </p>
            <p className="actions-text">
              Além das postagens ao longo da semana, essa Série de Mensagens
              também é aprofundada em nossos encontros aos domingos, onde,
              juntos, refletimos, aprendemos e caminhamos como comunidade. É uma
              oportunidade de crescer espiritualmente e seguir adiante, agora no
              rumo certo, guiados por Deus.
            </p>
          </Action>
        </div>
      </main>
    </>
  );
}

export default Actions;
