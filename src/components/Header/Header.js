import { useState } from 'react';
import { Twirl as Hamburger} from 'hamburger-react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header({onLogout}) {

    const [isOpen, setOpen] = useState(false)

  return (
    <div className="cover">
        <div className="navbar">
            <div>
            <Hamburger className="hamburger" color="white" toggled={isOpen} 
            size="40" rounded toggle={setOpen}/>
            {isOpen && 
            <div className="sidebar">
              <div>
                <Link className="sidebar-routes" to="/" onClick={() => setOpen(false)}>Home</Link>
              </div>
              <div>
                <Link className="sidebar-routes" to="/recipesearch" onClick={() => setOpen(false)}>Recipe Search</Link>
              </div>
              <div>
                <Link className="sidebar-routes" to="/BMRcalculator" onClick={() => setOpen(false)}>BMR Calculator</Link>
              <div>
                <Link className="sidebar-routes" to="/communityrecipe" onClick={() => setOpen(false)}>Community Recipe</Link>
              </div>
              <div>
                <Link className="sidebar-routes" onClick={() => onLogout()}>Logout</Link>
              </div>
              </div>
              </div>}
            </div>
            <div className="title-container">
            <h2 className="title-header"> FitLife</h2>
            </div>
            {/* <button className="logout-btn"onClick={() => onLogout()}>Logout</button> */}
        </div>
    </div>
  )
}

export default Header