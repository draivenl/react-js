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
        
    

    render(){
        return(
            <div>
                <h1>New Attendant</h1>

                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" id="firstName"/>
                        <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BadgeForm