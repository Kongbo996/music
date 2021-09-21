import React, { useState, useEffect, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect, useStore } from 'react-redux';
import classNames from 'classnames';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as actions from './store/actionCreators';
import { renderRoutes } from 'react-router-config';
import {
  personalized,
  bannerList,
  playerListTags,
  playListDetail,
} from '../../request/api';
import { getUserAccount } from '../../request/user';
import BannerList from './components/Swiper/index';
import {KeepAlive, useKeepAliveEffect} from 'react-keep-alive';
import CardItem from '../../components/Card';
import '../../../public/swiper.min.css';
import './index.scss';

interface Props {
  count: number;
  changeCount: (val: number) => void;
}

type RecommendProps = Props & typeof RouteComponentProps;

function Recommend(props: RecommendProps) {
  const [list, setList] = useState<any>([]);
  const [banner, setBanner] = useState<any>([]);
  // useKeepAliveEffect(() => {
  //   console.log("mounted");
  //   return () => {
  //     console.log("unmounted");
  //   };
  // });
  const { history, route } = props;
  useEffect(() => {
    getPersonalized();
    getBannerList();
    // playerListTags().then((res) => {
    // });
    // playListDetail().then((res) => {
    // });
  }, []);

  /** 获取推荐榜单列表 */
  const getPersonalized = () => {
    personalized(100)
      .then((res: any) => {
        setList(res.result);
      })
      .catch((err) => {});
  };

  /** 获取轮播列表 */
  const getBannerList = () => {
    bannerList()
      .then((res: any) => {
        setBanner(res?.banners);
      })
      .catch((err) => {});
  };

  const handleToLink = (id: number) => {
    console.log(id, props);
    history.push(`/recommend/songsheet/${id}`);
  };

  const renderCard = () => {
    return list?.map((item: any, idx: number) => {
      return (
        <div
          key={item.id}
          className={classNames('recommend-list-item', {
            isThree: idx % 3 !== 2,
          })}
        >
          <CardItem data={item} onCardId={handleToLink} />
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
      {renderRoutes(route.routes)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(withRouter(Recommend)));
