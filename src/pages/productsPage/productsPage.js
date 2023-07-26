import Navigation from "../../components/navigation/navigation.js"
import ProductsPages from "../../components/productsPages/productsPages.js"
import "./productsPage.scss"
const ProductsPage =()=> {
    return (
        <div className="productsPage">
            <h1 className="productsTitle">Products</h1>
            <Navigation />
            <ProductsPages />
        </div>
    )
}
export default ProductsPage