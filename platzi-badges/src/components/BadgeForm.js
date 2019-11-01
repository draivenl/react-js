import React from "react"

class BadgeForm extends React.Component{
    handleClick = ev => console.log(this.props.formValues)
    
    // Los button por defecto son type="submit"
    // Si se quiere evitar que haga submit por defecto, se agrega el evento onSubmit
    // al formulario pero se detiene la accion con preventDefault().
    // o simplemente se cambia el type por type="button"

    handleSubmit = ev => {
        ev.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" name="email" 
                            id="email" 
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            id="jobTitle" 
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            id="twitter" 
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button 
                        type="button" 
                        onClick={this.handleClick} 
                        className="btn btn-primary">
                            Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm