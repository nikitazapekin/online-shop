import "./homepageCard.scss"

const HomepageCard=()=> {
    return (
        <div className="card">
        <div className="card-front"></div>
        <div className="card-back">
            <h2>Jane Doe<br /><span>Senior Designer</span></h2>
            <div className="social-icons">
                <a href="#" className="fa fa-facebook" aria-hidden="true"></a>
                <a href="#" className="fa fa-twitter" aria-hidden="true"></a>
                <a href="#" className="fa fa-google-plus" aria-hidden="true"></a>
                <a href="#" className="fa fa-linkedin" aria-hidden="true"></a>
                <a href="#" className="fa fa-instagram" aria-hidden="true"></a>
            </div>
        </div>
    </div>
    )
}
export default HomepageCard