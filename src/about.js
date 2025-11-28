import './styles/tailwind.css';
import './styles/main.scss';

import { Header, setupHeader } from './components/Header';
import { Footer } from './components/Footer';
import { AboutFirm } from './components/AboutFirm';
import { AboutBrand } from './components/AboutBrand';
import { AboutContact } from './components/AboutContact';
import { setupLoading, LoadingHTML } from './utils/loading';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="">
    ${Header()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${AboutFirm()}
    ${AboutBrand()}
    ${AboutContact()}
    
    ${Footer()}
    ${LoadingHTML}
  </div>
`;

setupLoading();
setupHeader();
