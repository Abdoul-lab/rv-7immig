import React from 'react';

export default function ScgResults({ scoreBreakdown }) {
  const { total, base, spouse, combined, additional } = scoreBreakdown;

  const getScoreColor = (score) => {
    if (score >= 470) return 'text-success';
    if (score >= 400) return 'text-warning';
    return 'text-danger';
  };

  const getScoreMessage = (score) => {
    if (score >= 500) {
      return {
        icon: '🎉',
        title: 'Excellent score !',
        message: 'Votre score est très compétitif. Vous avez d\'excellentes chances de recevoir une invitation lors des prochains tirages.',
        color: 'bg-success bg-opacity-10 border border-success text-white'
      };
    } else if (score >= 470) {
      return {
        icon: '✨',
        title: 'Bon score !',
        message: 'Votre score est dans la fourchette compétitive. Surveillez les tirages réguliers d\'Entrée Express.',
        color: 'bg-success bg-opacity-10 border border-success text-white'
      };
    } else if (score >= 400) {
      return {
        icon: '⚠️',
        title: 'Score modéré',
        message: 'Votre score pourrait être amélioré. Considérez les programmes provinciaux ou l\'amélioration de vos compétences.',
        color: 'bg-warning bg-opacity-10 border border-warning text-white'
      };
    } else {
      return {
        icon: '📈',
        title: 'Score à améliorer',
        message: 'Votre score nécessite des améliorations significatives. Consultez nos conseils ci-dessous.',
        color: 'bg-danger bg-opacity-10 border border-danger text-white'
      };
    }
  };

  const scoreInfo = getScoreMessage(total);

  return (
    <div className="bg-white rounded shadow p-4 p-md-5">
      <div className="text-center mb-4">
        <div className="display-3 mb-3">{scoreInfo.icon}</div>
        <h2 className="fw-bold">
          Votre score SCG : <span className={getScoreColor(total)}>{total} points</span>
        </h2>
        <p className="text-muted">sur un maximum de 1200 points</p>
      </div>

      <div className={`rounded p-3 mb-5 ${scoreInfo.color}`}>
        <h4 className="fw-semibold mb-2">{scoreInfo.title}</h4>
        <p className="mb-0">{scoreInfo.message}</p>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h5 className="fw-semibold border-bottom pb-2 mb-3">Détail des points</h5>

          <div className="d-grid gap-3">
            <div className="d-flex justify-content-between align-items-center p-3 bg-primary bg-opacity-10 rounded">
              <span className="fw-medium text-white">🎯 Facteurs de base</span>
              <span className="fw-bold text-white">{base} pts</span>
            </div>

            {spouse > 0 && (
              <div className="d-flex justify-content-between align-items-center p-3 bg-info bg-opacity-10 rounded">
                <span className="fw-medium text-white">❤️ Facteurs du conjoint</span>
                <span className="fw-bold text-white">{spouse} pts</span>
              </div>
            )}

            {combined > 0 && (
              <div className="d-flex justify-content-between align-items-center p-3 bg-warning bg-opacity-10 rounded">
                <span className="fw-medium text-white">🔗 Transférabilité</span>
                <span className="fw-bold text-white">{combined} pts</span>
              </div>
            )}

            {additional > 0 && (
              <div className="d-flex justify-content-between align-items-center p-3 bg-success bg-opacity-10 rounded">
                <span className="fw-medium text-white">🏅 Facteurs additionnels</span>
                <span className="fw-bold text-white">{additional} pts</span>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="fw-semibold border-bottom pb-2 mb-3">Conseils d'amélioration</h5>

          <div className="d-grid gap-3 text-sm">
            {total < 470 && (
              <>
                <div className="p-3 bg-primary bg-opacity-10 rounded">
                  <h6 className="fw-medium mb-1">📚 Améliorer la langue</h6>
                  <p className="mb-0 text-white">Visez CLB 9-10 dans toutes les compétences pour maximiser vos points.</p>
                </div>

                <div className="p-3 bg-success bg-opacity-10 rounded">
                  <h6 className="fw-medium mb-1">🎓 Études supplémentaires</h6>
                  <p className="mb-0 text-white">Un master ou doctorat peut considérablement augmenter votre score.</p>
                </div>

                <div className="p-3 bg-info bg-opacity-10 rounded">
                  <h6 className="fw-medium mb-1">🏛️ Nomination provinciale</h6>
                  <p className="mb-0 text-white">Une nomination PCP ajoute 600 points et garantit pratiquement une invitation.</p>
                </div>
              </>
            )}

            <div className="p-3 bg-warning bg-opacity-10 rounded">
              <h6 className="fw-medium mb-1">💼 Expérience canadienne</h6>
              <p className="mb-0 text-white">Travailler au Canada augmente significativement vos chances.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light rounded p-4">
        <h5 className="fw-semibold mb-2">📊 Historique des tirages récents</h5>
        <p className="text-muted small">
          Consultez <a href='https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/rondes-invitations.html' target="_blank" rel="noopener noreferrer">le site officiel d'IRCC</a> pour les données exactes.
        </p>
      </div>
    </div>
  );
}
