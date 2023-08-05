/*
import "./scrollArrow.scss";
import { useEffect, useRef, useState } from "react";

const ScrollArrow = () => {
  const arrow = useRef();
const [isScroll, setIsScroll]=useState(false)
const st={
  display:  isScroll ?  "block" : "none"
}
  useEffect(() => {
    window.addEventListener("scroll", function () {
setIsScroll(true)
      arrow.current.hidden = window.pageYOffset < document.documentElement.clientHeight;
    });
  }, [isScroll]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={st}
      ref={arrow}
      className="arrowTop"
      onClick={handleScrollToTop}
    ></div>
  );
};

export default ScrollArrow;
 
*/
import React, { useEffect, useRef, useState } from "react";
import "./scrollArrow.scss";

const ScrollArrow = () => {
  const arrow = useRef();
  const [isScroll, setIsScroll] = useState(false);

  const st = {
    display: isScroll ? "block" : "none",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (arrow.current) {
        setIsScroll(true);
        arrow.current.hidden = window.pageYOffset < document.documentElement.clientHeight;
      }
      else {
        setIsScroll(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScroll]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={st} ref={arrow} className="arrowTop" onClick={handleScrollToTop}></div>
  );
};

export default ScrollArrow;
