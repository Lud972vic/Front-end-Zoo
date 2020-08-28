import React, { Component } from "react";
import TitreH1 from '../../components/UI/Titres/TitreH1';
import axios from "axios";
import Animal from "./Animal/Animal";

class Parc extends Component {

    state = {
        animaux: null
    }

    componentDidMount = () => {
        document.title = "Les animaux du parc";

        axios.get(`http://localhost/myzoo/zooback/front/animaux`)
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) });
            })
    }

    render() {
        return (
            <>
                <TitreH1 bgColor="bandeauColor">Les animaux du parc</TitreH1>
                <div className="container-fluid">
                    <div className="row no-gutters">

                        {//Pour éviter des erreurs, on vérifie que le state animaux contient bien des data, expression ternaire que s il y'a des données "this.state.animaux  &&... si vrai alors
                            this.state.animaux &&
                            this.state.animaux.map(animal => {
                                {/* On envois toutes les informations à Animal {...animal} avec l'opérateur 'spread' de décomposition,
                             il permet de développer un objet itérable (comme un Array) lorsqu'on a besoin de plusieurs arguments, 
                             sinon on peut faire nom={animal.nom} */ }
                                return (
                                    <div className="col-12 col-md-6 col-xl-4" key={animal.idAnimal}>
                                        <Animal {...animal} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Parc;