import { Link, useLocation } from "react-router-dom";
import './index.css';

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calender", "Inbox", "History", "Studio", "Commons", "Question"];
    const icons = ["fa-regular fa-circle-user fa-xl","fa-solid fa-gauge fa-xl","fa-solid fa-book fa-xl", "fa-solid fa-calendar-days fa-xl",
        "fa-solid fa-inbox fa-xl", "fa-regular fa-clock fa-xl","fa-solid fa-film fa-xl",
        "fa-solid fa-arrow-right-from-bracket fa-xl","fa-regular fa-circle-question fa-xl"];
    const { pathname } = useLocation();

    return (
        <div className="navigation hidden-1100">
            <ul className="ul">
                {links.map((link, index) => (
                    <li className={`${pathname.includes(link) && "active"}`}>
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                            >
                            <div className="nav-icon-margin">
                                <i className={icons[index]}
                                   style={{color: link != "Account" || pathname.includes(link) ? "red" : "white"}}></i>
                            </div>
                            <div>
                                {link}
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default KanbasNavigation;

