import { NavLink } from "react-router-dom"
import './Navbar.css'

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="activeNav">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" activeclassname="activeNav">
                        Articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}