import React from 'react'; // para utilizar JXS
import confLogo from '../images/badge-header.svg'; //la imgane queda guardada en la variable CONFLOGO
import './styles/Badge.css';  // solo traemos los estilos


//Creacción de un componente
class Badge extends React.Component {
    render(){  //define el resultado que vamos a ver en pantalla
        
        //Los PROPS que es la forma corta de properties son argumentos 
        //de una función y en este caso serán los atributos de nuestro componente como class, src, etc

        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferncia" />                
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar" />
                <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
        )
    }
}

export default Badge;
