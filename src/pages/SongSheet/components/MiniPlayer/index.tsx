/**
 * 底部小播放器
 */

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import './index.scss';

export default ({ url, imgUrl, songName, singer, onMoreSetting }) => {
  const audioRef = useRef();
  const [pause, setPause] = useState<boolean>(false);
  useEffect(() => {
    const Audio = document.getElementById('audio');
    console.log(Audio);
  }, []);
  const handlePause = () => {
    const Audio = document.getElementById('audio') as any;
    const isPaused = Audio.paused;
    if (isPaused) {
      Audio.play();
      setPause(false);
    } else {
      Audio.pause();
      setPause(true);
    }
  };
  const controlAudio = () => {
    const Audio = document.getElementById('audio') as any;
    /** 如果当前歌曲播放结束 */
    if (Audio.currentTime >= Audio.duration) {
      Audio.pause();
      setPause(true);
    }
  };
  return (
    <div className="miniplay-container">
      <audio
        ref={audioRef}
        id="audio"
        onTimeUpdate={(e) => controlAudio()}
        autoPlay
        src={url}
      ></audio>
      <div className={classNames('miniplay-left', { active: pause })}>
        <img src={imgUrl} alt="" />
      </div>
      <div className="miniplay-content">
        {songName}-{singer}
      </div>
      <div className="miniplay-right">
        <div>
          {pause ? (
            <i onClick={handlePause} className="iconfont icon-bofang01" />
          ) : (
            <i onClick={handlePause} className="iconfont icon-bofang" />
          )}
        </div>
        <div>
          <i
            onClick={() => {
              onMoreSetting();
            }}
            className="iconfont icon-liebiao"
          />
        </div>
      </div>
    </div>
  );
};
