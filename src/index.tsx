import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/index';
import stores from './store/index';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Provider as KeepAliveProvider } from 'react-keep-alive'
import './style/App.scss';
import './style/index.scss';
import './style/iconfont.scss';
import '../public/antd-mobile.min.css'; 
ReactDOM.render(
  <Provider store={stores}>
    <Router>
      <KeepAliveProvider include={['recommend', 'singers', 'rank']}>
        {renderRoutes(routes)}
      </KeepAliveProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
