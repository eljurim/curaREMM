import React , { Component } from 'react';
import logo from '../../assets/curandoMe-white-logo-min.png';

import './Header.css'
class Header extends Component{
    render(){
        return(
        <div className = "header">
            <div className = "image">
                <img src = { logo } alt = "Logo curando.Me"/>
            </div>
            <div className="buttons">
                <div className = "nav-buttons">
                    {/* <button className="map btn btn-default" >MAPA</button> */}
                    <button className="find btn btn-default">ENCUENTRA</button>
                    <button className="schedule btn btn-default">AGENDA</button>
                </div>  
                <div className="access-buttons">
                    <button className="register btn btn-primary">REGISTRO</button>
                    <button className="login btn btn-primary">LOGIN</button>
                </div>
            </div>
        </div>
        )}
}

export default Header;