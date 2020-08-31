import React, { Component } from "react";
import TitreH1 from '../../components/UI/Titres/TitreH1';
import Formulaire from '../../containers/Contact/Formulaire/Formulaire';
import axios from 'axios';

class Contact extends Component {
    componentDidMount() {
        document.title = "Page de contact";
    }

    handleEnvoiMail = (message) => {
        //On au serveur backend, le message
        axios.post('http://localhost/myzoo/zooback/front/sendMessage', message)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <TitreH1 bgColor="bandeauColor">Contactez nous !</TitreH1>
                <div className="container ">
                    <h3>Adresse</h3>
                    <p>MeauxZoo à Crégy-les-Meaux</p>
                    <h3>Téléphone</h3>
                    <p>+33 6 00 00 00 00</p>
                    <br />
                    <h3>Vous préfèrez nous écrire ?</h3>
                    <Formulaire sendMail={this.handleEnvoiMail} />
                </div>
            </>
        );
    }
}

export default Contact;