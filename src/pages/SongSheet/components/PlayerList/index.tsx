/**
 * 播放列表 当前播放
 */

import React, { useState, useEffect, useMemo } from 'react';
import { mapUrl } from '../../../../request/api';
import { axiosInstance } from '../../../../request';
import classNames from 'classnames';
import './index.scss';

interface Props {
  onClose: () => void
}

export default ( { onClose } ) => {
  /** 播放记录列表 */
  const [record, setRecord] = useState<any>([]);

  /** 全部清空 */
  const handleDelete = () => {};

  useEffect(() => {
    axiosInstance
      .get(mapUrl.song.getRecord, { params: { type: 1 } })
      .then((res: any) => {
        console.log(res);
        setRecord(res?.weekData);
      });
  }, []);

  const renderRecordList = useMemo(() => {
    return record.map((item) => {
      return (
        <div className="sort-list-item" key={item.song.id}>
          <div className={classNames('item-left')}>
            <span>{item?.song?.name} - {item?.song?.ar?.[0]?.name}</span>
          </div>
          <div className="item-right">
            <i className="iconfont icon-guanbi" />
          </div>
        </div>
      );
    });
  }, [record]);

  return (
    <div className="song-list-setting" onClick={onClose}>
      <div className="song-list-sort">
        <div className="sort-title">当前播放</div>
        <div className="sort-setting">
          <div className="sort-operate">
            <span onClick={handleDelete}>随机播放</span>
            <span onClick={handleDelete}>收藏全部</span>
          </div>
          <div className="sort-delete">
            <i onClick={handleDelete} className="iconfont icon-shanchu" />
          </div>
        </div>
        <div className="sort-list">{renderRecordList}</div>
      </div>
    </div>
  );
};
