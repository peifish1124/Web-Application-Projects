import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import { ScoreCardProvider } from './hooks/useScoreCard';

ReactDOM.render(
  <React.StrictMode>
    <ScoreCardProvider>
      <App />
    </ScoreCardProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

