/**
 * 歌单列表
 */

import React, { useState, useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Header } from '../../components/index';
import { playListDetail } from '../../request/api';
import {
  MusicList,
  MusicInfo,
  MiniPlayer,
  MaxPlayer,
  PlayerList,
} from './components';
import { mapUrl } from '../../request/api';
import { axiosInstance } from '../../request';
import './index.scss';

interface Props {}

type SongSheetProps = Props & typeof RouteComponentProps;
const SongSheet: React.FC<SongSheetProps> = ({ history, match }) => {
  const [showStatus, setShowStatus] = useState<boolean>(true);
  /** 歌曲列表 */
  const [musicList, setMusicList] = useState<any>([]);
  /** 歌单详情 */
  const [playlist, setPlayList] = useState<any>({});
  /** 点击的歌曲url的信息集合 */
  const [params, setParams] = useState<any>({});
  const [moreSetting, setMoreSetting] = useState<boolean>(false);
  useEffect(() => {
    playListDetail(match.params.id).then((res: any) => {
      console.log(res);
      setMusicList(res.playlist.tracks);
      setPlayList(res.playlist);
    });
  }, []);

  const hanldeMoreSetting = () => {
    console.log('more');
    setMoreSetting(true);
    document.body.style.overflow = 'hidden'
  };
  const handleSongUrl = (record) => {
    console.log(record);
    const values = {
      id: record?.id
    }
    axiosInstance.get(mapUrl.song.getSongUrl, {params: values}).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        const values = {
          imgUrl: record.al.picUrl,
          url: res?.data?.[0]?.url,
          songName: record.al.name,
          singer: record.ar[0].name,
        };
        setParams(values);
        // setSongUrl(res?.data?.[0]?.url);
      }
    });
  };
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      appear={true}
      unmountOnExit
      onExited={history.goBack}
    >
      <>
      <div
        className={classNames('songsheet-container', { hidden: moreSetting })}
      >
        <Header
          title="歌单详情"
          onBack={() => {
            setShowStatus(false);
          }}
        />
        <MusicInfo info={playlist} />
        <MusicList list={musicList} onSong={handleSongUrl} />
        {params?.url && (
          <MiniPlayer {...params} onMoreSetting={hanldeMoreSetting} />
        )}
      </div>
      {moreSetting && <PlayerList onClose={()=>{
        setMoreSetting(false);
      }} />}
</>
    </CSSTransition>
  );
};

export default memo(SongSheet);
