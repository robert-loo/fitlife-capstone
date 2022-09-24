import "./NotFound.scss";
import CTA from "../CTA/CTA";

function NotFound() {
    return (
        <section className="not-found">
            <h1 className="not-found__title">404 Not Found</h1>
            <p className="not-found__description">Oops...we can't seem to find the page you're looking for.</p>
            <CTA text="Go to homepage" link="/"/>
        </section>
    );
}

export default NotFound;