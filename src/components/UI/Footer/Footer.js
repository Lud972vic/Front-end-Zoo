import React from "react";
import facebook from "../../../assets/images/footer/fb.png";
import twitter from "../../../assets/images/footer/twitter.png";
import youtube from "../../../assets/images/footer/youtube.png";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const footer = (props) => (
    <>
        <div className="footerColor text-white text-center mt-2">
            MyZoo - Tous droits réservés
            <div className="row no-gutters align-items-center text-center pt-2 mt-4">
                <div className="col-3">
                    <a href="#" className="d-block" target="_blank">
                        <img src={facebook} alt="facebook" className="imgFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="#" className="d-block" target="_blank">
                        <img src={twitter} alt="twitter" className="imgFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <a href="#" className="d-block" target="_blank">
                        <img src={youtube} alt="youtube" className="imgFooter" />
                    </a>
                </div>
                <div className="col-3">
                    <NavLink to="/lesMentionsLegales" className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(" ")}>Les mentions légales</NavLink>
                    <a href="maito: e.ludovic@free.fr" className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(" ")}>contact@myzoo.com</a>
                </div>
            </div>
        </div>
    </>
);

export default footer;