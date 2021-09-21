/**
 * 播放器界面
 */

import React, { useState } from 'react';
import './index.scss';

export default ({ url }) => {
  return (
    <div className="maxplay-container">
      <audio autoPlay src={url}></audio>
    </div>
  );
};
