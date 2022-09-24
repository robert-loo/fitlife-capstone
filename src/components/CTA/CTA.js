import './CTA.scss';
import { Link } from 'react-router-dom';

// Reusable component that creates styled call-to-actions (CTAs)
// Pass in your desired icon, text, link, onClick function as a props for this component (where necessary)
// isButton is a bool that creates either a button (true) or link (false)
// type is either primary, secondary or delete styles; refer to style guide for themes

function CTA({icon, text, isButton, link, type, onClick}) {
    if (isButton) {
        return (
            <button className={`cta cta__button ${type || "primary"}`} onClick={onClick}>
                {icon && <img className="cta__icon" src={icon} alt="" />}
                <h3 className="cta__text">{text}</h3>
            </button>
        );
    } else {
        return (
            <Link to={link} className={`cta cta__link ${type || "primary"}`} onClick={onClick}>
                {icon && <img className="cta__icon" src={icon} alt="" />}
                <h3 className={`cta__text ${(type==="secondary") && "cta__text--special"}`}>{text}</h3>
            </Link>
        );
    }
}

export default CTA;