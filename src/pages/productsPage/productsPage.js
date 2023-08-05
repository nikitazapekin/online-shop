import Comments from "../../components/comments/comments.js"
import Footer from "../../components/footer/footer.js"
import Navigation from "../../components/navigation/navigation.js"
import ProductsPages from "../../components/productsPages/productsPages.js"
import ScrollArrow from "../../components/scrollArrow/scrollArrow.js"
import "./productsPage.scss"
const ProductsPage =()=> {
    return (
        <div className="productsPage">
            <h1 className="productsTitle">Products</h1>
            <Navigation />
            <ProductsPages />
            <ScrollArrow />
          <Footer />
        </div>
    )
}
export default ProductsPage