import { useState, useEffect, useRef } from "react";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('accueil');
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [step, setStep] = useState(0);
  const chatBoxRef = useRef(null);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  const questions = [
    { 
      key: "name", 
      text: "Pour mieux vous conseiller, j'aimerais d'abord apprendre à vous connaître. Quel est votre prénom et nom ?", 
      type: "text" 
    },
    {
      key: "status",
      text: " Maintenant, pouvez-vous me dire quelle est votre situation professionnelle actuelle ?",
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
      text: "Et votre numéro de téléphone ? (avec l'indicatif pays si vous n'êtes pas au Canada)", 
      type: "text" 
    },
    {
      key: "program",
      text: "Maintenant, parlons de vos objectifs. Quel type de programme d'immigration vous intéresse le plus ?",
      type: "select",
      options: ["Entrée express", "Programme des candidats des provinces (PCP)", "Permis d'études", "Regroupement familial", "Visa de travail temporaire", "Je ne sais pas encore", "Autre"]
    }
  ];

  const welcomeMessages = [
    { sender: "bot", text: "Bonjour et bienvenue à Septimmigration🍁 ! 👋 " },
    { sender: "bot", text: "🎯 Nous vous accompagnons dans toutes vos démarches d'immigration vers le Canada !" },
    { sender: "bot", text: "✨ Nos services incluent :\n • Évaluation gratuite de votre profil\n• Accompagnement personnalisé\n• Préparation des dossiers\n• Suivi jusqu'à l'obtention de votre visa" },
    
    { sender: "bot", text: "📞 Contactez-nous :\n• Téléphone :\n +1 819-919-4544 /+225 07 08 92 71 14\n• Email : info@septimmigration.com\n• Bureaux : Sherbrooke (Canada) & Abidjan (Côte d'Ivoire)" }
    
  ];

  // Détection des refus ou questions hors sujet
  const analyzeUserInput = (input) => {
    const lowerInput = input.toLowerCase();
    
    const refusalKeywords = [
      'non', 'pas maintenant', 'plus tard', 'pas intéressé', 'arrêter', 'stop',
      'ne veux pas', 'pas envie', 'laisser tranquille', 'fermer', 'partir',
      'pas le temps', 'occupé', 'rappeler', 'pas prêt'
    ];

    const immigrationKeywords = [
      'visa', 'immigration', 'canada', 'permis', 'résidence', 'citoyenneté',
      ' entrée express', 'pcp', 'étudiant', 'travail', 'famille', 'conjoint',
      'délai', 'coût', 'prix', 'document', 'exigence', 'condition',
      'ielts', 'français', 'anglais', 'diplôme', 'expérience', 'province',
      'québec', 'ontario', 'alberta', 'colombie', 'manitoba', 'saskatchewan'
    ];

    const hasRefusal = refusalKeywords.some(keyword => lowerInput.includes(keyword));
    const hasImmigrationTopic = immigrationKeywords.some(keyword => lowerInput.includes(keyword));

    return {
      isRefusal: hasRefusal,
      isImmigrationQuestion: hasImmigrationTopic
    };
  };

  // Réponses IA pour les questions d'immigration
  const getImmigrationResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('visa') || lowerInput.includes('permis')) {
      return "Il existe plusieurs types de visas pour le Canada :\n\n🎓 **Permis d'études** : Pour étudier dans une institution canadienne\n💼 **Permis de travail** : Temporaire ou fermé à un employeur\n🏠 **Résidence permanente** : Via Entrée Express, PCP, ou regroupement familial\n👥 **Visa visiteur** : Pour le tourisme ou visites familiales\n\nChaque programme a ses propres exigences. Quel type vous intéresse le plus ? 🤔";
    }
    
    if (lowerInput.includes('délai') || lowerInput.includes('temps') || lowerInput.includes('combien')) {
      return "⏰ **Délais de traitement approximatifs** :\n\n• **Entrée Express** : 6 mois\n• **PCP** : 12-18 mois\n• **Permis d'études** : 4-12 semaines\n• **Permis de travail** : 2-16 semaines\n• **Regroupement familial** : 12-24 mois\n\nCes délais peuvent varier selon votre pays et la complexité du dossier. Voulez-vous des détails sur un programme spécifique ? 📋";
    }
    
    if (lowerInput.includes('coût') || lowerInput.includes('prix') || lowerInput.includes('cher')) {
      return "💰 **Frais gouvernementaux principaux** :\n\n• **Entrée Express** : 1,365$ CAD\n• **Permis d'études** : 150$ CAD\n• **Permis de travail** : 155$ CAD\n• **Visa visiteur** : 100$ CAD\n\n+ Frais biométriques (85$ CAD)\n+ Examens médicaux (200-400$ CAD)\n+ Tests de langue (300-400$ CAD)\n\nNos services d'accompagnement sont en plus. Souhaitez-vous un devis personnalisé ? 📊";
    }
    
    if (lowerInput.includes('document') || lowerInput.includes('papier')) {
      return "📄 **Documents généralement requis** :\n\n✅ **Identité** : Passeport, acte de naissance\n✅ **Éducation** : Diplômes, relevés de notes, ECA\n✅ **Expérience** : Lettres d'employeurs, contrats\n✅ **Langue** : IELTS, CELPIP, TEF, TCF\n✅ **Financier** : Relevés bancaires, preuves de fonds\n✅ **Médical** : Examens médicaux\n✅ **Sécurité** : Certificats de police\n\nLa liste exacte dépend de votre programme. Quel est votre projet ? 🎯";
    }
    
    if (lowerInput.includes('ielts') || lowerInput.includes('français') || lowerInput.includes('anglais')) {
      return "🗣️ **Tests de langue requis** :\n\n**Anglais** :\n• IELTS General Training\n• CELPIP General\n\n**Français** :\n• TEF Canada\n• TCF Canada\n\n**Scores minimums** (varient selon le programme) :\n• **Entrée Express** : CLB 7+ (IELTS 6.0+)\n• **Permis d'études** : IELTS 6.0-6.5\n• **PCP** : Selon la province";
    }

    if (lowerInput.includes('province') || lowerInput.includes('pcp') || lowerInput.includes('québec') || lowerInput.includes('ontario')) {
      return "🍁 **Programmes des Candidats des Provinces (PCP)** :\n\n• **Ontario** : OINP - Tech, French Speaker, Masters\n• **Québec** : PEIQ - Système unique avec CAQ\n• **Colombie-Britannique** : BC PNP - Tech, Healthcare\n• **Alberta** : AINP - Opportunity Stream\n• **Manitoba** : MPNP - Skilled Worker\n• **Saskatchewan** : SINP - Occupation In-Demand\n\nChaque province a ses critères spécifiques. ";
    }

    if (lowerInput.includes('express entry') || lowerInput.includes('entrée express')) {
      return "🚀 **Entrée Express - Le système le plus rapide** :\n\n**3 programmes inclus** :\n• Programme des travailleurs qualifiés fédéral\n• Programme des métiers spécialisés fédéral\n• Catégorie de l'expérience canadienne\n\n**Système de points (CRS)** :\n• Âge, éducation, expérience, langue\n• Score minimum récent : ~480-500 points\n• Invitations aux 2 semaines\n\n**Avantages** :\n• Traitement en 6 mois\n• Résidence permanente directe\n• Possibilité de travailler partout au Canada\n\nJ'espère que cela repond à votre question📊";
    }
    
    return "Je peux vous aider avec des informations sur :\n• Les différents programmes d'immigration\n• Les exigences et documents\n• Les délais et coûts\n• Les tests de langue\n• Les provinces et leurs programmes\n\nQue souhaitez-vous savoir exactement ? 🤔";
  };

  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const now = audioContext.currentTime;

      oscillator.frequency.setValueAtTime(800, now);
      oscillator.frequency.setValueAtTime(600, now + 0.2);
      oscillator.frequency.setValueAtTime(800, now + 0.4);

      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

      oscillator.start(now);
      oscillator.stop(now + 0.6);

    } catch (error) {
      console.log('Son de notification non disponible');
    }
  };

  useEffect(() => {
    if (!hasPlayedSound) {
      const timer = setTimeout(() => {
        playNotificationSound();
        setHasPlayedSound(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [hasPlayedSound]);

  const sendMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMessages([]);
    setUserInput("");
    setIsLoading(false);
    
    if (tab === 'accueil') {
      setTimeout(() => {
        welcomeMessages.forEach((msg, index) => {
          setTimeout(() => {
            sendMessage(msg.sender, msg.text);
          }, index * 1000);
        });
      }, 500);
    } else if (tab === 'ia') {
      setTimeout(() => {
        sendMessage("bot", "Bonjour ! 👋 Je suis Marie, votre conseillère IA spécialisée en immigration canadienne.");
        setTimeout(() => {
          sendMessage("bot", "Posez-moi toutes vos questions sur l'immigration au Canada : visas, délais, coûts, documents, tests de langue, provinces... Je suis là pour vous aider ! 🍁");
        }, 1500);
      }, 500);
    } else if (tab === 'contact') {
      setStep(0);
      setForm({});
      setTimeout(() => {
        sendMessage("bot", "Parfait ! Je vais vous poser quelques questions pour mieux vous conseiller et vous mettre en contact avec nos experts. 📋");
        setTimeout(() => {
          sendMessage("bot", questions[0].text);
        }, 1500);
      }, 500);
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    sendMessage("user", userInput);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      if (activeTab === 'ia') {
        const analysis = analyzeUserInput(userInput);
        
        if (analysis.isRefusal) {
          sendMessage("bot", "Je comprends parfaitement ! 😊 Si vous changez d'avis ou avez d'autres questions sur l'immigration au Canada, n'hésitez pas à revenir me voir. Bonne journée ! 👋");
        } else {
          sendMessage("bot", getImmigrationResponse(userInput));
        }
      } else if (activeTab === 'contact') {
        const currentKey = questions[step]?.key;
        if (currentKey) {
          setForm((prev) => ({ ...prev, [currentKey]: userInput }));
        }

        if (step < questions.length - 1) {
          sendMessage("bot", "Parfait, je note cela ! 📝");
          
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
      }

      setUserInput("");
    }, 1000 + Math.random() * 500);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      setTimeout(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (activeTab === 'accueil') {
      handleTabChange('accueil');
    }
  }, []);

  const renderInput = () => {
    if (activeTab === 'accueil') return null;
    
    if (activeTab === 'ia') {
      return (
        <form onSubmit={handleUserSubmit} style={styles.form}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Posez votre question sur l'immigration..."
            style={styles.input}
            autoFocus
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0e9e6e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10B981")}
          >
            Envoyer
          </button>
        </form>
      );
    }

    if (activeTab === 'contact' && step >= questions.length) return null;
    
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

  const googleFormURL =
    `https://docs.google.com/forms/d/e/1FAIpQLSft6cT6hHWkXV-THzxZIAkoyOrlqneL2k5tV78dt3yybwiMJA/viewform?usp=pp_url` +
    `&entry.583938010=${encodeURIComponent(form.name || "")}` +
    `&entry.403275790=${encodeURIComponent(form.status || "")}` +
    `&entry.1000627390=${encodeURIComponent(form.email || "")}` +
    `&entry.1338088088=${encodeURIComponent(form.phone || "")}` +
    `&entry.213167345=${encodeURIComponent(form.program || "")}`;

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
                  whiteSpace: "pre-line"
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={styles.loader}>
                <div style={styles.typingIndicator}>
                  <span style={styles.typingText}>Marie réfléchit</span>
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

          {activeTab === 'contact' && step === questions.length && (
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <a
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.formLink}
              >
                📋 Voir mon formulaire de contact
              </a>
              <p style={styles.footerText}>
                Un conseiller vous contactera sous 24h ! 🕐
              </p>
            </div>
          )}

          {/* Onglets de navigation */}
          <div style={styles.tabContainer}>
            <button
              onClick={() => handleTabChange('accueil')}
              style={{
                ...styles.tab,
                ...(activeTab === 'accueil' ? styles.activeTab : {})
              }}
            >
              🏠 Accueil
            </button>
            <button
              onClick={() => handleTabChange('ia')}
              style={{
                ...styles.tab,
                ...(activeTab === 'ia' ? styles.activeTab : {})
              }}
            >
              💬 Conversation
            </button>
            <button
              onClick={() => handleTabChange('contact')}
              style={{
                ...styles.tab,
                ...(activeTab === 'contact' ? styles.activeTab : {})
              }}
            >
              📋 prendre RDV
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  chatButton: {
    position: "fixed",
    bottom: 50,
    right: 10,
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
    animation: "pulse 2s infinite ease-in-out, bounce 1s ease-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 400,
    maxHeight: 650,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
    border: "1px solid #e5e7eb",
    animation: "slideInUp 0.5s ease-out",
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
  tabContainer: {
    display: "flex",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
  },
  tab: {
    flex: 1,
    padding: "12px 8px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "0.85rem",
    fontWeight: "500",
    color: "#6b7280",
    transition: "all 0.2s ease",
    borderBottom: "2px solid transparent",
  },
  activeTab: {
    color: "#10B981",
    borderTopColor: "#10B981",
    backgroundColor: "white",
    borderTop: "2px solid #10B981",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxHeight: "350px",
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
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  @keyframes slideInUp {
    from { 
      opacity: 0; 
      transform: translateY(30px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
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