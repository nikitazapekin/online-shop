import Navigation from "../../components/navigation/navigation.js"
import HomepageCard from "../../components/homepageCard/homepageCard.js"
import HomepageAboutText from "../../components/homepageAboutText/homepageAboutText.js"
import TitleOfSite from "../../components/titleOfSite/titleOfSite.js"
import Fon1 from "./fn.jpg"
import Fon2 from "./f.jpg"
import { Link } from "react-router-dom"
import "./homepage.scss"
import Spinner from "../../components/spinner/spinner.js"
import Footer from "../../components/footer/footer.js"
import { useRef } from "react"
import BurgerMenu from "../../components/burgerMenu/burgerMenu.js"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
const Homepage=()=> {
    return (
        <>
        <div className="homepage">
            <Navigation />
            <TitleOfSite /> 
            <button className="showCatalogue">
    <Link style={{textDecoration: "none"}} to="/add">   Show Catalogue </Link>
    </button> 


    <div className="fonsBlock">
        <div className="fon1Wrapper">
        <img src={Fon2} alt="fon" className="fon1" />
        </div>
      {/*  <div className="fon2Wrapper">
            <HomepageAboutText />
        <img src={Fon1} alt="fon2" className="fon2" /> 
    </div> */}
</div> 
    <ScrollArrow />
   {/* <HomepageAboutText   /> */}
    <Footer />
        </div>
     
        </>
    )
}
export default Homepage