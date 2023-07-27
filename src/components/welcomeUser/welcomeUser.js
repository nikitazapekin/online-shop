import { useSelector } from "react-redux"
const WelcomeUser =()=> {
    const myState = JSON.parse(useSelector((state) => state.reducer));
    console.log(myState.username)

    console.log(myState)
    return (
        <div className="welcomeUser">
{ myState.username != undefined && (
<p>
Добро пожаловать  {myState.username}! 
</p>
)}
            <button onClick={()=> {
                const test =JSON.parse(myState)
                console.log(test.username)
            }}>clicj</button>
        </div>
    )
}
export default WelcomeUser;