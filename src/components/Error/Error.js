import React from "react";
import TitreH1 from "../UI/Titres/TitreH1";
import Erreur404 from "../../assets/images/404.jpg";

const error = (props) => (
    <>
        <TitreH1 bgColor="bg-warning">Petit soucis {props.type} </TitreH1>
        <div className="container text-center site">
            {props.children}
            <img src={Erreur404} alt="Désolé cette page n'existe pas !" className="img-fluid"></img>
            <a href="/" className="btn btn-outline-warning">Pas de panique, retour à l'accueil</a>
        </div>
    </>
);

export default error;