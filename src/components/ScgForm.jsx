import React, { useState } from 'react';

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

  const steps = [
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
      label: "Quel est votre niveau en compréhension orale ?",
      name: "listening",
      type: "select",
      options: ["NCLC 7", "NCLC 8", "NCLC 9", "NCLC 10+"],
    },
    {
      label: "Quel est votre niveau en expression orale ?",
      name: "speaking",
      type: "select",
      options: ["NCLC 7", "NCLC 8", "NCLC 9", "NCLC 10+"],
    },
    {
      label: "Quel est votre niveau en lecture ?",
      name: "reading",
      type: "select",
      options: ["NCLC 7", "NCLC 8", "NCLC 9", "NCLC 10+"],
    },
    {
      label: "Quel est votre niveau en écriture ?",
      name: "writing",
      type: "select",
      options: ["NCLC 7", "NCLC 8", "NCLC 9", "NCLC 10+"],
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
    ...(form.maritalStatus === 'Marié(e) ou conjoint(e) de fait'
      ? [
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
            options: ["NCLC 4-5", "NCLC 6", "NCLC 7"],
          },
          {
            label: "Quelle est son expérience de travail au Canada ?",
            name: "spouseWorkExperience",
            type: "select",
            options: ["Aucune", "1 an", "2 ans ou plus"],
          },
        ]
      : []),
    {
      label: "Avez-vous un frère ou une sœur citoyen(ne) canadien(ne) ou résident(e) permanent(e) au Canada ?",
      name: "hasSibling",
      type: "select",
      options: ["Oui", "Non"]
    },
    {
      label: "Avez-vous étudié au Canada ?",
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
      label: "Avez-vous reçu une nomination d’une province ou d’un territoire ?",
      name: "nomination",
      type: "select",
      options: ["Oui", "Non"]
    },
    {
      label: "Avez-vous une connaissance fonctionnelle d’une seconde langue officielle (anglais/français) ?",
      name: "secondLanguage",
      type: "select",
      options: ["Oui", "Non"]
    },
  ];

  const currentStep = steps[step];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!form[currentStep.name]) return alert("Veuillez répondre à la question.");
    if (step < steps.length - 1) setStep(step + 1);
    else onSubmit(form);
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <div>
        <label className="block font-medium mb-2">{currentStep.label}</label>

        {currentStep.type === "select" ? (
          <select
            name={currentStep.name}
            value={form[currentStep.name]}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">-- Sélectionnez --</option>
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
            className="border p-2 rounded w-full"
            required
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Étape {step + 1} / {steps.length}</span>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {step === steps.length - 1 ? "Calculer le score" : "Suivant"}
        </button>
      </div>
    </form>
  );
}
