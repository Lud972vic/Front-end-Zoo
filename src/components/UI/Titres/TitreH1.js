import React from "react";

const titreH1 = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bandeauColor";
    let monCSS = `border border-secondary p-2 mx-1 text-white text-center rounded-bottom ${backgroundColor}`;
    return <h1 className={monCSS}>{props.children}</h1>
};

export default titreH1;