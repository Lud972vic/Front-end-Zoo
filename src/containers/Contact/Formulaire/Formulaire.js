import React from "react";
import { withFormik } from 'formik';
import * as Yup from 'yup';

const Formulaire = (props) => (
    <>
        <form>
            <div className="form-group">
                <label htmlFor="nom">Nom et prénom</label>
                <input type="text" className="form-control" id="nom" aria-describedby="nomHelp"
                    placeholder="E. Ludovic"
                    name="nom"
                    onChange={props.handleChange}
                    value={props.values.nom}
                    onBlur={props.handleBlur}
                />
                <small id="nomHelp" className="form-text text-muted">Saisissez votre nom et prénom</small>
                {
                    props.touched.nom && props.errors.nom && <span style={{ color: "red" }}>{props.errors.nom}</span>
                }
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="e.ludovic@meauxzoo.com"
                    name="email"
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                />
                <small id="emailHelp" className="form-text text-muted">Saisissez votre email</small>
                {
                    props.touched.email && props.errors.email && <span style={{ color: "red" }}>{props.errors.email}</span>
                }
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3" aria-describedby="textareaHelp"
                    placeholder="Votre message..."
                    name="message"
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                ></textarea>
                <small id="textareaHelp" className="form-text text-muted">Saisissez votre message</small>
                {
                    props.touched.message && props.errors.message && <span style={{ color: "red" }}>{props.errors.message}</span>
                }
            </div>
            <button type="submit" className="btn btn-outline-primary mb-5" onClick={props.handleSubmit}>Envoyer</button>
        </form>
    </>
);

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(10, "Le nom et le prénom doivent avoir au minimum 10 caratères au total.")
            .required("Le nom et le prénom sont obligatoires."),
        email: Yup.string()
            .email("L'émail est invalide.")
            .required("L'émail est obligatoire."),
        message: Yup.string()
            .min(50, "Votre message est trop court.")
            .max(250, "Votre message ne peut dépasser 250 caractères.")
            .required("Le message doit faire plus de 50 caractères.")
    }),
    handleSubmit: (values, {props}) => {
        const message = {
            nom: values.nom,
            email: values.email,
            contenu: values.message
        }  
        props.sendMail(message);      
    }
})(Formulaire);