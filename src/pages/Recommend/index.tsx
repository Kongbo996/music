import React, { useState, useEffect, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect, useStore } from 'react-redux';
import classNames from 'classnames';
import { Dispatch } from 'redux';
import * as actions from './store/actionCreators';
import {
  personalized,
  bannerList,
  playerListTags,
  playListDetail,
} from '../../request/api';
import BannerList from './components/Swiper/index';
import CardItem from './components/Card';
import '../../../public/swiper.min.css';
import './index.scss';
interface Props {
  count: number;
  changeCount: (val: number) => void;
}

function Recommend(props: Props) {
  const [list, setList] = useState<any>([]);
  const [banner, setBanner] = useState<any>([]);
  useEffect(() => {
    getPersonalized();
    getBannerList();
    playerListTags().then((res) => {
      console.log(res);
    });
    playListDetail().then((res) => {
      console.log('歌单详情: ', res);
    });
  }, []);

  /** 获取推荐榜单列表 */
  const getPersonalized = () => {
    personalized(100)
      .then((res: any) => {
        console.log(res.result);
        setList(res.result);
      })
      .catch((err) => {});
  };

  /** 获取轮播列表 */
  const getBannerList = () => {
    bannerList()
      .then((res: any) => {
        console.log('banner: ', res);
        setBanner(res?.banners);
      })
      .catch((err) => {});
  };

  const renderCard = () => {
    console.log('list', list);
    return list?.map((item: any, idx: number) => {
      return (
        <div
          key={item.id}
          className={classNames('recommend-list-item', {
            isThree: idx % 3 !== 2,
          })}
        >
          <CardItem data={item} idx={idx} />
        </div>
      );
    });
  };
  const { count, changeCount } = props;
  return (
    <div className="recommend-page">
      <div className="recommend-banner">
        <BannerList bannerData={banner} />
      </div>
      <div className="recommend-title">推荐歌单</div>
      <div className="recommend-list">{renderCard()}</div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    ...state.recommend,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.RecommendAction>) => {
  return {
    changeCount: (data: number) => dispatch(actions.changeRecommendCount(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
