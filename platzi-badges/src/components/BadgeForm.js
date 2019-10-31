import React from "react"

class BadgeForm extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }

    handleChange = ev =>{
        // console.log({
        //     id: ev.target.id,
        //     name: ev.target.name,
        //     value: ev.target.value
        // });
        this.setState({
            [ev.target.name]: ev.target.value
        })
        
    }

    handleClick = ev => console.log(this.state)
    
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
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" id="firstName" value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" id="lastName" value={this.state.lasName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name="email" id="email" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" id="jobTitle" value={this.state.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="twitter" id="twitter" value={this.state.twitter}/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm