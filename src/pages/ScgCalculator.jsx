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
        <div className="container">
          {!score ? (
            <>
              {/* Hero Section */}
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-dark mb-3">
                  Calculateur SCG
                </h1>
                <h2 className="h4 text-secondary mb-4">
                  Système de Classement Global
                </h2>
                <p className="lead text-muted mb-4">
                  Estimez votre score pour le programme Entrée Express du Canada
                </p>
              </div>

              {/* Key Stats */}
              <div className="row mb-5">
                <div className="col-md-4 text-center mb-3">
                  <div className="bg-white rounded shadow-sm p-4">
                    <h3 className="h1 fw-bold text-primary mb-2">600+</h3>
                    <p className="text-secondary">Score compétitif</p>
                  </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <div className="bg-white rounded shadow-sm p-4">
                    <h3 className="h1 fw-bold text-primary mb-2">1,200</h3>
                    <p className="text-secondary">Points maximum</p>
                  </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                  <div className="bg-white rounded shadow-sm p-4">
                    <h3 className="h1 fw-bold text-primary mb-2">5+</h3>
                    <p className="text-secondary">Catégories d'évaluation</p>
                  </div>
                </div>
              </div>

              {/* Warning Alert */}
              <div className="alert alert-warning d-flex align-items-center mb-4" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="40" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2 text-warning" viewBox="0 0 16 16">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.964 0L.165 13.233c-.457.778.091 1.767.982 1.767h13.707c.89 0 1.438-.99.982-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1-2.002 0 1 1 0 0 1 2.002 0z"/>
                </svg>
                <div>
                  <strong className='text-danger'> Outil d'estimation uniquement : </strong> L'évaluation officielle est effectuée par l'IRCC.
                </div>
              </div>

              {/* Calculator Form */}
              <div className="bg-white rounded shadow-lg p-5 mb-5">
                <h3 className="h4 fw-bold text-dark mb-4">
                  Calculez vos points SCG
                </h3>
                <ScgForm onSubmit={calculateScore} />
              </div>
            </>
          ) : (
            <>
              {/* Results Section */}
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-3">
                  Vos résultats SCG
                </h2>
              </div>

              <div className="bg-white rounded shadow-lg p-5 mb-5">
                <ScgResults scoreBreakdown={scoreBreakdown} />
              </div>

              <div className="text-center mb-5">
                <button
                  onClick={resetCalculator}
                  className="btn btn-primary btn-lg px-5 py-3"
                >
                  Faire un nouveau calcul
                </button>
              </div>

              {/* Next Steps */}
              <div className="rounded shadow-lg p-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <h3 className="h4 fw-bold mb-4" style={{ color: '#fff' }}>
                  🎯 Prochaines étapes recommandées
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="rounded p-4" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#fff' }}>Profil IRCC</h5>
                      <p className="mb-0" style={{ color: '#fff', opacity: 0.95 }}>Créez votre profil sur le site officiel d'Immigration, Réfugiés et Citoyenneté Canada</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="rounded p-4" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#fff' }}>Documents officiels</h5>
                      <p className="mb-0" style={{ color: '#fff', opacity: 0.95 }}>Préparez vos documents (EDE, tests de langue, certificats d'études)</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="rounded p-4" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#fff' }}>Accompagnement</h5>
                      <p className="mb-0" style={{ color: '#fff', opacity: 0.95 }}>Contactez Septimmigration pour un accompagnement personnalisé</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="rounded p-4" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                      <h5 className="fw-bold mb-2" style={{ color: '#fff' }}>Programmes provinciaux</h5>
                      <p className="mb-0" style={{ color: '#fff', opacity: 0.95 }}>Explorez les programmes pour augmenter vos chances d'immigration</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      
      <FaqAccordion />
    </>
  );
}
