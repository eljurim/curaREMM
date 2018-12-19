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
                className="btn btn-info dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
              Especialidades
              </a>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Odontologo</a>
              <a className="dropdown-item" href="#">Oncologo</a>
              <a className="dropdown-item" href="#">Dermatologo</a>
              <a className="dropdown-item" href="#">Cardiologo</a>
            </div>
            <div className = 'buttons'>
            <button className = 'near btn btn-primary btn-md'>El más cercano</button>
            <button className = 'quick btn btn-primary btn-md'>El más rapido</button>
            </div>
            
          </div>
        </div>
        )
    }
}

export default Content;