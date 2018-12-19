import React, { Component } from 'react'

import './Content.css'

class Content extends Component {
    render() {  
      return (
        <div className = 'principal-content'>
          <div className = 'specialties-content'>
            <h2>Encuentra tu servicio médico de confianza</h2>
          <select className="custom-select" onChange={this.listTester} id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose...</option>
                <option value='Cirugia Plastica y Reconst.'>Cirugia Plastica y Reconst.</option>
                <option value='Ortopedia y Traumatologia'>Ortopedia y Traumatologia</option>
                <option value='Oftalmologia'>Oftalmologia</option>
                <option value='Medicina Interna'>Medicina Interna</option>
                <option value='Ginecologia y Obst.'>Ginecologia y Obst.</option>
                <option value='Medicina de Rehabilitacion'>Medicina de Rehabilitacion</option>
              </select>
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