import React, { Component } from 'react';

import {Link} from "react-router-dom"
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import api from '../api'

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'

class BadgeDetails extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, data})
        } catch (error) {
            this.setState({loading: false, error})
        }

    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }
        const badge = this.state.data

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
}

export default BadgeDetails;