import React, { useState } from 'react';

const Contact = () => {
  // Définition des états pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    web: '',
    message: ''
  });

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Soumettre le formulaire (fonction simple ici, vous pouvez la personnaliser)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez gérer ici l'envoi du formulaire
    console.log('Form data submitted:', formData);
  };

  return (
    <>
                <div className="breatcome-area d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breatcome-content text-center">
          <div className="breatcome-content-title">
            <h1>Contact</h1>
          </div>
          <div className="breatcome-content-text">
            <ul>
              <li>
                <a href="index.html">Accueil </a>
                <i className="fas fa-chevron-right"></i> <span>CONTACT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/*==================================================*/}
      {/* start Septimmigration appointment Area */}
      {/*==================================================*/}
      <div className="appointment-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Entrer en contact</h3>
                </div>
                <form id="contact_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Naom"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="adresse email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Numéro de téléphone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="web"
                          placeholder="site internet"
                          value={formData.web}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Votre Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="quote_btn">
                        <button className="btn" type="submit">
                          Envoyer un message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="form-message"></p>
              </div>
            </div>
            <div className="col-lg-6 pl-0 pr-0">
              <div className="cda-content">
                {/* Adresse */}
                <div className="call-do-action-box">
                  <div className="cda-single-content d-flex hr">
                    <div className="cda-icon pr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="cda-content-inner">
                      <h4>Localisation</h4>
                      <p>
                        20 Rue Wellington Sud, Sherbrooke, Québec, Canada, J1H 5C7,
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                {/* Numéro de téléphone */}
                <div className="call-do-action-box">
                  <div className="cda-single-content d-flex hr">
                    <div className="cda-icon pr-4">
                      <i className="fas fa-tty"></i>
                    </div>
                    <div className="cda-content-inner">
                      <h4>Numéro de téléphone</h4>
                      <p>
                        + 1 819-919-4544,
                        <br />
                        + 225 070-787-7956
                      </p>
                    </div>
                  </div>
                </div>
                {/* Adresse mail */}
                <div className="call-do-action-box">
                  <div className="cda-single-content d-flex hr">
                    <div className="cda-icon pr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="cda-content-inner">
                      <h4>Adresse mail</h4>
                      <p>info@septimmigration.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* start Septimmigration map Area */}
      {/*==================================================*/}
      <div className="map-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 pt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649222.671397079!2d87.519828831783!3d23.50527941402398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1608008266718!5m2!1sen!2sbd"
                width="1920"
                height="360"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
