import React, { Component } from 'react';
import NavBar from '../../components/UI/NavBar/NavBar.js';
import { Switch, Route } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Error from '../../components/Error/Error';
import Footer from '../../components/UI/Footer/Footer';
import Parc from '../Parc/Parc';
import Contact from '../Contact/Contact';

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <NavBar />
                    <Switch>
                        <Route path="/animaux" exact render={() => <Parc />} />
                        <Route path="/contact" exact render={() => <Contact />} />
                        <Route path="/" exact render={() => <Accueil />} />
                        <Route render={() => <Error type="404"></Error>} />
                    </Switch>
                    {/* Pour le footer */}
                    <div className="minSite"></div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Site;