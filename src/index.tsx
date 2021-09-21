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
import { Provider as KeepAliveProvider, KeepAlive } from 'react-keep-alive'
import './style/App.scss';
import './style/index.scss';
import './style/iconfont.scss';
import '../public/antd-mobile.min.css'; 
// import 'antd-mobile/dist/antd-mobile.css';   
// import stores from './stores/index';
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
