
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import './style.css';

import './assets/css/bootstrap.min.css';
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
