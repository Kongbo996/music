import React, { useState, useEffect, memo } from 'react';
import { CardItem } from '../define';
import LazyLoad from 'react-lazyload';
import './index.scss';

interface IProps {
  data: CardItem;
  onCardId: (id: number) => void;
}

export default memo((props: IProps) => {
  const { data, onCardId } = props;
  return (
    <div
      className="recommend-item"
      onClick={() => {
        onCardId(data.id);
      }}
    >
      <LazyLoad
        offset={20}
        placeholder={
          <img
            width="100%"
            height="100%"
            src={require('../../../public/imgs/lazyload.png')}
            alt=""
          />
        }
      >
        <img src={data?.picUrl || data?.coverImgUrl+ '?param=300x300'} alt="" />
      </LazyLoad>
      <div className="item-title">{data.name}</div>
    </div>
  );
});
