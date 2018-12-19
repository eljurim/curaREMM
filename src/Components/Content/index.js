import React, { Component } from 'react'

import './Content.css'

class Content extends Component {
    render() {  
      return (
        <div className = 'principal-content'>

          <div className = 'specialties-content'>
            <h2>Encuentra tu servicio médico de confianza</h2>
            <div className = 'specialties-dropdown'>
              <a
                className="btn btn-default dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              ESPECIALIDADES  
              </a>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Odontologo</a>
              <a className="dropdown-item" href="#">Oncologo</a>
              <a className="dropdown-item" href="#">Dermatologo</a>
              <a className="dropdown-item" href="#">Cardiologo</a>
            </div>
            <div className = 'buttons'>
            <button className = 'near btn btn-primary'>MÁS CERCANO</button>
            <button className = 'quick btn btn-primary'>MÁS RÁPIDO</button>
            </div>
            
          </div>
        </div>
        )
    }
}

export default Content;