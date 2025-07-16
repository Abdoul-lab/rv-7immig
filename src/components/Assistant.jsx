import { useState, useEffect, useRef } from "react";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour et bienvenue à Septimmigration🍁 ! 👋 Je suis Marie, votre conseillère virtuelle. Je suis là pour vous accompagner dans votre projet d'immigration au Canada." }
  ]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const questions = [
    { 
      key: "name", 
      text: "Pour mieux vous conseiller, j'aimerais d'abord apprendre à vous connaître. Quel est votre prénom et nom ?", 
      type: "text" 
    },
    {
      key: "status",
      text: "Enchanté(e) ! Maintenant, pouvez-vous me dire quelle est votre situation professionnelle actuelle ?",
      type: "select",
      options: ["Élève / étudiant(e)", "Employé(e)", "Travailleur indépendant", "Sans emploi", "Retraité(e)", "Autre"]
    },
    { 
      key: "email", 
      text: "Pour pouvoir vous recontacter et vous envoyer des informations utiles, quelle est votre adresse email ?", 
      type: "text" 
    },
    { 
      key: "phone", 
      text: "Merci ! Et votre numéro de téléphone ? (avec l'indicatif pays si vous n'êtes pas au Canada)", 
      type: "text" 
    },
    {
      key: "program",
      text: "Excellent ! Maintenant, parlons de vos objectifs. Quel type de programme d'immigration vous intéresse le plus ?",
      type: "select",
      options: ["Entrée express", "Programme des candidats des provinces (PCP)", "Permis d'études", "Regroupement familial", "Visa de travail temporaire", "Je ne sais pas encore", "Autre"]
    }
  ];

  const encouragingMessages = [
    "C'est une excellente information ! 😊",
    "Parfait, je note cela ! 📝",
    "Très bien, continuons ! 👍",
    "Merci pour cette précision ! 🙏",
    "Super, j'ai bien noté ! ✨"
  ];

  const sendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const getRandomEncouragement = () => {
    return encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;

    const currentKey = questions[step]?.key;
    if (currentKey) {
      setForm((prev) => ({ ...prev, [currentKey]: userInput }));
    }

    sendMessage("user", userInput);
    setUserInput("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      // Message d'encouragement
      if (step < questions.length - 1) {
        sendMessage("bot", getRandomEncouragement());
        
        setTimeout(() => {
          const nextStep = step + 1;
          setStep(nextStep);
          sendMessage("bot", questions[nextStep].text);
        }, 800);
      } else {
        setStep(questions.length);
        sendMessage("bot", "Merci beaucoup pour toutes ces informations ! 🎉");
        
        setTimeout(() => {
          sendMessage("bot", "J'ai préparé un formulaire personnalisé avec vos réponses. Un de nos conseillers experts pourra ainsi mieux vous accompagner dans votre projet d'immigration. Vous pouvez le consulter ci-dessous ! 📋✨");
        }, 1500);
      }
    }, 1000 + Math.random() * 500); // Délai variable pour plus de naturel
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      setTimeout(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, isLoading]);

  useEffect(() => {
  if (messages.length === 1 && step === 0) {
    setTimeout(() => {
      sendMessage("bot", questions[0].text);
    }, 10000); // Délai après le message de bienvenue
  }
}, [messages, step]);

  const googleFormURL =
    `https://docs.google.com/forms/d/e/1FAIpQLSft6cT6hHWkXV-THzxZIAkoyOrlqneL2k5tV78dt3yybwiMJA/viewform?usp=pp_url` +
    `&entry.583938010=${encodeURIComponent(form.name || "")}` +
    `&entry.403275790=${encodeURIComponent(form.status || "")}` +
    `&entry.1000627390=${encodeURIComponent(form.email || "")}` +
    `&entry.1338088088=${encodeURIComponent(form.phone || "")}` +
    `&entry.213167345=${encodeURIComponent(form.program || "")}`;

  const renderInput = () => {
    if (step >= questions.length) return null;
    const currentQuestion = questions[step];
    if (!currentQuestion) return null;

    const commonButton = (
      <button
        type="submit"
        style={styles.button}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0e9e6e")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10B981")}
      >
        Envoyer
      </button>
    );

    if (currentQuestion.type === "select") {
      return (
        <form onSubmit={handleUserSubmit} style={{ ...styles.form, flexDirection: "column", gap: "10px" }}>
          <select
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={styles.select}
            required
            autoFocus
          >
            <option value="" disabled>-- Choisissez une option --</option>
            {currentQuestion.options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>
          {commonButton}
        </form>
      );
    }

    return (
      <form onSubmit={handleUserSubmit} style={styles.form}>
        <input
          type={currentQuestion.key === "email" ? "email" : "text"}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={currentQuestion.key === "email" ? "exemple@email.com" : "Votre réponse..."}
          style={styles.input}
          autoFocus
          required
        />
        {commonButton}
      </form>
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((open) => !open)}
        style={styles.chatButton}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        title={isOpen ? "Fermer le chat" : "Discuter avec Marie"}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div style={styles.container} role="dialog" aria-modal="true" aria-labelledby="chat-header">
          <h3 id="chat-header" style={styles.header}>
            👩‍💼 Marie - Conseillère Immigration
          </h3>

          <div style={styles.chatBox} ref={chatBoxRef} tabIndex={-1}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#F1F1F1",
                  borderRadius: msg.sender === "user" ? "18px 18px 5px 18px" : "18px 18px 18px 5px",
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={styles.loader}>
                <div style={styles.typingIndicator}>
                  <span style={styles.typingText}>Marie écrit</span>
                  <div style={styles.typingDots}>
                    <span style={styles.dot}></span>
                    <span style={styles.dot}></span>
                    <span style={styles.dot}></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!isLoading && renderInput()}

          {step === questions.length && (
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <a
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.formLink}
              >
                📋 Voir mon formulaire de prise de contact
              </a>
              <p style={styles.footerText}>
                Un conseiller vous contactera sous 24h ! 🕐
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const styles = {
  chatButton: {
    position: "fixed",
    bottom: 40,
    right: 5,
    zIndex: 1100,
    backgroundColor: "#10B981",
    border: "none",
    borderRadius: "50%",
    width: 56,
    height: 56,
    color: "white",
    fontSize: 28,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(16,185,129,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    animation: "pulse 2s infinite ease-in-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 380,
    maxHeight: 600,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
    border: "1px solid #e5e7eb",
  },
  header: {
    margin: 0,
    padding: "16px 20px",
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxHeight: "300px",
    backgroundColor: "#f9fafb",
  },
  message: {
    padding: "12px 16px",
    maxWidth: "85%",
    wordBreak: "break-word",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    animation: "slideIn 0.3s ease-out",
  },
  form: {
    display: "flex",
    padding: "16px",
    gap: "12px",
    borderTop: "1px solid #e5e7eb",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  select: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    backgroundColor: "white",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#10B981",
    color: "white",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(16,185,129,0.3)",
  },
  formLink: {
    display: "inline-block",
    backgroundColor: "#10B981",
    color: "white",
    padding: "12px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(16,185,129,0.3)",
  },
  footerText: {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginTop: "8px",
    marginBottom: 0,
  },
  loader: {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    alignSelf: "flex-start",
  },
  typingIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#F1F1F1",
    padding: "12px 16px",
    borderRadius: "18px 18px 18px 5px",
    fontSize: "0.9rem",
    color: "#6b7280",
  },
  typingText: {
    fontStyle: "italic",
  },
  typingDots: {
    display: "flex",
    gap: "3px",
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#10B981",
    borderRadius: "50%",
    animation: "bounce 1.4s infinite both",
  },
};

// Ajout des animations CSS via une balise style
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
  
  .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot:nth-child(2) { animation-delay: -0.16s; }
  .dot:nth-child(3) { animation-delay: 0s; }
`;
document.head.appendChild(styleSheet);

export default AssistantChat;