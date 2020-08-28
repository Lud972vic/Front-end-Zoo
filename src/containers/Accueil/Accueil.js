import React, { Component } from "react";
import TitreH1 from "../../components/UI/Titres/TitreH1";
import banderole from "../../assets/images/banderole.png";
import logo from "../../assets/images/logo.png";

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Le parc d'animaux de Meaux";
    }

    render() {
        return (
            <div>
                <img src={banderole} alt="banderole du site" className="img-fluid"></img>
                <TitreH1>Venez visitez le parc d'animaux de MeauxZoo en famille</TitreH1>
                <p className="text-center text-success text-uppercase font-weight-bold">Nous sommes ouvert toute l'année de 10h00 à 19h00</p>

                <div className="container">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ...</p>

                    <div className="row no-no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={logo} alt='logo su site' className="img-fluid"></img>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                        <div className="col-12 col-md-6">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={logo} alt='logo su site' className="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueil;