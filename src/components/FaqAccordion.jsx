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
        Cela dépend du programme, veuillez consulter les{" "}
        <a
          href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1D4ED8", textDecoration: "underline" }}
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
    <div id="faq" style={styles.container}>
      <h2 style={styles.title}>📚 Foire aux questions (FAQ)</h2>
      {faqData.map((item, index) => (
        <div key={index} style={styles.item}>
          <button
            onClick={() => toggleIndex(index)}
            style={{
              ...styles.question,
              color: openIndex === index ? "#1D4ED8" : "#111827"
            }}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span
              style={{
                ...styles.icon,
                transform: openIndex === index ? "rotate(90deg)" : "rotate(0)"
              }}
            >
              ▶
            </span>
          </button>
          {openIndex === index && <div style={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 800,
    margin: "2rem auto",
    padding: "1.5rem",
    fontFamily: "'Segoe UI', sans-serif",
    background: "#F9FAFB",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "bold",
    color: "#DC2626", // rouge Canada
    borderBottom: "3px solid #1D4ED8", // bleu Canada
    display: "inline-block",
    paddingBottom: "0.3rem"
  },
  item: {
    borderBottom: "1px solid #E5E7EB",
    padding: "0.8rem 0",
    transition: "background 0.3s ease"
  },
  question: {
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    padding: "0.5rem",
    fontSize: "1.05rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "color 0.3s ease"
  },
  icon: {
    transition: "transform 0.3s ease",
    color: "#1D4ED8",
    fontWeight: "bold"
  },
  answer: {
    padding: "0.7rem 1rem",
    fontSize: "0.95rem",
    color: "#374151",
    whiteSpace: "pre-line",
    lineHeight: "1.5",
    background: "#FFFFFF",
    borderRadius: "8px",
    marginTop: "0.5rem",
    boxShadow: "inset 0 1px 4px rgba(0,0,0,0.05)"
  }
};

export default FaqAccordion;
