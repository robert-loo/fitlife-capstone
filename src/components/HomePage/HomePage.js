import {Link} from "react-router-dom";
import "./HomePage.scss"



function HomePage() {

  return (
    <div>
      <div className="homepage__container">
        <div class="hero__overlay"></div>
          <div className="homepage__subheader--container"> 
          <h2 className="homepage__title">Fit does not quit LOL</h2>
          <h3 className="homepage__subtitle">The Beginning of a Journey starts with the first step</h3>
          <Link to="/BMRcalculator"> 
            <button className="homepage-btn">START HERE well</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage