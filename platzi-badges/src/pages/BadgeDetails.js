import React from 'react';
import {Link} from "react-router-dom"
import Badge from '../components/Badge'

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'


function BadgeDetails(props) {
    const badge = props.badge
    return (
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                name={badge.firstName} 
                                lastName={badge.lastName}
                                jobTitle={badge.jobTitle}
                                email={badge.email}
                                twitter={badge.lastName}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <React.Fragment>
                                <div>
                                    <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
                                </div>
                                <div>
                                    <Link to={`/badges/${badge.id}/delete`} className="btn btn-danger">Delete</Link>
                                </div>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default BadgeDetails;
