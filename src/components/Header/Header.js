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
            <Hamburger color="black" toggled={isOpen} 
            size="40" rounded toggle={setOpen}/>
            {isOpen && 
            <div style={{position :'absolute', background: 'beige', width:'200px', height: '75px'}}>
              <div>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              </div>
              <div>
                <Link to="/recipesearch" onClick={() => setOpen(false)}>Recipe Search</Link>
              </div>
              <div>
                <Link to="/BMRcalculator" onClick={() => setOpen(false)}>BMR Calculator</Link>
              <div>
                <Link to="/uploadrecipe" onClick={() => setOpen(false)}>Upload Your Recipe</Link>
              </div>
              </div>
              </div>}
            </div>
            <div className="title-container">
            <h2 className="title-header"> FitLife</h2>
            </div>
            <button onClick={() => onLogout()}>Logout</button>
        </div>
    </div>
  )
}

export default Header