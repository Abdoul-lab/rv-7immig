import React from 'react';

export default function ScgResults({ scoreBreakdown }) {
  const { total, base, spouse, combined, additional } = scoreBreakdown;

  const getScoreColor = (score) => {
    if (score >= 470) return 'text-green-600';
    if (score >= 400) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score) => {
    if (score >= 500) {
      return {
        icon: '🎉',
        title: 'Excellent score !',
        message: 'Votre score est très compétitif. Vous avez d\'excellentes chances de recevoir une invitation lors des prochains tirages.',
        color: 'bg-green-50 border-green-200 text-green-800'
      };
    } else if (score >= 470) {
      return {
        icon: '✨',
        title: 'Bon score !',
        message: 'Votre score est dans la fourchette compétitive. Surveillez les tirages réguliers d\'Entrée Express.',
        color: 'bg-green-50 border-green-200 text-green-800'
      };
    } else if (score >= 400) {
      return {
        icon: '⚠️',
        title: 'Score modéré',
        message: 'Votre score pourrait être amélioré. Considérez les programmes provinciaux ou l\'amélioration de vos compétences.',
        color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
      };
    } else {
      return {
        icon: '📈',
        title: 'Score à améliorer',
        message: 'Votre score nécessite des améliorations significatives. Consultez nos conseils ci-dessous.',
        color: 'bg-red-50 border-red-200 text-red-800'
      };
    }
  };

  const scoreInfo = getScoreMessage(total);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{scoreInfo.icon}</div>
        <h2 className="text-3xl font-bold mb-2">
          Votre score SCG : <span className={getScoreColor(total)}>{total} points</span>
        </h2>
        <p className="text-gray-600">sur un maximum de 1200 points</p>
      </div>

      <div className={`rounded-lg border p-4 mb-6 ${scoreInfo.color}`}>
        <h3 className="font-semibold text-lg mb-2">{scoreInfo.title}</h3>
        <p>{scoreInfo.message}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Détail des points
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
              <span className="font-medium">🎯 Facteurs de base</span>
              <span className="font-bold text-blue-600">{base} pts</span>
            </div>

            {spouse > 0 && (
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                <span className="font-medium">❤️ Facteurs du conjoint</span>
                <span className="font-bold text-purple-600">{spouse} pts</span>
              </div>
            )}

            {combined > 0 && (
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                <span className="font-medium">🔗 Transférabilité</span>
                <span className="font-bold text-orange-600">{combined} pts</span>
              </div>
            )}

            {additional > 0 && (
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-medium">🏅 Facteurs additionnels</span>
                <span className="font-bold text-green-600">{additional} pts</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Conseils d'amélioration
          </h3>
          
          <div className="space-y-3 text-sm">
            {total < 470 && (
              <>
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-medium text-blue-800 mb-1">📚 Améliorer la langue</h4>
                  <p className="text-blue-700">Visez CLB 9-10 dans toutes les compétences pour maximiser vos points.</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-medium text-green-800 mb-1">🎓 Études supplémentaires</h4>
                  <p className="text-green-700">Un master ou doctorat peut considérablement augmenter votre score.</p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded">
                  <h4 className="font-medium text-purple-800 mb-1">🏛️ Nomination provinciale</h4>
                  <p className="text-purple-700">Une nomination PCP ajoute 600 points et garantit pratiquement une invitation.</p>
                </div>
              </>
            )}
            
            <div className="p-3 bg-yellow-50 rounded">
              <h4 className="font-medium text-yellow-800 mb-1">💼 Expérience canadienne</h4>
              <p className="text-yellow-700">Travailler au Canada augmente significativement vos chances.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          📊 Historique des tirages récents
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Scores minimaux des derniers tirages Entrée Express (indicatif) :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-3 rounded border">
            <div className="font-bold text-lg">485</div>
            <div className="text-xs text-gray-500">Dernier tirage</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="font-bold text-lg">478</div>
            <div className="text-xs text-gray-500">Moyenne 2024</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="font-bold text-lg">490</div>
            <div className="text-xs text-gray-500">Maximum 2024</div>
          </div>
          <div className="bg-white p-3 rounded border">
            <div className="font-bold text-lg">464</div>
            <div className="text-xs text-gray-500">Minimum 2024</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          * Ces données sont approximatives et peuvent changer. Consultez le site officiel d'IRCC pour les données exactes.
        </p>
      </div>
    </div>
  );
}