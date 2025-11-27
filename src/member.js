import './styles/tailwind.css';
import './styles/main.scss';
import { Header, setupHeader } from './components/Header';
import { Footer } from './components/Footer';
import { MemberProfile } from './components/MemberProfile';
import { setupLoading, LoadingHTML } from './utils/loading';

const app = document.querySelector('#app');
const memberId = app.dataset.memberId;

app.innerHTML = `
  ${Header()}
  
  <!-- Spacer for fixed header -->
  <div class="hidden md:block h-16"></div>

  <main>
    ${MemberProfile(memberId)}
  </main>
  ${Footer()}
  ${LoadingHTML}
`;

setupLoading();
setupHeader();
