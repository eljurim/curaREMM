import React, { Component } from 'react'

//borrar esto en cuanto se pueda
import doctor from  '../../assets/index.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

import './Content.css'

class Content extends Component {
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { listToShow: [] };
        this.listTester = this.listTester.bind(this);
      }
      
    
      async listTester  (evt){
        evt.preventDefault();
            let target = evt.target
            let specialty = target.value
            let listToShow = await fetch('https://genussys.appspot.com/doctors/findBySpecialty',{
                method: 'POST',
                body: JSON.stringify({"specialties": specialty}), // data can be `string` or {object}!
                headers:{
                'Content-Type': 'application/json'
            }}).then(res=>res.json())
    
            this.setState({ listToShow });
    
    
            
            console.log(this.state.listToShow)
    
      }


    render() {  

      let htmlList = this.state.listToShow.map((currentValue)=>{
        return(<div className="App-Doctor">
        <div className="photo"style={ { backgroundImage: 
            `url(${ doctor })`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' } }>
        </div>
        <div className="Data-doctor">
        <span>{doctor.name}</span>
        <span>Odontologo</span>
        <span> <FontAwesomeIcon icon="star" /></span>
        <span>calle Marmolejo #107 col.cerro de la estrella int. 4 iztapalapa, CDMX</span>
        </div>
    </div>)
})


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