import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { LocaleProvider } from 'antd';
// import { Provider } from 'mobx-react';
// import zhCN from 'antd/lib/locale-provider/zh_CN';
import routes from './routes/index';
import stores from './store/index';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import './App.scss'
// import stores from './stores/index';
// import App from './App';
// import User from './routes/User';

ReactDOM.render(
  <Provider store = {stores}>
    <Router>
      {renderRoutes(routes)}
    </Router>,
  </Provider>,
  document.getElementById('root')
);
