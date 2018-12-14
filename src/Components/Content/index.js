import React, { Component } from 'react'
import image from  '../../assest/healthcare-allowance-netherlands.jpg'

import './Content.css'

class Content extends Component{
    render(){
          
        return(
        <div className="principal"> 
            <h2>Encuentra tu servicio medico de confianza</h2>
            <img src={image}></img>
            <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Especialidades
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Odontologo</a>
    <a className="dropdown-item" href="#">Oncologo</a>
    <a className="dropdown-item" href="#">Dermatologo</a>
    <a className="dropdown-item" href="#">Cardiologo</a>
  </div>

  
  <button className="cercano">Encuentra el mas cercano</button>
  <button>Encuentra el mas rapido</button>
  

</div>
        </div>
        )
    }
}

export default Content;