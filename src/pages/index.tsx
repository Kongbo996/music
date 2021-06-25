import React from "react";
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './index.scss';

function Home(props: any){
  const { route } = props;

  return (
    <div className="page">
      <div className="page-title">
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">音乐页</span>
        <span className="iconfont search">&#xe62b;</span>
      </div>
      <div className="page-nav">
        <NavLink to="/recommend" activeClassName="selected"><span > 推荐 </span></NavLink>
        <NavLink to="/singers" activeClassName="selected"><span > 歌手 </span></NavLink>
        <NavLink to="/rank" activeClassName="selected"><span > 排行榜 </span></NavLink>
      </div>
      <div className="page-content">
      { renderRoutes(route.routes) }
      </div>
    </div>
  );
}
export default Home;