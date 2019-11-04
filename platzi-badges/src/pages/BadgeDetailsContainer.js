import React, { Component } from 'react';


import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails';

import api from '../api'



class BadgeDetailsContainer extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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
    handleCloseModal = ev => {
        this.setState({
            modalIsOpen: false
        })
    }
    handleOpenModal = ev => {
        this.setState({
            modalIsOpen: true
        })
    }
    handleDeleteBadge = async ev => {
        this.setState({
            loading: true,
        })

        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }

        return (
            <BadgeDetails 
                badge={this.state.data} 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}

            />
        );
    }
}

export default BadgeDetailsContainer;