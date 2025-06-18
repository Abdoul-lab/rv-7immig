import React from "react";
import { Link } from "react-router-dom";
// Assure-toi d'importer ton fichier CSS si nécessaire

const Canada = () => {
  return (
    <>
      {/* Section Breadcrumb */}
      <div className="breatcome-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breatcome-content text-center">
                <div className="breatcome-content-title">
                  <h1>Canada</h1>
                </div>
                <div className="breatcome-content-text">
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link> <i className="fas fa-chevron-right"></i> <span>Canada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area style-two style-three pt-20 pb-60">
  <div className="container">
    <div className="row pt-40">
      <div className="col-lg-4">
        <div className="sidebar-box">
          <div className="sidebar-single-category">
            <ul>
              <li><a href="Canada.html">Canada<i className="fas fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="sideber-thumb">
          <img src="assets/images/sideber.jpg" alt="" />
        </div>
        <div className="sideber-visa-content">
          <div className="thumb-title">
            <h2>Appelez-nous</h2>
          </div>
          <div className="sideber-visa-icon">
            <i className="flaticon-process"><span>+ 1 819-919-4544</span></i>
          </div>
        </div>
        <div className="assesstment-form-box">
          <div className="assesstment-form-title">
            <h2>Evaluation gratuite</h2>
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
                  <input type="text" name="name" placeholder="email" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-box">
                  <input type="text" name="name" placeholder="numéro de téléphone" />
                </div>
              </div>
              <div className="col-lg-12">
                <select className="assesstment-select-visa form-box-input">
                  <option>Selectionner Visa</option>
                  <option>Etudiant</option>
                  <option>Visiteur</option>
                  <option>Travailleur</option>
                  <option>Regroupement familial</option>
                </select>
              </div>
              <div className="col-lg-12">
                <div className="form-box">
                  <textarea name="massage" cols="30" rows="5" placeholder="votre message"></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="assesstment-btn mt-20">
                  <input className="assesstmentt-submit-btn" type="submit" value="Send Request" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-8 pt-30">
        <div className="tofel-thumb">
          <img src="assets/images/education.jpg" alt="" />
        </div>
        <div className="tofel-content">
          <div className="tofel-title">
            <h2>Travailler, Vivre au Canada</h2>
          </div>
          <div className="tofel-content-inner">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="tofel-box">
              <div className="tofel-icon-two">
                <i className="flaticon-laptop"></i>
              </div>
              <div className="tofel-title">
                <h4>Grande université</h4>
                <p>It has survived not only five centurie</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tofel-box">
              <div className="tofel-icon-two">
                <i className="flaticon-web"></i>
              </div>
              <div className="tofel-title">
                <h4>Visa étudiant</h4>
                <p>It has survived not only five centurie</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 style-two">
            <div className="tofel-box">
              <div className="tofel-icon-two">
                <i className="flaticon-clock"></i>
              </div>
              <div className="tofel-title">
                <h4>Aide d'experts</h4>
                <p>It has survived not only five centurie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="visa-content">
              <div className="visa-title">
                <h3>Pourquoi étudier au Canada?</h3>
              </div>
              <div className="visa-content-inner">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 pt-20">
            <div className="tofel-thumb-2">
              <img src="assets/images/tofel2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 pt-20">
            <div className="tofel-content d-flex">
              <div className="tofel-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="tofel-content-inner pl-4">
                <p>Maecenas sed lorem eu dolor sodales</p>
              </div>
            </div>
            <div className="tofel-content d-flex mb-10">
              <div className="tofel-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="tofel-content-inner pl-4">
                <p>Aliquam sodales ipsum eu ante</p>
              </div>
            </div>
            <div className="tofel-content d-flex">
              <div className="tofel-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="tofel-content-inner pl-4">
                <p>Cras tristique elit nec ligula</p>
              </div>
            </div>
            <div className="tofel-content d-flex">
              <div className="tofel-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="tofel-content-inner pl-4">
                <p>Nam hendrerit tortor vel mi semper</p>
              </div>
            </div>
            <div className="tofel-content d-flex">
              <div className="tofel-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="tofel-content-inner pl-4">
                <p>Aenean at sem vel felis blandit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="visa-content">
              <div className="australia-title">
                <h3>Avantages du Visa étudiant</h3>
              </div>
              <div className="visa-content-inner">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg4">
          <div className="australia-title mt-40">
            <h3>Bénéficier</h3>
          </div>
          <div className="tofel-content d-flex">
            <div className="tofel-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="tofel-content-inner pl-4">
              <p>Maecenas sed lorem eu dolor sodales</p>
            </div>
          </div>
          <div className="tofel-content d-flex mb-10">
            <div className="tofel-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="tofel-content-inner pl-4">
              <p>Aliquam sodales ipsum eu ante</p>
            </div>
          </div>
          <div className="tofel-content d-flex">
            <div className="tofel-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="tofel-content-inner pl-4">
              <p>Cras tristique elit nec ligula</p>
            </div>
          </div>
          <div className="tofel-content d-flex">
            <div className="tofel-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="tofel-content-inner pl-4">
              <p>Nam hendrerit tortor vel mi semper</p>
            </div>
          </div>
          <div className="tofel-content d-flex">
            <div className="tofel-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="tofel-content-inner pl-4">
              <p>Aenean at sem vel felis blandit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default Canada;
