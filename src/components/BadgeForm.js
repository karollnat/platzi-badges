import React from 'react';


class BadgeForm extends React.Component {
    //Inicializamos el estado
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     twitter: ''
    //   };
    // handleChange = event => {
    //     //console.log(this)
    //     this.setState({  //setState= para escribir el estado |se le debe pasar un objeto con la información que se quiere guardar.
    //       [event.target.name]: event.target.value
    //     });        
    // }
    
    handleCLick = event => {
        console.log ("Button was clicked");
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log("Form was submitied");
        console.log(this.state);
    }
    
    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit ={this.handleSubmit} >
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} //nombre del metodo
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            placeholder="Introduce tu nombre"
                            //Leyendo el estado y se utliza STATE
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
                            placeholder="Introduce tu apellido"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            placeholder="Introduce tu email"
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
                            placeholder="Introduce tu cargo"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Twiter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter" 
                            placeholder="Introduce tu usuario de twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    
                    <button                         
                        onClick={this.handleCLick} 
                        className="btn btn-primary">
                        Save
                    </button>
                  
                    
                </form>
            </div>
        )
    }

}

export default BadgeForm;