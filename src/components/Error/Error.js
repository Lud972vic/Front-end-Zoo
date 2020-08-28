import React from "react";
import TitreH1 from "../UI/Titres/TitreH1";
import Erreur404 from "../../assets/images/404.png";
import { NavLink } from "react-router-dom";

const error = (props) => (
    <>
        <div class="alert alert-dismissible alert-warning m-5">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <h4 class="alert-heading"><TitreH1 bgColor="bg-warning">Oups !!! {props.type} </TitreH1></h4>

            <div className="container text-center site">
                {props.children}
                <img src={Erreur404} alt="Désolé cette page n'existe pas !" className="img-fluid"></img>
                <NavLink to="/" exact className="nav-link btn btn-warning mb-5">Pas de panique, retour à l'accueil</NavLink>
            </div>
        </div>
    </>
);

export default error;