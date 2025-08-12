import React from "react";

export default function FeatureSection() {
  const features = [
    {
      icon: "flaticon-content",
      number: "01",
      title: "Prenez Rendez-Vous",
      content:
        "vous pouvez prendre rendez-vous via l'assistante virtuelle Marie depuis l'onglet 📋prendre RDV, c'est le bouton vert avec ce symbole de messagerie💬 qui se situe au bas à droite la page.",
    },
    {
      icon: "flaticon-lifebuoy",
      number: "02",
      title: "Experts en Immigration",
      content:
        "N’hésitez pas à prendre un rendez-vous pour poser des questions d’ordre générales tout à fait GRATUITEMENT ou prendre un rendez-vous pour une consultation plus approfondie de vos besoins personnels et AVOIR des propositions de programmes d’immigration à votre image.",
    },
    {
      icon: "flaticon-content-writing",
      number: "03",
      title: "Demander un Visa en Ligne",
      content:
        "Chez Septimmigration, vous avez aussi la possibilité d’être accompagné dans votre démarche personnelle de demande d’immigration en ligne.",
    },
  ];

  return (
    <div className="feature-area">
      <div className="container">
        <div className="row margin-top">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="dreamit-feature-box">
                <div className="dreamit-feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="feature-number">
                  <h4>{feature.number}</h4>
                </div>
                <div className="feature-title">
                  <h2>{feature.title}</h2>
                </div>
                <div className="dreamit-feature-content">
                  {feature.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
