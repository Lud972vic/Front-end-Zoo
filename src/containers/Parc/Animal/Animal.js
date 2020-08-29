import React from "react";
import Bouton from "../../../components/UI/Button/Button";

const composant = (props) => (
    <>
        <div className="card m-2">
            <h3 className="card-header bandeauColor text-white text-center">Qui suis-je ?  {props.nom}</h3>
            <div className="card-body">
                <div className="card-text">
                    {props.description.toLowerCase().includes('dangereux') ? <p className="text-danger"><i className="fas fa-exclamation-triangle"></i> {props.description}</p> : props.description}
                </div>
            </div>

            <div className="text-center" style={{ "height": "100px" }} >
                <img src={props.image} alt={props.description} className="img-fluid h-100" />
            </div>

            <div className="card-body">
                <h3>Je suis de la famille des&nbsp;
                    <Bouton typeBtn="btn-outline-success my-2" clic={() => props.filtreFamille(props.famille.idFamille)}> {props.famille.libelleFamille.toLowerCase()}</Bouton>
                    <p className="small text-muted">{props.famille.descriptionFamille}</p>
                </h3>
            </div>
            <div className="card-body">
                <h3>Je vie sur les continents&nbsp; </h3>
                {
                    props.continents.map(continent => {
                        //Une couleur par continent
                        let colorBtnContinent = "";
                        switch (continent.idContinent) {
                            case "1": colorBtnContinent = "btn-outline-primary";
                                break;
                            case "2": colorBtnContinent = "btn-outline-success";
                                break;
                            case "3": colorBtnContinent = "btn-outline-danger";
                                break;
                            case "4": colorBtnContinent = "btn-outline-warning";
                                break;
                            case "5": colorBtnContinent = "btn-outline-info";
                                break;

                            default: colorBtnContinent = "btn-outline-secondary";
                        }

                        return <Bouton
                            typeBtn={colorBtnContinent}
                            css="m-1"
                            key={continent.idContinent}
                            clic={() => props.filtreContinent(continent.idContinent)}

                        >{continent.libelleContinent}</Bouton>
                    })
                }
            </div>
        </div>
    </>
);

export default composant;