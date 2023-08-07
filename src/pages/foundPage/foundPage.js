import Navigation from "../../components/navigation/navigation.js"
import Footer from "../../components/footer/footer.js"
import "./foundPage.scss"
import { useParams } from "react-router"
import FoundPageItems from "../../components/foundPageItems/foundPageItems.js"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
const FoundPage=()=> {
    const id=useParams()
    return (
        <div className="foundPage">
            <Navigation />
            <FoundPageItems id={id} />
        <ScrollArrow />
            <Footer />
        </div>
    )
}
export default FoundPage