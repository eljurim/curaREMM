import React, { Component } from 'react';

class NewSpecialtySelector extends Component {

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
  
    
    return (



            <div className="input-group">
              <select className="custom-select" onChange={this.listTester} id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose...</option>
                <option value='Cirugia Plastica y Reconst.'>Cirugia Plastica y Reconst.</option>
                <option value='Ortopedia y Traumatologia'>Ortopedia y Traumatologia</option>
                <option value='Oftalmologia'>Oftalmologia</option>
                <option value='Medicina Interna'>Medicina Interna</option>
                <option value='Ginecologia y Obst.'>Ginecologia y Obst.</option>
                <option value='Medicina de Rehabilitacion'>Medicina de Rehabilitacion</option>
              </select>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
              </div>
          </div>
      
        
    );
    
  }
  
}

export default NewSpecialtySelector;