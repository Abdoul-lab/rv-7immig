import React, { useState, useMemo } from 'react';

export default function ScgForm({ onSubmit }) {
  const [form, setForm] = useState({
    maritalStatus: '',
    age: '',
    education: '',
    languageTest: '',   // ✅ nouveau champ
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

  const baseSteps = [
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
      label: "Quel test de langue avez-vous effectué ?",
      name: "languageTest",
      type: "select",
      options: ["IELTS / CELPIP (Anglais)", "TEF / TCF (Français)", "Aucun"],
    },
  ];

  const languageSteps = [
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
  ];

  const workStep = [
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
  ];

  const spouseSteps = [
    {
      label: "Quel est le plus haut diplôme de votre conjoint(e) ?",
      name: "spouseEducation",
      type: "select",
      options: [
        "Secondaire ou moins",
        "Baccalaureat",
        "Bac+2",
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
  ];

  const additionalSteps = [
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
    {
      label: "Avez-vous reçu une offre d'emploi valide au Canada ?",
      name: "validJobOffer",
      type: "select",
      options: ["Oui", "Non"]
    },
    {
      label: "Avez-vous reçu une nomination d'une province ou d'un territoire ?",
      name: "nomination",
      type: "select",
      options: ["Oui", "Non"]
    },
    {
      label: "Avez-vous une connaissance fonctionnelle d'une seconde langue officielle (français/anglais) ?",
      name: "secondLanguage",
      type: "select",
      options: ["Oui", "Non"]
    },
  ];

  const steps = useMemo(() => {
    let allSteps = [...baseSteps];

    // ✅ Ajouter étapes de langue si un test est choisi
    if (form.languageTest && form.languageTest !== "Aucun") {
      allSteps = [...allSteps, ...languageSteps];
    }

    allSteps = [...allSteps, ...workStep];

    if (form.maritalStatus === 'Marié(e) ou conjoint(e) de fait') {
      allSteps = [...allSteps, ...spouseSteps];
    }

    allSteps = [...allSteps, ...additionalSteps];
    return allSteps;
  }, [form.languageTest, form.maritalStatus]);

  const currentStep = steps[step];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!form[currentStep.name]) {
      alert("Veuillez répondre à la question.");
      return;
    }
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onSubmit(form);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const progressPercentage = ((step + 1) / steps.length) * 100;

  return (
    <div className="card shadow p-4 mx-auto" style={{ maxWidth: '600px' }}>
      {/* Progress bar */}
      <div className="mb-4">
        <div className="d-flex justify-content-between text-muted small mb-1">
          <span>Étape {step + 1} sur {steps.length}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="progress" style={{ height: '6px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

      <form onSubmit={handleNext}>
        <div className="mb-4">
          <label className="form-label fw-semibold fs-5">
            {currentStep.label}
          </label>

          {currentStep.type === "select" ? (
            <select
              name={currentStep.name}
              value={form[currentStep.name]}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">-- Sélectionnez une option --</option>
              {currentStep.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type="number"
              name={currentStep.name}
              value={form[currentStep.name]}
              onChange={handleChange}
              min={currentStep.min}
              max={currentStep.max}
              className="form-control"
              placeholder="Entrez votre âge"
              required
            />
          )}
        </div>

        <div className="d-flex justify-content-between pt-3">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={step === 0}
            className={`btn ${step === 0 ? 'btn-secondary disabled' : 'btn-secondary'}`}
          >
            Précédent
          </button>

          <button
            type="submit"
            className="btn btn-success"
          >
            {step === steps.length - 1 ? "Calculer le score" : "Suivant"}
          </button>
        </div>
      </form>
    </div>
  );
}
