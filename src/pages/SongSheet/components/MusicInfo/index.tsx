import React, { memo, useState, useEffect } from 'react';
import './index.scss';
interface Props {
  info: any;
}
const MusicInfo: React.FC<Props> = ({ info }) => {
  return (
    <div className="musicinfo-container">
      <div
        className="musicinfo-background"
        style={{
          backgroundImage: `url(${info.coverImgUrl})`,
        }}
      >
        <div className="mask"></div>
      </div>
      <div className="musicinfo-info">
        <div className="musicinfo-img">
          <div className="img-mask"></div>
          <img src={info.coverImgUrl} alt="" />
        </div>
        <div className="info-right">
          <div className="right-title">{info.name}</div>
          <div className="right-author">
            <img src={info?.creator?.avatarUrl} alt="" />
            {info?.creator?.nickname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MusicInfo);
