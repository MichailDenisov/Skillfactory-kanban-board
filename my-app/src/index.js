import React from 'react';
// import ReactDOM from 'react-dom';
// import { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import Main from './components/main/Main';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

// const container = document.getElementById('root');
// hydrate(<App tab="home" />, container);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// eslint-disable-next-line no-undef
// ReactDOM.render(
//   <React.StrictMode>
//       <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> }>
      </Route>
    </Routes>
  </BrowserRouter>
// </React.StrictMode>,
//   </React.StrictMode>,

// );