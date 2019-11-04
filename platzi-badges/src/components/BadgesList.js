import React from "react"
import {Link} from "react-router-dom"


function useSearchBadges(badges){
    const [query, setQuery] = React.useState('')
    const [filteredBadges, setfilteredBadges] = React.useState(badges)
    React.useMemo( () => {
        const result = badges.filter( badge => {
            return (`${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`).includes(query.toLowerCase())
        })
        setfilteredBadges(result)
    }, [badges, query])
    return {query, setQuery, filteredBadges}
}

function BadgesList(props){
    const badges = props.badges
    const {query, setQuery, filteredBadges} = useSearchBadges(badges)
    

    if (filteredBadges.length === 0) {
        return (
            
            <div>
                <div className="form-group">
                    <label >Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={e=>{setQuery(e.target.value);
                        }}
                    />
                </div>
                <h1>No Badges were found</h1>
                <Link to="/badges/new" className="btn btn-primary">Create New Badge</Link>
            </div>
        )
    }
    return (
        <div className="BadgesList">
            <div className="form-group">
                <label >Filter Badges</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={e=>{setQuery(e.target.value);
                    }}
                />
            </div>
       

            <ul className="list_unstyled">
                {filteredBadges.map((badge)=>{
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
        </div>
    )
}

export default BadgesList