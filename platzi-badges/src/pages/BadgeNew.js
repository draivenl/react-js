import React  from "react";
import header from  "../images/platziconf-logo.svg"
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from '../api'

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component{
    state = {
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = ev => {
        this.setState({
            form: {
                ...this.state.form,
                [ev.target.name]: ev.target.value
            }
        })
    }

    handleSubmit = async ev => {
        // Detener el evento 
        ev.preventDefault()
        this.setState({
            loading: true,
            error: null
        })

        try {
            api.badges.create(this.state.form)
            this.setState({
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo" className="BadgeNew__hero-image"></img>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                name={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                                avatar='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}

                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew