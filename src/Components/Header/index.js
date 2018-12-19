import React , { Component } from 'react';

import './Header.css'
class Header extends Component{
    render(){
        return(
        <div className = "header">
            <div className = "title">
            <h1>CurandoMe</h1>
            </div>
            <div className = "nav-buttons">
                <button className="map btn btn-info btn-md" >Mapa</button>
                <button className="find btn btn-info btn-md">Encuentra</button>
                <button className="schedule btn btn-info btn-md">Agenda</button>
            </div>  
            <div className="access-buttons">
                <button className="register btn btn-info btn-md">Registro</button>
                <button className="login btn btn-info btn-md">Login</button>
            </div>
        </div>
        )}
}

export default Header;