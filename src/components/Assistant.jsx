import { useState, useEffect, useRef } from "react";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Salut ! 👋 Je suis Marie, votre conseillère virtuelle en immigration. Je suis là pour vous accompagner dans votre projet d'immigration au Canada. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");
  const chatBoxRef = useRef(null);

  const questions = [
    { 
      key: "name", 
      text: "C'est parfait ! Pour mieux vous conseiller, j'aimerais d'abord apprendre à vous connaître. Quel est votre prénom et nom ?", 
      type: "text",
      validation: (value) => {
        if (value.trim().length < 2) return "Veuillez entrer un nom valide (au moins 2 caractères)";
        if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) return "Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets";
        return null;
      }
    },
    {
      key: "status",
      text: "Enchanté(e) ! Maintenant, pouvez-vous me dire quelle est votre situation professionnelle actuelle ?",
      type: "select",
      options: ["Élève / étudiant(e)", "Employé(e)", "Travailleur indépendant", "Sans emploi", "Retraité(e)", "Autre"]
    },
    { 
      key: "email", 
      text: "Parfait ! Pour pouvoir vous recontacter et vous envoyer des informations utiles, quelle est votre adresse email ?", 
      type: "text",
      validation: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Veuillez entrer une adresse email valide (exemple: nom@domaine.com)";
        return null;
      }
    },
    { 
      key: "phone", 
      text: "Merci ! Et votre numéro de téléphone ? (avec l'indicatif pays si vous n'êtes pas au Canada)", 
      type: "text",
      validation: (value) => {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,20}$/;
        if (!phoneRegex.test(value)) return "Veuillez entrer un numéro de téléphone valide (8-20 chiffres, +, espaces, - et () autorisés)";
        return null;
      }
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
    "Super, j'ai bien noté ! ✨",
    "Excellent choix ! 🌟",
    "Parfaitement compris ! 💡",
    "Merci beaucoup ! 🤗"
  ];

  const errorMessages = [
    "Oups ! Il semble y avoir un petit problème avec votre réponse. 😅",
    "Hmm, je n'arrive pas à traiter cette information correctement. 🤔",
    "Désolée, mais cette réponse ne semble pas valide. 😊",
    "Oh là là ! Pouvez-vous vérifier votre saisie ? 🙈"
  ];

  const sendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const getRandomEncouragement = () => {
    return encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
  };

  const getRandomErrorMessage = () => {
    return errorMessages[Math.floor(Math.random() * errorMessages.length)];
  };

  const validateInput = (value, question) => {
    if (!value || value.trim() === "") {
      return "Cette information est requise pour continuer. 📝";
    }

    if (question.validation) {
      return question.validation(value.trim());
    }

    return null;
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;

    const currentQuestion = questions[step];
    const validationResult = validateInput(userInput, currentQuestion);

    if (validationResult) {
      setValidationError(validationResult);
      
      // Afficher un message d'erreur sympathique
      setTimeout(() => {
        sendMessage("bot", `${getRandomErrorMessage()} ${validationResult}`);
      }, 300);
      
      // Effacer l'erreur après 5 secondes
      setTimeout(() => {
        setValidationError("");
      }, 5000);
      
      return;
    }

    // Réinitialiser l'erreur si la validation passe
    setValidationError("");

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
    }, 1000 + Math.random() * 500);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      setTimeout(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, isLoading]);

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
        Envoyer 💬
      </button>
    );

    if (currentQuestion.type === "select") {
      return (
        <form onSubmit={handleUserSubmit} style={{ ...styles.form, flexDirection: "column", gap: "10px" }}>
          <select
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setValidationError("");
            }}
            style={{
              ...styles.select,
              borderColor: validationError ? "#ef4444" : "#e5e7eb"
            }}
            required
            autoFocus
          >
            <option value="" disabled>-- Choisissez une option --</option>
            {currentQuestion.options.map((opt, idx) => (
              <option key={idx} value={opt}>{opt}</option>
            ))}
          </select>
          {validationError && (
            <div style={styles.errorMessage}>
              ⚠️ {validationError}
            </div>
          )}
          {commonButton}
        </form>
      );
    }

    return (
      <form onSubmit={handleUserSubmit} style={styles.form}>
        <div style={{ flex: 1 }}>
          <input
            type={currentQuestion.key === "email" ? "email" : "text"}
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setValidationError("");
            }}
            placeholder={
              currentQuestion.key === "email" ? "exemple@email.com" : 
              currentQuestion.key === "phone" ? "+1 234 567 8900" :
              currentQuestion.key === "name" ? "Prénom Nom" :
              "Votre réponse..."
            }
            style={{
              ...styles.input,
              borderColor: validationError ? "#ef4444" : "#e5e7eb"
            }}
            autoFocus
            required
          />
          {validationError && (
            <div style={styles.errorMessage}>
              ⚠️ {validationError}
            </div>
          )}
        </div>
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
          {/* Logo en arrière-plan */}
          <div style={styles.logoBackground}></div>
          
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
                📋 Voir mon formulaire personnalisé
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
    position: "relative",
  },
  logoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "url('/rv-7immig/images/logost1.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "120px 120px",
    opacity: 0.03,
    zIndex: 0,
    pointerEvents: "none",
  },
  header: {
    margin: 0,
    padding: "16px 20px",
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
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
    position: "relative",
    zIndex: 1,
  },
  message: {
    padding: "12px 16px",
    maxWidth: "85%",
    wordBreak: "break-word",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    animation: "slideIn 0.3s ease-out",
    position: "relative",
    zIndex: 2,
  },
  form: {
    display: "flex",
    padding: "16px",
    gap: "12px",
    borderTop: "1px solid #e5e7eb",
    alignItems: "flex-start",
    backgroundColor: "white",
    position: "relative",
    zIndex: 1,
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    backgroundColor: "white",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
    transition: "border-color 0.2s ease",
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
    whiteSpace: "nowrap",
  },
  errorMessage: {
    color: "#ef4444",
    fontSize: "0.85rem",
    marginTop: "4px",
    padding: "4px 8px",
    backgroundColor: "#fef2f2",
    borderRadius: "6px",
    border: "1px solid #fecaca",
    animation: "shake 0.5s ease-in-out",
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
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot:nth-child(2) { animation-delay: -0.16s; }
  .dot:nth-child(3) { animation-delay: 0s; }
`;
document.head.appendChild(styleSheet);

export default AssistantChat;