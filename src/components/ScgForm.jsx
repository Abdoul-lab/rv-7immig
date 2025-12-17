import React, { useState, useMemo } from 'react';

export default function ScgForm({ onSubmit }) {
  const [form, setForm] = useState({
    maritalStatus: '',
    age: '',
    education: '',
    languageTest: '',
    reading: '',
    writing: '',
    listening: '',
    speaking: '',
    workExperience: '',
    spouseEducation: '',
    spouseLanguage: '',
    spouseWorkExperience: '',
    hasSibling: '',
    studiedInCanada: '',
    validJobOffer: '',
    nomination: '',
    secondLanguage: ''
  });

  const [step, setStep] = useState(0);

  // Catégories d'évaluation
  const categories = [
    {
      id: 'information',
      title: 'Informations personnelles',
      description: 'Commençons par vos informations de base',
      questions: [
        {
          label: "Quel est votre état matrimonial ?",
          name: "maritalStatus",
          type: "select",
          options: ["Célibataire", "Marié(e) ou conjoint(e) de fait"],
        },
        {
          label: "Quel est votre âge ?",
          name: "age",
          type: "number",
          min: 18,
          max: 65,
        },
      ]
    },
    {
      id: 'education',
      title: 'Éducation et expérience',
      description: 'Parlons de votre formation et expérience professionnelle',
      questions: [
        {
          label: "Quel est votre plus haut diplôme ?",
          name: "education",
          type: "select",
          options: [
            "Secondaire ou moins",
            "Baccalaureat",
            "BAC+2",
            "Licence",
            "Master",
            "Doctorat"
          ]
        },
        {
          label: "Quelle est votre expérience de travail au Canada ?",
          name: "workExperience",
          type: "select",
          options: [
            "Aucune",
            "1 an",
            "2 ans",
            "3 ans",
            "4 ans",
            "5 ans ou plus"
          ],
        },
      ]
    },
    {
      id: 'langues',
      title: 'Compétences linguistiques',
      description: 'Évaluons vos compétences en langue',
      questions: [
        {
          label: "Quel test de langue avez-vous effectué ?",
          name: "languageTest",
          type: "select",
          options: ["IELTS / CELPIP (Anglais)", "TEF / TCF (Français)", "Aucun"],
        },
        {
          label: "Quel est votre niveau en compréhension orale ?",
          name: "listening",
          type: "select",
          options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
        },
        {
          label: "Quel est votre niveau en expression orale ?",
          name: "speaking",
          type: "select",
          options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
        },
        {
          label: "Quel est votre niveau en lecture ?",
          name: "reading",
          type: "select",
          options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
        },
        {
          label: "Quel est votre niveau en écriture ?",
          name: "writing",
          type: "select",
          options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
        },
      ]
    },
    {
      id: 'quebec',
      title: 'Lien avec le Québec',
      description: 'Avez-vous des liens avec le Québec ?',
      questions: [
        {
          label: "Avez-vous un frère ou une sœur citoyen(ne) canadien(ne) ou résident(e) permanent(e) au Canada ?",
          name: "hasSibling",
          type: "select",
          options: ["Oui", "Non"]
        },
        {
          label: "Avez-vous étudié au Canada (programme d'au moins 2 ans) ?",
          name: "studiedInCanada",
          type: "select",
          options: ["Oui", "Non"]
        },
      ]
    },
    {
      id: 'emploi',
      title: 'Offre d\'emploi et nomination',
      description: 'Avez-vous une offre d\'emploi ou nomination ?',
      questions: [
        {
          label: "Avez-vous reçu une offre d'emploi valide au Canada ?",
          name: "validJobOffer",
          type: "select",
          options: ["Oui", "Non"]
        },
        {
          label: "Avez-vous une nomination provinciale ?",
          name: "nomination",
          type: "select",
          options: ["Oui", "Non"]
        },
      ]
    },
  ];

  const isSingle = form.maritalStatus === "Célibataire";
  
  // Ajouter catégorie conjoint si marié (dépend seulement de isSingle)
  const allCategories = useMemo(() => {
    const cats = [...categories];
    if (!isSingle) {
      const spouseCategory = {
        id: 'spouse',
        title: 'Informations du conjoint',
        description: 'Informations sur votre conjoint(e)',
        questions: [
          {
            label: "Quel est le plus haut diplôme de votre conjoint(e) ?",
            name: "spouseEducation",
            type: "select",
            options: [
              "Secondaire ou moins",
              "Baccalaureat",
              "BAC+2",
              "Licence",
              "Master",
              "Doctorat"
            ],
          },
          {
            label: "Quel est le niveau linguistique de votre conjoint(e) ?",
            name: "spouseLanguage",
            type: "select",
            options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9"],
          },
          {
            label: "Quelle est son expérience de travail au Canada ?",
            name: "spouseWorkExperience",
            type: "select",
            options: ["Aucune", "1 an", "2 ans ou plus"],
          },
        ]
      };
      // insérer après la section 'education'
      cats.splice(2, 0, spouseCategory);
    }
    return cats;
  }, [isSingle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Retourne les questions visibles pour une catégorie (ex: cacher les détails de langue si "Aucun")
  const getVisibleQuestions = (category) => {
    if (!category) return [];
    return category.questions.filter((q) => {
      // Si catégorie langue et aucun test, ne garder que la question 'languageTest'
      if (category.id === 'langues' && form.languageTest === 'Aucun') {
        return q.name === 'languageTest';
      }
      return true;
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    const currentCategory = allCategories[step];
    const visible = getVisibleQuestions(currentCategory);

    // Vérifier que toutes les questions visibles de la catégorie sont remplies
    const isComplete = visible.every(q => {
      const val = form[q.name];
      return val !== undefined && val !== null && String(val).trim() !== '';
    });

    if (!isComplete) {
      alert("Veuillez répondre à toutes les questions de cette section.");
      return;
    }

    if (step < allCategories.length - 1) {
      setStep(step + 1);
    } else {
      // dernier, soumettre
      if (typeof onSubmit === 'function') onSubmit(form);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const progressPercentage = allCategories.length > 0 ? ((step + 1) / allCategories.length) * 100 : 0;
  const currentCategory = allCategories[step];
  const visibleQuestions = getVisibleQuestions(currentCategory);
  return (
    <div className="mx-auto" style={{ 
      maxWidth: '700px',
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
      padding: '40px 20px',
      borderRadius: '12px',
      minHeight: '100vh'
    }}>
      {/* Progress Section */}
      <div className="mb-5">
        {/* Step counter and percentage */}
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h4 className="mb-1 fw-bold text-dark">
              Étape <span style={{ color: '#667eea' }}>{Math.min(step + 1, allCategories.length)}</span> sur <span>{allCategories.length}</span>
            </h4>
            <small className="text-muted">{currentCategory ? currentCategory.title : ''}</small>
          </div>
          <div className="text-end">
            <h5 className="mb-0 fw-bold" style={{ color: '#667eea', fontSize: '24px' }}>
              {Math.round(progressPercentage)}%
            </h5>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress" style={{ height: '10px', borderRadius: '20px', backgroundColor: '#e9ecef' }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progressPercentage}%`,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              transition: 'width 0.3s ease'
            }}
            aria-valuenow={Math.round(progressPercentage)}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      {/* Form Card */}
      <div className="card border-0 shadow-lg" style={{ 
        backgroundColor: '#fff', 
        padding: '40px 30px',
        background: 'linear-gradient(135deg, #f8f9ff 0%, #faf8ff 100%)'
      }}>
        <form onSubmit={handleNext}>
          {/* Category Title & Description */}
          <div className="mb-5 pb-3 border-bottom">
            <h3 className="h5 fw-bold text-dark mb-1">
              {currentCategory ? currentCategory.title : ''}
            </h3>
            <p className="text-muted mb-0">
              {currentCategory ? currentCategory.description : ''}
            </p>
          </div>

          {/* Questions (seulement celles visibles) */}
          {visibleQuestions && visibleQuestions.length > 0 ? visibleQuestions.map((question) => (
            <div key={question.name} className="mb-4">
              <label className="form-label fw-bold" style={{ fontSize: '15px', marginBottom: '10px', color: '#2c3e50' }}>
                {question.label}
              </label>

              {question.type === "select" ? (
                <select
                  name={question.name}
                  value={form[question.name] || ''}
                  onChange={handleChange}
                  className="form-select"
                  style={{ 
                    fontSize: '14px', 
                    padding: '10px 12px', 
                    borderColor: '#ddd',
                    borderRadius: '6px'
                  }}
                  required
                >
                  <option value="">-- Sélectionnez une option --</option>
                  {question.options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  name={question.name}
                  value={form[question.name] || ''}
                  onChange={handleChange}
                  min={question.min}
                  max={question.max}
                  className="form-control"
                  style={{ 
                    fontSize: '14px', 
                    padding: '10px 12px', 
                    borderColor: '#ddd',
                    borderRadius: '6px'
                  }}
                  placeholder="Entrez votre réponse"
                  required
                />
              )}
            </div>
          )) : (
            <p className="text-muted">Aucune question à afficher pour cette section.</p>
          )}

          {/* Navigation buttons */}
          <div className="d-flex justify-content-between pt-3">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={step === 0}
              className="btn btn-outline-secondary"
              style={{ 
                width: '140px',
                opacity: step === 0 ? 0.5 : 1, 
                cursor: step === 0 ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                padding: '10px'
              }}
            >
              ← Précédent
            </button>

            <button
              type="submit"
              className="btn"
              style={{
                width: '140px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                fontSize: '14px',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: '6px'
              }}
            >
              {step === allCategories.length - 1 ? "Calculer le score →" : "Suivant →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
