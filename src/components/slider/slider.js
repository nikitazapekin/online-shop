


import React, { useEffect, useRef, useState } from 'react';
import './slider.scss';
import { Link } from 'react-router-dom';
import Nn from "./new.png"
const Slider = () => {
  const slider = useRef();
  const [filteredElems, setFilteredElems] = useState([]);

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

    slider.current.addEventListener('mousedown', handleMouseDown);
    slider.current.addEventListener('mouseleave', handleMouseLeave);
    slider.current.addEventListener('mouseup', handleMouseUp);
    slider.current.addEventListener('mousemove', handleMouseMove);

  
    fetch('http://localhost:5000/tovars')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((res) => {
        const filteredData = res.filter((item, index) => {
          return item.neww !== false;
        });
        setFilteredElems(filteredData);
      });

   
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
      <h1 className="animesLastMonth">Новые товары</h1>
      <ul ref={slider} className="gallery">
        {filteredElems.map((item) => (
             <Link style={{textDecoration: "none", color: "black"}} to={`/tovarInfo/${item.id}`}>
          <li key={item.id} style={{ background: '#f6bd60' }}>
            <img src={item.logo} alt="purchase" className="sliderImage" />
            <img src={Nn} className='newImage' alt="new" />
          
            <p className="sliderTitleAnime">{item.title} <br /> 
            {item.price} rub
            </p>
         
          </li> 
          </Link>
        ))}
        <div className="sliderFon"></div>
      </ul>
    </>
  );
};

export default Slider;
