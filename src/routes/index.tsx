import * as React from 'react';
import { Redirect, Router, Switch, Route, IndexRoute } from 'react-router-dom';
import Recommend from '../pages/Recommend';
import Singers from '../pages/Singers';
import Rank from '../pages/Rank';
import Home from '../pages/index';
import SongSheet from '../pages/SongSheet/index';
import Login from '../pages/Login/index';
export default [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />,
      },

      {
        path: '/recommend',
        name: 'recommend',
        component: Recommend,
        routes: [
          {
            path: '/recommend/songsheet/:id',
            component: SongSheet,
          },
        ],
      },
      {
        path: '/singers',
        name: 'singers',
        component: Singers,
      },
      {
        path: '/rank',
        name: 'rank',
        component: Rank,
        routes: [
          {
            path: '/rank/songsheet/:id',
            component: SongSheet,
          },
        ],
      },
    ],
  },
];
