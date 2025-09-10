import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MiniFaq = () => {
  return (
    <section style={{ padding: '2rem 1rem', background: '#f9fafb' }}>
      <h2 style={{ color: '#10B981', fontSize: '1.5rem', marginBottom: '1rem' }}>
        ❓ Questions fréquentes sur l'immigration
      </h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0, fontSize: '1rem', color: '#374151' }}>
        <li>📌 Quels sont les délais pour immigrer au Canada ?</li>
        <li>📌 Combien coûte un visa d'études ou de travail ?</li>
        <li>📌 Dois-je passer un test de langue (TEF, IELTS) ?</li>
        <li>📌 Puis-je venir au Canada avec ma famille ?</li>
      </ul>
      <HashLink
        to="/scgCalculator#faq"
        style={{
          marginTop: '1rem',
          display: 'inline-block',
          textDecoration: 'none',
          backgroundColor: '#10B981',
          color: 'white',
          padding: '10px 16px',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}
      >
        Voir toutes les questions →
      </HashLink>
    </section>
  );
};

export default MiniFaq;
