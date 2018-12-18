import React, { Component } from 'react'
// import image from '../../assets/close-up-doctor.jpg'

import './Content.css'

class Content extends Component {
    render() {  
      return (
        <div className = 'principal-content'>
          {/* <div
            className="image-content"
            style={ { 
              backgroundImage: `url(${ image })`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat' 
            } }
          >  
          </div>  */}

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
            <button className = 'near'>El más cercano</button>
            <button className = 'quick'>El más rapido</button>
          </div>
        </div>
        )
    }
}

export default Content;