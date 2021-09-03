import React from 'react';          //Es análogo a createElement
import ReactDOM from 'react-dom';   //Es análogo a appendChild

import 'bootstrap/dist/css/bootstrap.css'; //importar estilos
import './global.css';
//import Badge from './components/Badge'; //importamos el componente
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';



const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
<Badges
/>, container); //Props
