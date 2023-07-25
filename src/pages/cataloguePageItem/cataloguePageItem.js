import Navigation from "../../components/navigation/navigation.js"
import { useParams } from "react-router";
const CataloguePageItem =()=> {
    const {id} =useParams()
    return (
        <div className="cataloguePageItem">
            <Navigation />


            {id}
        </div>
    )
}
export default CataloguePageItem