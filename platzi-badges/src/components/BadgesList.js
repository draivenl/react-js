import React from "react"

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list_unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id}>
                            <p>
                                {badge.firstName} {badge.lastName}
                            </p>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList