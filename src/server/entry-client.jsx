import { hydrateRoot } from 'react-dom/client';
import App from '../main';

hydrateRoot(document.getElementById('app'), <App />);
