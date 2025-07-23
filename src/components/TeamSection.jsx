const TeamSection = () => (
  <div className="team-member-area style-three pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5>Equipe professionnelle</h5>
              <h2 className="text-black">Rencontrez notre équipe</h2>
              <div className="dreamit-section-bar center mt-3"></div>
            </div>
          </div>
          <div className="row">
            {[
              { name: "Mme Dodde", role: "Gestionnaire Principal", img: "/images/team3.jpg" },
              { name: "Alexandre Dodde", role: "Manager général", img: "/images/team2.jpg" },
              { name: "Mme Tchétché", role: "Comptable", img: "/images/team1.jpg" },
              { name: "Mutiu Abayomi", role: "Responsable informatique", img: "/images/team2.jpg" },
            ].map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="dreamit-single-team">
                  <div className="team-member-thumb">
                    <img src={member.img} alt={member.name} />
                    <div className="dreamit-team-social-icon">
                      <div className="dreamit-team-social-icon-inner">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="dreamit-team-content">
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
);
export default TeamSection;