import './styles/tailwind.css';
import './styles/main.scss';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Slogan } from './components/Slogan';
import { About } from './components/About';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="">
    ${Header()}
    ${Hero()}
    ${Slogan()}
    ${About()}
    ${Team()}
    ${Services()}
    ${Footer()}
    <div id="loading">
      <span class="loader"></span>
    </div>
  </div>
`;

import { setupLoading } from './utils/loading';
import { setupHeader } from './components/Header';

setupLoading();
setupHeader();
