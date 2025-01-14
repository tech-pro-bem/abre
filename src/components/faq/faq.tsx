import { getContentByContentType } from "@/lib/contentful";
import { FAQ } from "@/types/contentful.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Arrow_icon from "./arrow_icon";
import styles from "./styles.module.css";
import Vector from "./vector";

export const perguntas = [
  {
    title: "O que é esquizofrenia?",
    text: `A esquizofrenia é um transtorno mental que afeta como a pessoa percebe e se relaciona com a realidade. Os sintomas costumam aparecer entre 15 e 25 anos, mas podem surgir em outros momentos da vida. 
    O transtorno pode comprometer as funções cognitivas e motoras de uma pessoa. Além disso, a esquizofrenia pode afetar também as relações, o trabalho e o bem-estar pessoal.`,
  },
  {
    title: "O que causa a esquizofrenia?",
    text: `Ainda não há uma certeza sobre o que causa a esquizofrenia. A genética tem um papel importante, mas há outros fatores além dela. Complicações na gravidez ou o uso de algumas drogas podem contribuir para uma pessoa desenvolver a doença.`,
  },
  {
    title: "Como uma pessoa vive com o transtorno?",
    text: `A esquizofrenia afeta em torno de 1% da população mundial. O transtorno é uma condição crônica, mas muitas pessoas conseguem ter uma vida plena e ativa. 
    Isso porque elas controlam os sintomas com:
    · medicação
    · apoio psicossocial`,
  },
  {
    title: "Como o transtorno se manifesta?",
    text: `Os principais sintomas da doença são:
    · Delírios
    · Alucinações
    · Pensamentos confusos
    · Déficit de memória
    · Dificuldade em processar informações
    · Dificuldade em resolver problemas
    Além disso, a pessoa pode:
    · Se isolar
    · Perder o interesse por atividades
    · Ter dificuldade de expressar emoções.
    Vale destacar: cada pessoa manifesta o transtorno de um jeito diferente. Por isso, o diagnóstico deve ser feito por um psiquiatra.`,
  },
  {
    title: "Como a pessoa pode reagir aos perceber os sintomas?",
    text: `Os sintomas podem gerar medo e confusão em uma pessoa. Muitas vezes, ela se isola e não busca ajuda de imediato, podendo afetar a capacidade de tomar decisões. Por isso, o apoio de amigos e familiares é essencial para o tratamento.`,
  },

  {
    title: "Como o transtorno é diagnosticado?",
    text: `O diagnóstico de esquizofrenia é feito por um psiquiatra. O profissional médico vai avaliar a pessoa a partir dos sintomas, do histórico e de conversa com familiares.
    Apesar da comunidade científica pesquisar exames de imagem e neurofuncionais para ajudar no diagnóstico, ele é feito considerando os sintomas e baseado em critérios da Classificação Internacional de Doenças (CID-10).`,
  },
  {
    title: "E o tratamento?",
    text: `O tratamento combina medicação e apoio psicossocial, mas sempre baseado no diagnóstico da pessoa. A medicação ajuda a controlar os sintomas. 
    Já os profissionais que vão acompanhar o tratamento são psiquiatras, psicólogos e terapeutas ocupacionais. Fazer o tratamento é importante para evitar recaídas. Quando uma pessoa faz o tratamento, ela consegue ter uma melhora moderada ou significativa dos sintomas.`,
  },
  {
    title: "O que é o apoio psicossocial?",
    text: `O apoio psicossocial são medidas que complementam a medicação, como psicoterapia e terapia ocupacional. Essas medidas ajudam a pessoa a desenvolver habilidades para viver de forma mais independente. Esse apoio é adaptado às necessidades de cada pessoa.`,
  },
  {
    title: "Qual a importância da participação da família e dos amigos?",
    text: `A família e os amigos ajudam a identificar mudanças de comportamento e a incentivar o tratamento. Eles também criam um ambiente acolhedor e podem se engajar em grupos de apoio.`,
  },
  {
    title: "Como é a evolução da esquizofrenia?",
    text: `A evolução do transtorno varia em cada pessoa. Com tratamento, é possível ter uma melhora na qualidade de vida. Já algumas pessoas podem enfrentar limitações mesmo com apoio de medicação e de pessoas da área da saúde. 
    Por isso, o suporte contínuo é importante para a qualidade de vida da pessoa com esquizofrenia.`,
  },
  {
    title: "A pessoa com esquizofrenia é violenta?",
    text: `Não. A esquizofrenia não aumenta a propensão à violência. O risco é maior para autoagressão ou suicídio durante crises. O estigma associando esquizofrenia à violência é um mito e deve ser combatido.`,
  },
  {
    title:
      "Como transferir a aposentadoria para um parente com esquizofrenia quando o cuidador falecer?",
    text: `Para transferir a aposentadoria após a morte do cuidador (pai, mãe, irmão, etc), é necessário comprovar que a pessoa com esquizofrenia dependia financeiramente do cuidador. Essa comprovação é feita com documentos específicos.
    Você pode usar a declaração de dependência econômica feita no Imposto de Renda ou uma escritura pública declaratória de dependência. Além disso, é preciso apresentar pelo menos três documentos que comprovem essa dependência.
    Os documentos podem incluir prova de domicílio comum, contas bancárias conjuntas ou procurações mútua. Outros documentos legais, como registros de empregados ou anotações em associações, também são aceitos.
    Se precisar, procure um tabelião para emitir a escritura pública de dependência econômica. Ela é importante para formalizar a relação de dependência, facilitando a transferência da aposentadoria.
    Na nossa página Materiais, você encontra uma declaração de dependência econômica.`,
  },
];

export const Faq = async () => {
  const data = await getContentByContentType<FAQ>({
    contentType: "mockFaq",
    limit: 20,
    skip: 2,
    order: "sys.createdAt",
  });
  const questions = data?.items || [];

  return (
    <section className={styles.questions_section}>
      <div className={styles.vectors}>
        <Vector className={styles.vector_top} />
        <Vector className={styles.vector_bottom} />
      </div>
      <div className={styles.questions_content}>
        <h2 className={styles.questions_title}>Perguntas sobre esquizofrenia</h2>
        <div className={styles.faq_list}>
          {questions.map((question, index) => (
            <details
              key={index}
              className={styles.faq_item}
              name="reqs"
            >
              <summary className={styles.faq_summary}>
                <div className={styles.faq_title}>{question.fields.title}</div>
                <Arrow_icon className={styles.arrow_icon} />
              </summary>
              <div className={styles.faq_text}>
                {documentToReactComponents(question.fields.text)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
