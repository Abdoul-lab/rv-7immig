import React, { useState } from 'react';
import ScgForm from '../components/ScgForm';
import ScgResults from '../components/ScgResults';
import Breadcrumb from '../components/BreadCrumb';

export default function ScgCalculator() {
  const [score, setScore] = useState(null);
  const [scoreBreakdown, setScoreBreakdown] = useState(null);

  const calculateScore = (data) => {
    let base = 0;
    let spouse = 0;
    let combined = 0;
    let additional = 0;

    const isSingle = data.maritalStatus === "Célibataire";

    // Âge (maximum 110 points pour célibataire, 100 pour marié)
    const age = parseInt(data.age);
    if (age >= 18 && age <= 35) {
      if (age >= 20 && age <= 29) base += isSingle ? 110 : 100;
      else if (age >= 30 && age <= 35) base += isSingle ? 105 : 95;
      else if (age === 18 || age === 19) base += isSingle ? 99 : 90;
    } else if (age >= 36 && age <= 45) {
      const agePoints = isSingle ? [85, 80, 75, 70, 65, 60, 55, 50, 45, 35] : [77, 72, 68, 63, 58, 54, 50, 45, 40, 32];
      const index = age - 36;
      if (index < agePoints.length) base += agePoints[index];
    }

    // Études (maximum 150 points)
    const eduPoints = {
      "Secondaire ou moins": isSingle ? 30 : 28,
      "Études postsecondaires de 1 an": isSingle ? 90 : 84,
      "Diplôme de 2 ans ou plus": isSingle ? 98 : 91,
      "Baccalauréat": isSingle ? 120 : 112,
      "Master": isSingle ? 135 : 126,
      "Doctorat": isSingle ? 150 : 140,
    };
    base += eduPoints[data.education] || 0;

    // Langue principale - première langue officielle (maximum 136 points)
    const languageMap = {
      "CLB 4": 6,
      "CLB 5": 6,
      "CLB 6": 9,
      "CLB 7": 17,
      "CLB 8": 23,
      "CLB 9": 31,
      "CLB 10+": 34,
    };

    // Vérifier que toutes les compétences linguistiques sont au moins CLB 7
    const minLanguageLevel = Math.min(
      languageMap[data.listening] || 0,
      languageMap[data.speaking] || 0,
      languageMap[data.reading] || 0,
      languageMap[data.writing] || 0
    );

    if (minLanguageLevel >= 17) { // CLB 7 minimum
      base += (languageMap[data.listening] || 0) + 
              (languageMap[data.speaking] || 0) + 
              (languageMap[data.reading] || 0) + 
              (languageMap[data.writing] || 0);
    }

    // Expérience de travail au Canada (maximum 80 points)
    const expMap = {
      "Aucune": 0,
      "1 an": isSingle ? 40 : 35,
      "2 ans": isSingle ? 53 : 46,
      "3 ans": isSingle ? 64 : 56,
      "4 ans": isSingle ? 72 : 63,
      "5 ans ou plus": isSingle ? 80 : 70,
    };
    base += expMap[data.workExperience] || 0;

    // Facteurs du conjoint (maximum 40 points)
    if (!isSingle) {
      const spouseEdu = {
        "Secondaire ou moins": 0,
        "Études postsecondaires de 1 an": 2,
        "Diplôme de 2 ans ou plus": 6,
        "Baccalauréat": 7,
        "Master": 8,
        "Doctorat": 10,
      };
      
      const spouseLang = {
        "CLB 4": 0,
        "CLB 5": 1,
        "CLB 6": 3,
        "CLB 7": 5,
        "CLB 8": 5,
        "CLB 9": 5,
      };
      
      const spouseExp = {
        "Aucune": 0,
        "1 an": 5,
        "2 ans ou plus": 10,
      };
      
      spouse += spouseEdu[data.spouseEducation] || 0;
      spouse += spouseLang[data.spouseLanguage] || 0;
      spouse += spouseExp[data.spouseWorkExperience] || 0;
    }

    // Facteurs de transférabilité des compétences (maximum 100 points)
    const hasHighEducation = ["Baccalauréat", "Master", "Doctorat"].includes(data.education);
    const hasGoodLanguage = minLanguageLevel >= 31; // CLB 9+
    const hasCanadianExp = data.workExperience !== "Aucune";

    if (hasHighEducation && hasGoodLanguage) {
      combined += 50;
    }
    if (hasCanadianExp && hasGoodLanguage) {
      combined += 50;
    }

    // Facteurs additionnels
    if (data.hasSibling === "Oui") additional += 15;
    if (data.studiedInCanada === "Oui") additional += 30;
    if (data.validJobOffer === "Oui") additional += 50; // Simplifié - peut être 50 ou 200
    if (data.nomination === "Oui") additional += 600;
    if (data.secondLanguage === "Oui") additional += 25;

    const total = Math.min(base + spouse + combined + additional, 1200); // Maximum possible

    setScore(total);
    setScoreBreakdown({ total, base, spouse, combined, additional });
  };

  const resetCalculator = () => {
    setScore(null);
    setScoreBreakdown(null);
  };

  return (
    <>
      <Breadcrumb
        title="Calculateur SCG"
        links={[
          { label: "Accueil", href: "/" },
          { label: "Calculateur SCG" }
        ]}
      />
      
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Calculateur SCG - Système de Classement Global
              </h1>
              <p className="text-lg text-gray-600">
                Calculez votre score pour le programme Entrée Express du Canada
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Avis important :</strong> Cet outil est fourni à titre indicatif seulement. 
                    Les résultats peuvent différer du système officiel d'Immigration, Réfugiés et Citoyenneté Canada (IRCC).
                  </p>
                </div>
              </div>
            </div>

            {!score ? (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <ScgForm onSubmit={calculateScore} />
              </div>
            ) : (
              <div className="space-y-6">
                <ScgResults scoreBreakdown={scoreBreakdown} />
                
                <div className="text-center">
                  <button
                    onClick={resetCalculator}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Faire un nouveau calcul
                  </button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    🎯 Prochaines étapes recommandées
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Créez votre profil sur le site officiel d'IRCC</li>
                    <li>• Préparez vos documents (EDE, tests de langue, etc.)</li>
                    <li>• Contactez Septimmigration pour un accompagnement personnalisé</li>
                    <li>• Explorez les programmes provinciaux pour augmenter vos chances</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}