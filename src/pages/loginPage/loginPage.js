import Login from "../../components/login/login.js"
import Navigation from "../../components/navigation/navigation.js"
import "./loginPage.scss"
const LoginPage=()=> {
    return (
        <>
        <Navigation />
        <Login />
        {/*<div class="context">
        <h1>Pure Css Animated Background</h1>
    </div> */}


<div class="area" >
            <ul class="circles">
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
        </>
    )
}
export default LoginPage