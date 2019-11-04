import React from "react"
import {Link} from "react-router-dom"

class BadgesList extends React.Component{
    render(){
        if (this.props.badges.length === 0) {
            return (
                <React.Fragment>
                    <h1>No Badges were found</h1>
                    <Link to="/badges/new" className="btn btn-primary">Create New Badge</Link>
                </React.Fragment>
            )
        }
        return (
            <ul className="list_unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                            <p>
                                {badge.firstName} {badge.lastName}
                            </p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList