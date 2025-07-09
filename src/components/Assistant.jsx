import { useState, useEffect, useRef } from "react";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Je suis votre assistant virtuel en immigration. 😊 Commençons." }
  ]);
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const questions = [
    { key: "name", text: "Quel est votre nom complet ?", type: "text" },
    {
      key: "status",
      text: "Quel est votre statut actuel ?",
      type: "select",
      options: ["Élève / étudiant(e)", "Employé(e)", "Travailleur indépendant", "Sans emploi", "Autre"]
    },
    { key: "email", text: "Quel est votre email ?", type: "text" },
    { key: "phone", text: "Quel est votre numéro de téléphone ?", type: "text" },
    {
      key: "program",
      text: "Quel programme d’immigration vous intéresse ?",
      type: "select",
      options: ["Entrée express", "Programme des candidats des provinces", "Permis d’études", "Regroupement familial", "Autre"]
    }
  ];

  const sendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
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
      if (step < questions.length - 1) {
        const nextStep = step + 1;
        setStep(nextStep);
        sendMessage("bot", questions[nextStep].text);
      } else {
        setStep(questions.length);
        sendMessage("bot", "Merci ! Vous pouvez maintenant vérifier vos informations dans le formulaire.");
      }
    }, 1000);
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
            <option value="" disabled>-- Sélectionnez une option --</option>
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
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Votre réponse..."
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
        title={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {isOpen && (
        <div style={styles.container} role="dialog" aria-modal="true" aria-labelledby="chat-header">
          <h3 id="chat-header" style={styles.header}>🧭 Assistant Immigration</h3>

          <div style={styles.chatBox} ref={chatBoxRef} tabIndex={-1}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#DCF8C6" : "#F1F1F1",
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={styles.loader}>
                <span className="dot" style={styles.dot}></span>
                <span className="dot" style={styles.dot}></span>
                <span className="dot" style={styles.dot}></span>
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
                📄 Voir le formulaire pré-rempli
              </a>
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
    boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "pulse 1.8s infinite ease-in-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 360,
    maxHeight: 600,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 0 15px rgba(0,0,0,0.25)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
  },
  header: {
    margin: 0,
    padding: "12px 16px",
    backgroundColor: "#10B981",
    color: "white",
    fontSize: "1.2rem",
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxHeight: "260px",
    backgroundColor: "#fafafa",
    borderTop: "1px solid #eee",
  },
  message: {
    padding: "10px 14px",
    borderRadius: 18,
    maxWidth: "80%",
    wordBreak: "break-word",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    padding: "10px",
    gap: "8px",
    borderTop: "1px solid #eee",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1.5px solid #ccc",
    fontSize: "1rem",
    outlineColor: "#10B981",
  },
  select: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 8,
    border: "1.5px solid #ccc",
    fontSize: "1rem",
    backgroundColor: "white",
    outlineColor: "#10B981",
    appearance: "none",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#10B981",
    color: "white",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "1rem",
    boxShadow: "0 3px 8px rgba(16,185,129,0.6)",
    transition: "background-color 0.3s ease",
  },
  formLink: {
    display: "inline-block",
    backgroundColor: "#10B981",
    color: "white",
    padding: "10px 16px",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: "600",
  },
  loader: {
    display: "flex",
    gap: "5px",
    padding: "6px 10px",
    marginLeft: "10px",
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#999",
    borderRadius: "50%",
    animation: "blink 1.4s infinite both",
  },
};

export default AssistantChat;
