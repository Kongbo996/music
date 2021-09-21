/**
 *  轮播 banner swiper
 */

import React, { useState, memo, useEffect } from 'react';
import Swiper from 'swiper';

interface IProps {
  bannerData: any;
}

function BannerList(props: IProps) {
  const [sliderSwiper, setSliderSwiper] = useState<any>(null);
  const { bannerData } = props;
  console.log('轮播图数据：', bannerData);
  useEffect(() => {
    if (bannerData.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 300,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerData.length, sliderSwiper]);
  return (
    <div className="slider-container">
      <div className="swiper-wrapper">
        {bannerData?.map((slider: any) => {
          return (
            <div className="swiper-slide" key={slider.pic}>
              <div className="slider-nav">
                <img src={slider.pic} width="100%" height="100%" alt="推荐" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(BannerList);
