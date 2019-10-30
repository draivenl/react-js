import React from "react";
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia"></img>
                </div>
                <div>
                    <img src='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80' alt='Avatar'></img>
                    <h1>Lisandro <br/>G&oacute;mez Ortiz</h1>
                </div>
                <div>
                    <p>FullStack Engineer</p>
                    <p>@lgomezo</p>
                </div>
                <div>
                    #PlatziConf
                </div>
            </div>
        );
    }
}

export default Badge