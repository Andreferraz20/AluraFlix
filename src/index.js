import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import CadastroVideo from './components/Pages/Cadastro/Video';

const Pagina404 = _ => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route component={ Pagina404 } />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

