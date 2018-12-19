import React, { Component } from 'react'
import image from  '../../assets/close-up-doctor.jpg'

import './Content.css'

class Content extends Component{
    render(){  
      return(
        <div className="content" style={ { backgroundImage: `url(${ image })`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } }>
          <div className="jumbotron">
            <h2>Encuentra tu servicio médico de confianza</h2>
            <div className="dropdown">
              <a
                className="btn btn-primary dropdown-toggle"
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
              <button className="cercano">El más cercano</button>
              <button>El más rapido</button>
            
          </div>
        </div>
        )
    }
}

export default Content;