import React , { useState } from "react";
import { Link } from "react-router-dom";

const BlogArticle = ({
  title,
  breadcrumb,
  mainImage,
  intro,
  highlights,
  sections,
}) => {
  // Commentaire frontend (désactivé, à activer plus tard)
  
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;
    setComments([...comments, { name, message, date: new Date() }]);
    setName("");
    setMessage("");
  };
  

  return (
    <>
      {/* Section Breadcrumb */}
      <div className="breatcome-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome-content text-center">
                <div className="breatcome-content-title">
                  <h1>{breadcrumb}</h1>
                </div>
                <div className="breatcome-content-text">
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link>{" "}
                      <i className="fas fa-chevron-right"></i>{" "}
                      <span>{breadcrumb}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="blog-area style-two style-three pt-20 pb-60">
        <div className="container">
          <div className="row pt-40">
            {/* Sidebar (idem pour tous les articles) */}
            <div className="col-lg-4">
              <div className="sidebar-box">
                <div className="sidebar-single-category">
                  <ul>
                    <li>
                      <a href="https://www.canada.ca/">
                        site officiel du Canada
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sideber-thumb">
                <img src="/images/sideber.jpg" alt="" />
              </div>
              <div className="sideber-visa-content">
                <div className="thumb-title">
                  <h2>Appelez-nous</h2>
                </div>
                <div className="sideber-visa-icon">
                  <i className="flaticon-process">
                    <span>+ 1 819-919-4544</span>
                  </i>
                </div>
              </div>
              <div className="assesstment-form-box">
                <div className="assesstment-form-title">
                  <h2>Pour un accompagnement personnalisé</h2>
                </div>
                <form action="mail.php">
                  <div className="row mt-20">
                    <div className="col-lg-12">
                      <div className="form-box">
                        <input type="text" name="name" placeholder="votre nom" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <input type="text" name="email" placeholder="email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <input
                          type="text"
                          name="phone"
                          placeholder="numéro de téléphone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <select className="assesstment-select-visa form-box-input">
                        <option>Selectionner Visa</option>
                        <option>Etudiant</option>
                        <option>Visiteur</option>
                        <option>Travailleur</option>
                        <option>Regroupement familial</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box">
                        <textarea
                          name="message"
                          cols="30"
                          rows="5"
                          placeholder="votre message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="assesstment-btn mt-20">
                        <input
                          className="assesstmentt-submit-btn"
                          type="submit"
                          value="Send Request"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contenu de l'article */}
            <div className="col-lg-8 pt-30">
              <div className="tofel-thumb">
                <img src={mainImage} alt={title} />
              </div>
              <div className="tofel-content">
                <div className="tofel-title">
                  <h2>{title}</h2>
                </div>
                <div className="tofel-content-inner">
                  <p>{intro}</p>
                </div>
              </div>

              {/* Points forts (icônes) */}
              <div className="row">
                {highlights &&
                  highlights.map((item, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <div className="tofel-box">
                        <div className="tofel-icon-two">
                          <i className={item.icon}></i>
                        </div>
                        <div className="tofel-title">
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Sections de contenu */}
              {sections &&
                sections.map((section, i) => (
                  <div key={i} className="visa-content mt-40">
                    <div className="visa-title">
                      <h3>{section.heading}</h3>
                    </div>
                    <div className="visa-content-inner">
                     <div dangerouslySetInnerHTML={{ __html: section.text }}></div>
                    </div>
                  </div>
                ))}

              {/* Bouton retour aux articles */}
              <div className="mt-4">
                <Link to="/blog" className="btn btn-secondary">
                  ← Retour aux articles
                </Link>
              </div>

              {/* Commentaires frontend (désactivé, à activer plus tard) */}
              
              <div className="mt-5">
                <h3>Laisser un commentaire</h3>
                <form onSubmit={handleCommentSubmit} className="mb-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Votre commentaire"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </form>

                <h4>Commentaires ({comments.length})</h4>
                {comments.length === 0 && <p>Aucun commentaire pour le moment.</p>}
                <ul className="list-group">
                  {comments.map((c, i) => (
                    <li key={i} className="list-group-item">
                      <strong>{c.name}</strong>{" "}
                      <span className="text-muted small">
                        ({c.date.toLocaleString()})
                      </span>
                      <p>{c.message}</p>
                    </li>
                  ))}
                </ul>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
