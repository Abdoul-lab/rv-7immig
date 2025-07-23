

const CallDoSection = () => {
  const cards = [
    {
      image: '/images/call4.jpg',
      title: 'Immigration Resources',
      delay: '100ms',
    },
    {
      image: '/images/call7.jpg',
      title: 'Important Information',
      delay: '200ms',
    },
    {
      image: '/images/call8.jpg',
      title: 'Apply Visa Online',
      delay: '300ms',
    },
  ];

  return (
    <div className="call-do-section">
      <div className="container">
        <div className="row upper6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow slideInUp animated"
              data-wow-delay={card.delay}
              data-wow-duration="1500ms"
            >
              <div className="single-call-do-section-box">
                <div className="call-do-section-thumb">
                  <img src={card.image} alt="" />
                </div>
                <div className="call-do-section-content">
                  <div className="call-do-section-title">
                    <h2>{card.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallDoSection;
