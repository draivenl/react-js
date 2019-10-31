import React  from "react";
import Navbar from "../components/Navbar";
import header from  "../images/badge-header.svg"
import Badge from "../components/Badge";

import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                name='Lisandro' 
                                lastName='G&oacute;mez' 
                                jobTitle='FullStack Engineer' 
                                twitter='lgomezo' 
                                avatar='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80'
                            />
                        </div>
                    </div>
                </div>
                   
                

            </div>
            
        )
    }
}

export default BadgeNew