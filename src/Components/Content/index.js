import React, { Component } from 'react'
import filledStar from '../../assets/star-solid.png'
import emptyStar from '../../assets/star-regular.png'
//borrar esto en cuanto se pueda
import doctor from  '../../assets/index.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Doctor.css'

import './Content.css'

class Content extends Component {
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            listToShow: [],
            specialtiesList: [],
            userPosition:{}
           };

        this.listTester = this.listTester.bind(this);
      }
      
    
      async listTester  (evt){
        evt.preventDefault();
            let target = evt.target
            let specialty = target.value
            let listToShow = await fetch('https://genussys.appspot.com/doctors/findBySpecialty',{
            //let listToShow = await fetch('http://localhost:8080/doctors/findBySpecialty',{
                method: 'POST',
                body: JSON.stringify({
                  "specialties": specialty,
                  "latitude":this.state.userPosition.latitude,
                  "longitude":this.state.userPosition.longitude
              }), // data can be `string` or {object}!
                headers:{
                'Content-Type': 'application/json'
            }}).then(res=>res.json())
    
            this.setState({ listToShow });
    
    
            
            console.log(this.state.listToShow)
    
      }

      async componentWillMount() {
        let specialtiesList = await  fetch('https://genussys.appspot.com/doctors/specialtiesList').then(res=>res.json())
         this.setState({specialtiesList})
         console.log(this.state.specialtiesList)

         await navigator.geolocation.getCurrentPosition(position=>{
           let latitude = position.coords.latitude
           let longitude = position.coords.longitude
           this.setState({userPosition:{latitude,longitude}})
           console.log(this.state.userPosition)
         })

      }


    render() {  
      let specialtiesDropdown = this.state.specialtiesList.map((currentValue)=>{
        return (<option value={currentValue}>{currentValue}</option>)
      })
      let doctorsList = this.state.listToShow.map((currentValue)=>{


          let starArray = [<img src={emptyStar} alt={emptyStar}/>,<img src={emptyStar} alt={emptyStar}/>,<img src={emptyStar} alt={emptyStar}/>,<img src={emptyStar} alt={emptyStar}/>,<img src={emptyStar} alt={emptyStar}/>]
          
          for (let index = 0; index < currentValue.qualification.stars; index++) {
            starArray[index] = <img src={filledStar} alt={filledStar}/>
            
          }

        return(<div className="App-Doctor">
        <div className="photo" style={ { backgroundImage: 
            `url(${ doctor })`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' } }>
        </div>
        <div className="Data-doctor">
        <span>{currentValue.name}</span>
        <span>{currentValue.specialties}</span>
        <div> {starArray} <span>({currentValue.qualification.count})</span></div>
        <span>Ciudad de Mexico</span>
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
                className="dropdown-toggle"
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
            </div> */}

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
