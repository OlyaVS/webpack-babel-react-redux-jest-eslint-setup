import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App.jsx';

const title = 'New Project seed with React with Webpack and Babel';

MODE === 'development'
  ? console.log(`welcome to development`)
  : console.log(`welcome to production`);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App title={title} />);
