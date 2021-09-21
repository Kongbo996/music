import React, { useState, useEffect, memo } from 'react';
import { renderRoutes } from 'react-router-config';
import classNames from 'classnames';
import { axiosInstance } from '../../request'
import { mapUrl } from '../../request/api'
import CardItem from '../../components/Card';
import { withRouter, RouteComponentProps } from 'react-router-dom';
const Rank: React.FC = (props: typeof RouteComponentProps) => {

  const { history, route } = props
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    axiosInstance.get(mapUrl.rank.getTopList).then((res: any) => {
      setList(res?.list)
      console.log(res)
    })
  }, []);

  
  const handleToLink = (id: number) => {
    console.log(id, props);
    history.push(`/rank/songsheet/${id}`);
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

    return <div className="recommend-page">
    <div className="recommend-list">{renderCard()}</div>
    {renderRoutes(route.routes)}
  </div>;
}

export default memo(withRouter(Rank));
