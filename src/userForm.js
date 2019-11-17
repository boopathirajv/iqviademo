import React, { Component } from 'react'
import './form.css';
class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      fname: '',
      sname: '',
      lname: '',
      surname: '',
      relType: 'Relation Type',
      idType:'ID Type',
      id: '',
      contactType: '',
      contact: '',
      address: "",
      isEmergency: true
      
    }

    this.state = this.initialState
  }
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  handleSwitchChange = nr => () => {
    let isEmergency = `switch${nr}`;
    this.setState({
      [isEmergency]: !this.state[isEmergency]
    });
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { fname,sname,lname,surname,relType,idType,id,contactType,contact,address,isEmergency} = this.state;
  
    return (
      <form>
    <div class="cls_Header">
        <div class="cls_btnCont">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-plus-square"></i></span>
                <input value="" class="form-control" type="submit" />
            </div>
            <div class="input-group cls-reset">
                <span class="input-group-addon"><i class="fa fa-refresh"></i></span>
                <input value="" class="form-control" type="reset" />
            </div>
        </div>
    </div>
    <div className="cls_row">
        <div className="cls_column">
            <select value={relType} onChange={this.handleChange} name="relType">
                <option value="Ford">Relation Type</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </div>
        <div className="cls_column cls_search">
            <input type="text" name="fname" value={fname} onChange={this.handleChange} placeholder="First Name" />
            <span className="input-group-addon">
             <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="cls_column cls_nameCont">
            <input type="text" name="fname" value={fname} onChange={this.handleChange} placeholder="First Name" />
        </div>
        <div className="cls_column cls_nameCont">
            <input type="text" name="sname" value={sname} onChange={this.handleChange} placeholder="Middle Name" />
        </div>
        <div className="cls_column cls_nameCont">
            <input type="text" name="lname" value={lname} onChange={this.handleChange} placeholder="Third Name" />
        </div>
        <div className="cls_column cls_nameCont">
            <input type="text" name="surname" value={surname} onChange={this.handleChange} placeholder="Surname" />
        </div>
    </div>
    <div className="cls_row">
        <div className="cls_column">
            <select value={idType}>
                <option value="Ford">ID Type</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </div>
        <div className="cls_column">
            <input type="text" name="id" value={id} onChange={this.handleChange} placeholder="ID" />
        </div>
        <div className="cls_column">
            <select value={contactType}>
                <option value="Ford">Contact Type</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </div>
        <div className="cls_column">
            <input type="text" name="contact" value={contact} onChange={this.handleChange} placeholder="Contact No" />
        </div>
        <div className="cls_column">
            <input type="text" name="address" value={address} onChange={this.handleChange} placeholder="Address" />
        </div>
        <div className="cls_column">
            <div className='custom-control custom-switch'>
                <input type='checkbox' className='custom-control-input' id='customSwitches' checked={this.state.switch1} onChange={this.handleSwitchChange(1)} />
                <label className='custom-control-label' htmlFor='customSwitches'>
                    Is Emergency
                </label>
            </div>
        </div>
    </div>

</form>
    );
  }
}

export default Form;