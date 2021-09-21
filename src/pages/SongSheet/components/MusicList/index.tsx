import React, { memo } from 'react';
import './index.scss';

interface Props {
  list: any;
  onSong: (record: any) => void;
}
const MusicList: React.FC<Props> = ({ list, onSong }) => {
  console.log('musicList:', list);
  const renderList = () => {
    return list.map((item, idx) => {
      return (
        <div className="music-item" key={item.id}>
          <div className="music-num">{idx + 1}</div>
          <div
            className="music-info"
            onClick={() => {
              onSong(item);
            }}
          >
            <div className="info-title">{item.name}</div>
            <div className="info-name">
              {item.ar[0].name} - {item.name}
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="music-list-container">{renderList()}</div>;
};

export default memo(MusicList);
