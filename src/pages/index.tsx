import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './index.scss';

function Home(props: any) {
  const { route } = props;
  const [open, setOpen] = useState(false);
  const renderDrawer = () => {
    return <div>drawer</div>;
  };
  const tabs = [{ title: 'recommend', sub: '1' },
  { title: 'singers', sub: '2' },
  { title: 'rank', sub: '3' }]
  return (
    <div className="page">
      <div className="title-bg">
        <span className="iconfont menu" onClick={() => setOpen(!open)}>
          {/* 左侧抽屉 */}
        </span>
        <span className="title">音乐页</span>
        <span className="iconfont search">&#xe62b;</span>
      </div>
      <div className="page-nav">
        <NavLink to="/recommend" activeClassName="selected">
          <span> 推荐 </span>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <span> 歌手 </span>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <span> 排行榜 </span>
        </NavLink>
      </div>
      <div className="page-content">{renderRoutes(route.routes)}</div>
    </div>
  );
}
export default Home;
