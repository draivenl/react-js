import React from "react";
import confLogo from '../images/badge-header.svg'
import  "./styles/Badge.css";

class Badge extends React.Component {
    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>
                <div className='Badge__section-name'>
                    <img className='Badge__avatar' src='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80' alt='Avatar'></img>
                    <h1>Lisandro <br/>G&oacute;mez Ortiz</h1>
                </div>
                <div className='Badge__section-info'>
                    <p>FullStack Engineer</p>
                    <p>@lgomezo</p>
                </div>
                <div className='Badge__footer'>
                    #PlatziConf
                </div>
            </div>
        );
    }
}

export default Badge