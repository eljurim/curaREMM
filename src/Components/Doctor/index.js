import React, { Component } from 'react';
// import Tarjeta from './../Tarjeta'
import doctor from  '../../assets/index.jpeg'
import './Doctor.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

library.add(faStar)


class Doctor extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let doctors =[{
            "name": "manuel",
            "especialidad":"Odontologo",
            "puntuacion": 4,
            "telefono": 55667409
        },
        {
            "name": "Rosa",
            "especialidad":"Cardiologo",
            "puntuacion": 5,
            "telefono": 66840957
        },{
            "name": "Edgar",
            "especialidad":"Cardiologo",
            "puntuacion": 1,
            "telefono": 66840960
        }]


        let doctorRender = doctors.map(doctor =>{
            let {name,especialidad,puntuacion,telefono} = doctor;
            console.log(doctor)
            
        })
        return(
            <div className="App-Doctor">
                <div className="photo"style={ { backgroundImage: 
                    `url(${ doctor })`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' } }>
                </div>
                <div className="Data-doctor">
                <span>{doctor.name}</span>
                <span>Odontologo</span>
                
                <div className = "score">
                <span className ="star" > <FontAwesomeIcon icon="star" /></span>
                <span className ="star" > <FontAwesomeIcon icon="star" /></span>
                <span className ="star" > <FontAwesomeIcon icon="star" /></span>
                </div>

                <span>calle Marmolejo #107 col.cerro de la estrella int. 4 iztapalapa, CDMX</span>
                </div>
            </div>
            )
    }
}

export default Doctor;