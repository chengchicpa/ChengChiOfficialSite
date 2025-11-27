import './styles/tailwind.css';
import './styles/main.scss';

import { Header, setupHeader } from './components/Header';
import { Footer } from './components/Footer';
import { FirmIntro } from './components/FirmIntro';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { ContactSection } from './components/ContactSection';
import { setupLoading, LoadingHTML } from './utils/loading';

const app = document.getElementById('app');

app.innerHTML = `
  <div class="">
    ${Header()}
    
    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    ${FirmIntro()}
    ${BrandPhilosophy()}
    ${ContactSection()}
    
    ${Footer()}
    ${LoadingHTML}
  </div>
`;

setupLoading();
setupHeader();
