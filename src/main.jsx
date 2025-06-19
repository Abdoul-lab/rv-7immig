import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './style.css';

import './assets/css/bootstrap.min.css';
// import './assets/css/owl.carousel.min.css';
import './assets/js/owl.carousel.min.js';
import './assets/js/jquery.counterup.min.js';
import './assets/js/waypoints.min.js';

import './assets/js/imagesloaded.pkgd.min.js';
import './venobox/venobox.js';
import './assets/js/ajax-mail.js';
import './assets/js/animated-text.js';
import './assets/js/jquery.scrollUp.js';

import './assets/js/jquery.nivo.slider.pack.js';
import './assets/js/jquery.meanmenu.js';

import './assets/js/main.js';

import './assets/css/responsive.css';
import './assets/css/nivo-slider.css';
import './assets/css/animate.css';
import './assets/css/animated-text.css';
import './assets/css/all.min.css';
import './assets/css/flaticon.css';
import './assets/css/theme-default.css';
import './assets/css/meanmenu.min.css';
import './assets/css/owl.transitions.css';
import './venobox/venobox.css';
import './assets/css/widget.css';

// Si vous avez besoin de Modernizr
import './assets/js/vendor/modernizr-3.5.0.min.js';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/rv-7immig">
    <App />
  </BrowserRouter>
);
