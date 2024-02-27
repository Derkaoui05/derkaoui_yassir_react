import { NavLink } from "react-router-dom"


function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-dark ">
                <div className="container p-1 text-align-center ">
                    <div className="navbar-nav mx-auto">
                        <NavLink className="nav-link text-white" to="/">Accueil</NavLink>
                        <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                        <NavLink to="/erreur" className="nav-link text-white">erreur</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Menu