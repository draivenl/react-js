import React  from "react";
import header from  "../images/platziconf-logo.svg"
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from '../components/PageLoading'
import api from '../api'

import "./styles/BadgeEdit.css";

class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }
    componentDidMount(){
        this.fetchData()
    }

    fetchData = async ev => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({
                loading: false,
                form: data
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
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
            api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({
                loading: false
            })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
if (this.state.loading) {
    return(
        <PageLoading/>
    )
}

        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img src={header} alt="logo" className="BadgeEdit__hero-image"></img>
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}

                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit