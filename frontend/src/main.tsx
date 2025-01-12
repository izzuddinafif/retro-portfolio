import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const initializeMatomo = () => {
  const _paq = (window._paq = window._paq || []);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function () {
    const u = 'https://matomo.izzudd.in/';
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '1']);
    const d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = u + 'matomo.js';
    s.parentNode?.insertBefore(g, s);
  })();
};

initializeMatomo();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
