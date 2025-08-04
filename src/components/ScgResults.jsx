import React from 'react';

export default function ScgResults({ scoreBreakdown }) {
  const { total, base, spouse, combined, additional } = scoreBreakdown;

  return (
    <div className="mt-8 p-4 bg-white rounded shadow border">
      <h2 className="text-xl font-semibold mb-4 text-green-700">
        🎉 Résultat de votre profil SCG : <span className="text-black">{total} points</span>
      </h2>

      <div className="space-y-3 text-sm text-gray-800">
        <div>
          <h3 className="font-medium text-green-700">🎯 Facteurs de base : {base} pts</h3>
          <p>Basés sur votre âge, niveau d’études, compétence linguistique, et expérience au Canada.</p>
        </div>

        {spouse > 0 && (
          <div>
            <h3 className="font-medium text-green-700">❤️ Facteurs du conjoint : {spouse} pts</h3>
            <p>Attribués selon les études, la langue et l’expérience du conjoint.</p>
          </div>
        )}

        {combined > 0 && (
          <div>
            <h3 className="font-medium text-green-700">🧩 Facteurs combinés : {combined} pts</h3>
            <p>Combinations de vos études/langue/expérience selon les synergies prévues dans le SCG.</p>
          </div>
        )}

        {additional > 0 && (
          <div>
            <h3 className="font-medium text-green-700">🏅 Facteurs additionnels : {additional} pts</h3>
            <p>Offre d’emploi, nomination provinciale, études au Canada, langue seconde, frère/soeur au Canada.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded text-sm">
        {total >= 470 ? (
          <p>✨ Votre score est compétitif ! Vous avez de bonnes chances de recevoir une invitation. Pensez à créer un profil dans Entrée express.</p>
        ) : (
          <p>📉 Votre score est en dessous des seuils actuels (souvent autour de 470-490). Vous pouvez l’améliorer avec :
            <ul className="list-disc list-inside mt-1">
              <li>un meilleur score linguistique (CLB 9 ou 10)</li>
              <li>des études supplémentaires ou une EDE plus favorable</li>
              <li>une nomination provinciale</li>
              <li>ou une expérience canadienne additionnelle</li>
            </ul>
          </p>
        )}
      </div>
    </div>
  );
}
