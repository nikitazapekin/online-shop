import Navigation from "../../components/navigation/navigation.js"
import Slider from "../../components/slider/slider.js"
import TypesOfPurchases from "../../components/typesOfPurchases/typesOfPurchases.js"
import Footer from "../../components/footer/footer.js"
import "./cataloguePage.scss"
const CataloguePage=()=> {
    return (
        <div className="cataloguePage">
<Navigation />
<Slider />
<TypesOfPurchases />
<Footer />
        </div>
    )
}
export default CataloguePage