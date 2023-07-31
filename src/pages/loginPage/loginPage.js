import Login from "../../components/login/login.js"
import Navigation from "../../components/navigation/navigation.js"
import "./loginPage.scss"
import Footer from "../../components/footer/footer.js"
const LoginPage=()=> {
    return (
        <>
        <Navigation />
        <Login />
     


<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    <Footer />  
        </>
    )
}
export default LoginPage