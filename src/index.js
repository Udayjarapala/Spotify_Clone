import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer,{initialstate} from './Reducer';
// import { createRoot } from 'react-dom/client';


// const root = createRoot(document.getElementById('root'));
// root.render(<App />);


ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialstate={initialstate} reducer={reducer}>
      <App/>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);


