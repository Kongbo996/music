import React, { useState, memo } from 'react';
import './index.scss';

interface props {
  title: string;
  onBack: () => void;
}

const Header: React.FC<props> = ({ title, onBack }) => {
  return (
    <div className=" header-container">
      {title}
      <div className="back" onClick={onBack}>
        返回
      </div>
    </div>
  );
};

export default Header;
