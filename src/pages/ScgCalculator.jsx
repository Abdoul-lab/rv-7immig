import React, { useState } from 'react';
import ScgForm from '../components/ScgForm';
import ScgResults from '../components/ScgResults';

export default function ScgCalculator() {
  const [score, setScore] = useState(null);
  const [scoreBreakdown, setScoreBreakdown] = useState(null);

  const calculateScore = (data) => {
    let base = 0;
    let spouse = 0;
    let combined = 0;
    let additional = 0;

    const isSingle = data.maritalStatus === "Célibataire";

    // Âge
    const age = parseInt(data.age);
    if (age >= 20 && age <= 29) base += isSingle ? 110 : 100;
    else if (age >= 30 && age <= 35) base += isSingle ? 95 : 88;
    else if (age >= 36 && age <= 45) base += isSingle ? 70 : 63;

    // Études
    const eduPoints = {
      "Secondaire ou moins": 30,
      "Études postsecondaires de 1 an": 90,
      "Diplôme de 2 ans ou plus": 98,
      "Baccalauréat": 120,
      "Master": 135,
      "Doctorat": 150,
    };
    base += isSingle ? eduPoints[data.education] : eduPoints[data.education] - 8;

    // Langue principale (4 compétences)
    const languageMap = {
      "NCLC 7": 23,
      "NCLC 8": 29,
      "NCLC 9": 31,
      "NCLC 10+": 34,
    };
    base += 4 * languageMap[data.listening];

    // Expérience
    const expMap = {
      "Aucune": 0,
      "1 an": 40,
      "2 ans": 53,
      "3 ans": 64,
      "4 ans": 72,
      "5 ans ou plus": 80,
    };
    base += expMap[data.workExperience];

    // Facteurs du conjoint
    if (!isSingle) {
      const spouseEdu = {
        "Secondaire ou moins": 0,
        "Études postsecondaires de 1 an": 2,
        "Diplôme de 2 ans ou plus": 5,
        "Baccalauréat": 7,
        "Master": 8,
        "Doctorat": 10,
      };
      const spouseLang = {
        "NCLC 4-5": 0,
        "NCLC 6": 2,
        "NCLC 7": 5,
      };
      const spouseExp = {
        "Aucune": 0,
        "1 an": 5,
        "2 ans ou plus": 7,
      };
      spouse += spouseEdu[data.spouseEducation] || 0;
      spouse += spouseLang[data.spouseLanguage] || 0;
      spouse += spouseExp[data.spouseWorkExperience] || 0;
    }

    // Facteurs combinés (simplifiés ici)
    if (["Baccalauréat", "Master", "Doctorat"].includes(data.education) &&
        ["NCLC 9", "NCLC 10+"].includes(data.listening)) {
      combined += 50;
    }

    // Facteurs additionnels
    if (data.hasSibling === "Oui") additional += 15;
    if (data.studiedInCanada === "Oui") additional += 15;
    if (data.validJobOffer === "Oui") additional += 50;
    if (data.nomination === "Oui") additional += 600;
    if (data.secondLanguage === "Oui") additional += 25;

    const total = base + spouse + combined + additional;

    setScore(total);
    setScoreBreakdown({ total, base, spouse, combined, additional });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Calculateur SCG - Entrée Express</h1>

      <div className="bg-yellow-50 border border-yellow-300 text-sm text-gray-800 p-4 rounded shadow mb-6">
        <p className="mb-2 font-medium">ℹ️ Cet outil vous aidera à calculer votre pointage en vertu du Système de classement global (SCG).</p>
        <p className="mb-1 font-semibold text-red-600">Avis de non-responsabilité</p>
        <p className="mb-1">Cet outil est fourni à titre indicatif seulement. En cas de divergence avec le système Entrée express officiel, ce dernier prévaut.</p>
        <p>🛠️ Mis à jour ponctuellement selon les instructions ministérielles.</p>
      </div>

      <ScgForm onSubmit={calculateScore} />
      {score && <ScgResults scoreBreakdown={scoreBreakdown} />}
    </div>
  );
}
