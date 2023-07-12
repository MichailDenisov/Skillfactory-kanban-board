import React from 'react';
// import ReactDOM from 'react-dom';
// import { hydrate } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import Main from './components/main/Main';
import { BrowserRouter,Route } from 'react-router-dom';

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
    {/* <Routes> */}
      <Route path="/" element={ <App/> }>
      </Route>
    {/* </Routes> */}
  </BrowserRouter>
// </React.StrictMode>,
//   </React.StrictMode>,

// );
// Проект не запускается и падает с ошибкой https://skr.sh/sKkKf8vncYO?a, 
// https://skr.sh/sKkMHQyt2cc?a тут не очень понятно какой компонент Вы отрисовываете,
//  и пропсы передаете в роут. https://skr.sh/sKkTksomjHe?a setTask это функция
//   для преобразования стейта, а Вы туда преедаете компонент, это ошибка.
//    https://skr.sh/sKkQi5kQMii?a тут тоже самое о чем я писал Выше.
//  Компонент App нужно поместить внутрь BrowserRouter.