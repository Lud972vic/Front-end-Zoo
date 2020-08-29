import React, { Component } from "react";
import TitreH1 from '../../components/UI/Titres/TitreH1';
import axios from "axios";
import Animal from "./Animal/Animal";
import Button from "../../components/UI/Button/Button";

class Parc extends Component {

    state = {
        animaux: null,
        filtreFamille: null,
        filtreContinent: null,
        listeFamilles: null,
        listeContinent: null
    }

    loadData = () => {
        document.title = "Les animaux du parc";

        const famille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
        const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1";

        axios.get(`http://localhost/myzoo/zooback/front/animaux/${famille}/${continent}`)
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) });
            })
    }

    componentDidMount = () => {
        this.loadData();

        axios.get(`http://localhost/myzoo/zooback/front/continents`)
            .then(reponse => {
                this.setState({ listeContinent: Object.values(reponse.data) });
            });

        axios.get(`http://localhost/myzoo/zooback/front/familles`)
            .then(reponse => {
                this.setState({ listeFamilles: Object.values(reponse.data) });
            });
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (oldState.filtreFamille !== this.state.filtreFamille) {
            this.loadData();
        }
        if (oldState.filtreContinent !== this.state.filtreContinent) {
            this.loadData();
        }
    }

    //On récupére l'id de la famille o udu continent cliqué
    handleSelectionFamille = (idFamille) => {
        if (idFamille === "-1") this.handleResetFiltreFamille()
        else this.setState({ filtreFamille: idFamille });
    }
    handleSelectionContinent = (idContinent) => {
        if (idContinent === "-1") this.handleResetFiltreContinent();
        else this.setState({ filtreContinent: idContinent });
    }

    handleResetFiltreFamille = () => {
        this.setState({ filtreFamille: null });
    }

    handleResetFiltreContinent = () => {
        this.setState({ filtreContinent: null });
    }

    render() {
        //Récupéreration des noms des familles et des condinents, pour les mettre dans le bouton supprimer
        //On stocke le nom de la famille filtrée
        let nomFamilleFiltre = "";
        //On vérifie qu'on a bien une famille filtrée
        if (this.state.filtreFamille) {
            //On récupère l'ensemble des familles -> on parcourt la liste des familles
            const numCaseFamilleFiltre = this.state.listeFamilles.findIndex(famille => {
                //Et on compares si l'id d'une famille est égale à la famille filtrée
                return famille.famille_id === this.state.filtreFamille;
            })
            //On récupére le libelle de la famille, grace à l'id trouvé dans la numCaseFamilleFiltre
            nomFamilleFiltre = this.state.listeFamilles[numCaseFamilleFiltre].famille_libelle;
        }

        let nomContinentFiltre = "";
        if (this.state.filtreContinent) {
            const numCaseContinentFiltre = this.state.listeContinent.findIndex(continent => {
                return continent.continent_id === this.state.filtreContinent;
            })
            nomContinentFiltre = this.state.listeContinent[numCaseContinentFiltre].continent_libelle;
        }

        return (
            <>
                <TitreH1 bgColor="bandeauColor">Les animaux du parc</TitreH1>

                <div className="container-fluid form-group">
                    <span>Filtres : </span>

                    <select onChange={(event) => this.handleSelectionFamille(event.target.value)} className="form-control">
                        <option value="-1" selected={this.state.filtreFamille === null && "selected"} >Familles</option>
                        {
                            this.state.listeFamilles && this.state.listeFamilles.map(famille => {
                                return <option
                                    value={famille.famille_id}
                                    selected={this.state.filtreFamille === famille.famille_id && "selected"}
                                >
                                    {famille.famille_libelle}
                                </option>
                            })
                        }
                    </select>
                    {
                        this.state.filtreFamille &&
                        <Button
                            typeBtn="btn-outline-danger mx-2 my-2"
                            clic={this.handleResetFiltreFamille}>
                            {nomFamilleFiltre} &nbsp;
                            <i class="fas fa-times"></i>
                        </Button>
                    }
                    <select onChange={(event) => this.handleSelectionContinent(event.target.value)} className="form-control my-2">
                        <option value="-1" selected={this.state.filtreContinent === null && "selected"} >Continents</option>
                        {
                            this.state.listeContinent && this.state.listeContinent.map(continent => {
                                return <option
                                    value={continent.continent_id}
                                    selected={this.state.filtreContinent === continent.continent_id && "selected"}
                                >
                                    {continent.continent_libelle}
                                </option>
                            })
                        }
                    </select>

                    {
                        this.state.filtreContinent &&
                        <Button
                            typeBtn="btn-outline-danger mx-2 my-2"
                            clic={this.handleResetFiltreContinent}>
                            {nomContinentFiltre} &nbsp;
                            <i class="fas fa-times"></i>
                        </Button>
                    }
                </div>

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
                                        <Animal {...animal}
                                            filtreFamille={this.handleSelectionFamille}
                                            filtreContinent={this.handleSelectionContinent}
                                        />
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