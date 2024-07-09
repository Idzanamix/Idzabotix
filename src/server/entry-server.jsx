import { renderToString } from 'react-dom/server';
import App from '../main';


export const render = () => {
  return renderToString(<App />);
};
