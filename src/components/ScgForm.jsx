import React, { useState, useMemo } from 'react';

export default function ScgForm({ onSubmit }) {
  const [form, setForm] = useState({
    maritalStatus: '',
    age: '',
    education: '',
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
      label: "Quel est votre plus haut niveau d'études ?",
      name: "education",
      type: "select",
      options: [
        "Secondaire ou moins",
        "Études postsecondaires de 1 an",
        "Diplôme de 2 ans ou plus",
        "Baccalauréat",
        "Master",
        "Doctorat"
      ]
    },
    {
      label: "Quel est votre niveau en compréhension orale (IELTS/CELPIP) ?",
      name: "listening",
      type: "select",
      options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
    },
    {
      label: "Quel est votre niveau en expression orale (IELTS/CELPIP) ?",
      name: "speaking",
      type: "select",
      options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
    },
    {
      label: "Quel est votre niveau en lecture (IELTS/CELPIP) ?",
      name: "reading",
      type: "select",
      options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
    },
    {
      label: "Quel est votre niveau en écriture (IELTS/CELPIP) ?",
      name: "writing",
      type: "select",
      options: ["CLB 4", "CLB 5", "CLB 6", "CLB 7", "CLB 8", "CLB 9", "CLB 10+"],
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
  ];

  const spouseSteps = [
    {
      label: "Quel est le niveau d'études de votre conjoint(e) ?",
      name: "spouseEducation",
      type: "select",
      options: [
        "Secondaire ou moins",
        "Études postsecondaires de 1 an",
        "Diplôme de 2 ans ou plus",
        "Baccalauréat",
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
    
    if (form.maritalStatus === 'Marié(e) ou conjoint(e) de fait') {
      allSteps = [...allSteps, ...spouseSteps];
    }
    
    allSteps = [...allSteps, ...additionalSteps];
    
    return allSteps;
  }, [form.maritalStatus]);

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
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Étape {step + 1} sur {steps.length}</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-4 text-gray-800">
            {currentStep.label}
          </label>

          {currentStep.type === "select" ? (
            <select
              name={currentStep.name}
              value={form[currentStep.name]}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              required
            >
              <option value="">-- Sélectionnez une option --</option>
              {currentStep.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              type={currentStep.type}
              name={currentStep.name}
              value={form[currentStep.name]}
              onChange={handleChange}
              min={currentStep.min}
              max={currentStep.max}
              className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              placeholder={currentStep.type === "number" ? "Entrez votre âge" : ""}
              required
            />
          )}
        </div>

        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={step === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              step === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            Précédent
          </button>
          
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            {step === steps.length - 1 ? "Calculer le score" : "Suivant"}
          </button>
        </div>
      </form>
    </div>
  );
}