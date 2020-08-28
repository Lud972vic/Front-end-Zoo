import React from "react";
import logo from "../../../assets/images/logo.png";
//NavLink gére l'affichage, le designe, et évite le rechargement de la page
import { NavLink } from "react-router-dom";

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-light headerColor">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo du site Zoo" width="60px" className="rounded"></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link btn btn-outline-secondary buttonNavBar m-1">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/animaux" exact className="nav-link btn btn-outline-secondary buttonNavBar m-1">Les animaux du parc</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" exact className="nav-link btn btn-outline-secondary buttonNavBar m-1">Contactez-nous</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default navbar;