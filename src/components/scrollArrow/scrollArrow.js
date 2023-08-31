
import React, { useEffect, useRef, useState } from "react";
import "./scrollArrow.scss";
import { ErrorBoundary } from "../errorBoundary/errorBoundary.js";
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
    <ErrorBoundary>
    <div style={st} ref={arrow} className="arrowTop" onClick={handleScrollToTop}></div>
    </ErrorBoundary>
  );
};

export default ScrollArrow;
