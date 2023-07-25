import Navigation from "../../components/navigation/navigation.js"
import HomepageCard from "../../components/homepageCard/homepageCard.js"
import HomepageAboutText from "../../components/homepageAboutText/homepageAboutText.js"
import TitleOfSite from "../../components/titleOfSite/titleOfSite.js"
import Fon1 from "./fn.jpg"
import Fon2 from "./fonnn.jpg"
import "./homepage.scss"
const Homepage=()=> {
   /* let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountain_behind = document.getElementById("mountain_behind");
    let mountain_front = document.getElementById("mountain_front");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let  header = document.querySelector('header');
    window.addEventListener('scroll', function (){
        let value =window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        mountain_behind.style.top = value * 0.5 + 'px';
        mountain_front.style.top = value * 0 + 'px';
        text.style.marginRight = value * 4 + 'px';
        text.style.marginTop = value * 1.5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.5 + 'px';
    })
    */


    return (
        <div className="homepage">
            <Navigation />
            <TitleOfSite />
            <button className="showCatalogue">
        Show Catalogue
    </button>
    <div className="fonsBlock">
        <img src={Fon2} alt="fon" className="fon1" />
        <img src={Fon1} alt="fon2" className="fon2" />
    </div>
    <HomepageAboutText />
        </div>
    )
}
export default Homepage