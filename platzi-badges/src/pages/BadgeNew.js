import React  from "react";
import header from  "../images/badge-header.svg"
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import "../components/styles/BadgeNew.css";

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

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="logo"></img>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                name={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatar='https://s.gravatar.com/avatar/acc8c5d53c0eddd70332fa11c828665f?s=80'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew