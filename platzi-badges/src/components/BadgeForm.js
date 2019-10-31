import React from "react"

class BadgeForm extends React.Component{
    handleChange = ev =>{
        console.log({
            id: ev.target.id,
            name: ev.target.name,
            value: ev.target.value
        });
        
    }

    handleClick = ev => console.log("Button Clicked")
    
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
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" id="firstName"/>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm