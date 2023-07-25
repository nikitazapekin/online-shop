

import React, { useEffect, useRef } from 'react';
import './slider.scss';

const Slider = () => {
  const slider = useRef();

  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.current.classList.add('activeSlide');
      startX = e.pageX - slider.current.offsetLeft;
      scrollLeft = slider.current.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.current.classList.remove('activeSlide');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.current.classList.remove('activeSlide');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.current.scrollLeft = scrollLeft - walk;
    };
if(slider.current!=undefined){
    slider.current.addEventListener('mousedown', handleMouseDown);
    slider.current.addEventListener('mouseleave', handleMouseLeave);
    slider.current.addEventListener('mouseup', handleMouseUp);
    slider.current.addEventListener('mousemove', handleMouseMove);
}
    return () => {
        if(slider.current!=undefined){
      slider.current.removeEventListener('mousedown', handleMouseDown);
      slider.current.removeEventListener('mouseleave', handleMouseLeave);
      slider.current.removeEventListener('mouseup', handleMouseUp);
      slider.current.removeEventListener('mousemove', handleMouseMove);
        }
    };
  }, []);

  return (
  <>
 <h1 className="animesLastMonth">Аниме этого месяца</h1>
    <ul ref={slider} className="gallery">
     <li style={{ background: '#f6bd60' }}> 
  
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" /> 
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f7ede2' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f5cac3' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#84a59d' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f28482' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>

      <li style={{ background: '#f6bd60' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f7ede2' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f5cac3' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#84a59d' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>
      <li style={{ background: '#f28482' }}>
<img src="https://w.forfun.com/fetch/5a/5a10d4e1e45b431d30ebe0f578a03dc6.jpeg" alt="anime" className="sliderImage" />
<p className="sliderTitleAnime">Anime</p>
      </li>

      <div className="sliderFon"></div>
    </ul>
    </>
  );
};

export default Slider;