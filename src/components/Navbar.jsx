import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="todo-nav">
            <Link className="nav-link" to="/">All</Link>
            <Link className="nav-link" to="/?todo=active">Active</Link>
            <Link className="nav-link" to="/?todo=completed">Completed</Link>
        </nav>
    )
}

export default NavBar;