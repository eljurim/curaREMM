import React, { Component } from 'react'

//borrar esto en cuanto se pueda
import doctor from  '../../assets/index.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import './Doctor.css'

import './Content.css'

class Content extends Component {
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
          listToShow: [],
          specialtiesList: [],
         };

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

      async componentWillMount() {
         let specialtiesList = await  fetch('http://localhost:8080/doctors/specialtiesList').then(res=>res.json())
          this.setState({specialtiesList})
          console.log(this.state.specialtiesList)
       }


    render() {  
      let specialtiesDropdown = this.state.specialtiesList.map((currentValue)=>{
        return (<option value={currentValue}>{currentValue}</option>)
      })
      let doctorsList = this.state.listToShow.map((currentValue)=>{
        return(<div className="App-Doctor">
        <div className="photo"style={ { backgroundImage: 
            `url(${ doctor })`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' } }>
        </div>
        <div className="Data-doctor">
        <span>{currentValue.name}</span>
        <span>{currentValue.specialties}</span>
        <span> <FontAwesomeIcon icon="star" /></span>
        <span>{currentValue.workPlaces}</span>
        </div>
    </div>)
})


      return (
        <div>
        <div className = 'principal-content'>
          <div className = 'specialties-content'>
            <h2>Encuentra tu servicio médico de confianza</h2>
          <select className="custom-select" onChange={this.listTester} id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose...</option>
                {specialtiesDropdown}
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
         <div id="card-wrapper">{doctorsList}</div>
         </div>
        )
    }
}

export default Content;