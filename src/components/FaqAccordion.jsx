import { useState } from "react";

const faqData = [
  {
    question: "Qui est Marie, l’assistante virtuelle ?",
    answer: `Marie est notre conseillère virtuelle. 
Elle peut répondre à vos questions sur les démarches, les coûts au niveau du gouvernement et même vous aider à prendre rendez-vous pour un accompagnement personnalisé.`
  },
  {
    question: "Puis-je prendre rendez-vous avec un conseiller humain ?",
    answer: `Oui ! Dans le chat, cliquez sur l'onglet "📋 Prendre RDV". 
Marie vous posera quelques questions, puis vous recevrez un lien vers un formulaire personnalisé. Un conseiller vous recontactera sous 24h.`
  },
  {
    question: "Quels sont les services offerts ?",
    answer: `Nous proposons :
• Évaluation de votre profil
• Préparation de vos dossiers
• Accompagnement pour visas, permis et résidence
• Suivi personnalisé jusqu'à l’obtention du visa`
  },
  {
    question: "Quels types de visas sont disponibles ?",
    answer: `• Visa d'études 🎓
• Permis de travail 💼
• Entrée Express 🚀
• Programme des candidats des provinces (PCP) 🍁
• Regroupement familial 👨‍👩‍👧
• Résidence permanente 🏠`
  },
  {
  question: "Quels sont les délais d’immigration ?",
  answer: (
    <div>
      Cela dépend du programme, veuillez consulter les 
      <a
            href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            infos officielles
          </a>
    </div>
  )
},

  {
    question: "Combien ça coûte ?",
    answer: `Les frais varient selon le programme et ci-dessous vous avez une estimation des frais gouvernementaux qui sont susceptibles de varier, il faut également prévoir des frais de service par prestation de notre part:
• Entrée Express : 1,365$ CAD
• Permis d’études : 150$ CAD
• Tests de langue : 300-400$ CAD
• Examens médicaux : 200-400$ CAD`
  },
  {
    question: "Dois-je passer un test de langue ?",
    answer: `Oui, pour la plupart des programmes :
• Anglais : IELTS ou CELPIP
• Français : TEF Canada ou TCF Canada`
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: `Oui. Toutes les informations sont confidentielles et utilisées uniquement pour vous accompagner dans votre projet d’immigration.`
  },
  {
    question: "Puis-je immigrer au Québec ?",
    answer: `Oui, mais le Québec a un processus spécifique (PSTQ, CAQ, etc.). 
Marie peut vous lister la totalité des provinces et les programmes y afférents.`
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📚 Foire aux questions (FAQ)</h2>
      {faqData.map((item, index) => (
        <div key={index} style={styles.item}>
          <button
            onClick={() => toggleIndex(index)}
            style={styles.question}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span style={{ transform: openIndex === index ? "rotate(90deg)" : "rotate(0)", transition: "0.3s" }}>▶</span>
          </button>
          {openIndex === index && <div style={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 700,
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', sans-serif"
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#10B981"
  },
  item: {
    borderBottom: "1px solid #e5e7eb",
    padding: "0.8rem 0"
  },
  question: {
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#111827",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  answer: {
    padding: "0.5rem 1rem",
    fontSize: "0.95rem",
    color: "#4B5563",
    whiteSpace: "pre-line"
  }
};

export default FaqAccordion;
