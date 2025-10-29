import React, { useState } from 'react';
import ScgForm from '../components/ScgForm';
import ScgResults from '../components/ScgResults';
import Breadcrumb from '../components/BreadCrumb';
import FaqAccordion from '../components/FaqAccordion';

export default function ScgCalculator() {
  const [score, setScore] = useState(null);
  const [scoreBreakdown, setScoreBreakdown] = useState(null);

  const calculateScore = (data) => {
    let base = 0;
    let spouse = 0;
    let combined = 0;
    let additional = 0;

    const isSingle = data.maritalStatus === "Célibataire";

    const age = parseInt(data.age);
    if (age >= 18 && age <= 35) {
      if (age >= 20 && age <= 29) base += isSingle ? 110 : 100;
      else if (age >= 30 && age <= 35) base += isSingle ? 105 : 95;
      else if (age === 18 || age === 19) base += isSingle ? 99 : 90;
    } else if (age >= 36 && age <= 45) {
      const agePoints = isSingle
        ? [85, 80, 75, 70, 65, 60, 55, 50, 45, 35]
        : [77, 72, 68, 63, 58, 54, 50, 45, 40, 32];
      const index = age - 36;
      if (index < agePoints.length) base += agePoints[index];
    }

    const eduPoints = {
      "Secondaire ou moins": isSingle ? 30 : 28,
      "Baccalaureat": isSingle ? 90 : 84,
      "BAC+2": isSingle ? 98 : 91,
      "Licence": isSingle ? 120 : 112,
      "Master": isSingle ? 135 : 126,
      "Doctorat": isSingle ? 150 : 140,
    };
    base += eduPoints[data.education] || 0;

    // ✅ Gestion des langues uniquement si un test est choisi
    let minLanguageLevel = 0;
    if (data.languageTest && data.languageTest !== "Aucun") {
    const languageMap = {
      "CLB 4": 6,
      "CLB 5": 6,
      "CLB 6": 9,
      "CLB 7": 17,
      "CLB 8": 23,
      "CLB 9": 31,
      "CLB 10+": 34,
    };

      minLanguageLevel = Math.min(
      languageMap[data.listening] || 0,
      languageMap[data.speaking] || 0,
      languageMap[data.reading] || 0,
      languageMap[data.writing] || 0
    );

    if (minLanguageLevel >= 17) {
      base +=
        (languageMap[data.listening] || 0) +
        (languageMap[data.speaking] || 0) +
        (languageMap[data.reading] || 0) +
        (languageMap[data.writing] || 0);
    }
    }

    const expMap = {
      "Aucune": 0,
      "1 an": isSingle ? 40 : 35,
      "2 ans": isSingle ? 53 : 46,
      "3 ans": isSingle ? 64 : 56,
      "4 ans": isSingle ? 72 : 63,
      "5 ans ou plus": isSingle ? 80 : 70,
    };
    base += expMap[data.workExperience] || 0;

    if (!isSingle) {
      const spouseEdu = {
        "Secondaire ou moins": 0,
        "Baccalaureat": 2,
        "BAC+2": 6,
        "Licence": 7,
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

    const hasHighEducation = ["Licence", "Master", "Doctorat"].includes(data.education);
    const hasGoodLanguage = minLanguageLevel >= 31;
    const hasCanadianExp = data.workExperience !== "Aucune";

    if (hasHighEducation && hasGoodLanguage) {
      combined += 50;
    }
    if (hasCanadianExp && hasGoodLanguage) {
      combined += 50;
    }

    if (data.hasSibling === "Oui") additional += 15;
    if (data.studiedInCanada === "Oui") additional += 30;
    if (data.validJobOffer === "Oui") additional += 50;
    if (data.nomination === "Oui") additional += 600;
    if (data.secondLanguage === "Oui") additional += 25;

    const total = Math.min(base + spouse + combined + additional, 1200);

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
        title="Entrée Express simulation"
        links={[
          { label: "Accueil", href: "/" },
          { label: "Calculateur SCG" },
          { label: "FAQ" }
        ]}
      />

      <div className="py-5 bg-light min-vh-100">
        <div className="container px-3">
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <div className="text-center mb-4">
              <h1 className="h3 fw-bold text-dark mb-3">
                Calculateur SCG - Système de Classement Global
              </h1>
              <p className="lead text-secondary">
                Calculez votre score pour le programme Entrée Express du Canada
              </p>
            </div>

            <div className="alert alert-warning d-flex align-items-center mb-4" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="40" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2 text-warning" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1-2.002 0 1 1 0 0 1 2.002 0z"/>
              </svg>
              <div>
                <strong className='text-danger'> Avis important : </strong> Cet outil est fourni à titre indicatif seulement. 
                Les résultats peuvent différer du système officiel d'Immigration, Réfugiés et Citoyenneté Canada (IRCC).
              </div>
            </div>

            {!score ? (
              <div className="bg-white rounded shadow p-4">
                <ScgForm onSubmit={calculateScore} />
              </div>
            ) : (
              <div className="mt-4">
                <ScgResults scoreBreakdown={scoreBreakdown} />

                <div className="text-center mt-4">
                  <button
                    onClick={resetCalculator}
                    className="btn btn-primary px-4 py-2"
                  >
                    Faire un nouveau calcul
                  </button>
                </div>

                <div className="bg-success bg-opacity-10 border border-success rounded p-4 mt-4">
                  <h3 className="h5 mb-3">
                    🎯 Prochaines étapes recommandées
                  </h3>
                  <ul className="list-unstyled text-white">
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
      <FaqAccordion />
    </>
  );
}
