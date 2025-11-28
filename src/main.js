import './styles/tailwind.css';
import './styles/main.scss';

import { Header } from './components/Header';
import { IndexHero } from './components/IndexHero';
import { IndexValues } from './components/IndexValues';
import { IndexAbout } from './components/IndexAbout';
import { IndexTeam } from './components/IndexTeam';
import { IndexServices } from './components/IndexServices';
import { Footer } from './components/Footer';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="">
    ${Header()}
    ${IndexHero()}
    ${IndexValues()}
    ${IndexAbout()}
    ${IndexTeam()}
    ${IndexServices()}
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
