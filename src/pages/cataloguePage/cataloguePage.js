
import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.js";
import Slider from "../../components/slider/slider.js";
import TypesOfPurchases from "../../components/typesOfPurchases/typesOfPurchases.js";
import Footer from "../../components/footer/footer.js";
import Spinner from "../../components/spinner/spinner.js";
import "./cataloguePage.scss";

const CataloguePage = () => {
  const [isLoading, setIsLoading] = useState(true);
const timeoutId=500
  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false); 
    }, timeoutId); 

    // Clean up the effect
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="cataloguePage">
      <Navigation />
      {isLoading ? (
        <Spinner /> 
      ) : (
        <>
          <Slider />
          <TypesOfPurchases />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CataloguePage;
