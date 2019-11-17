import React, { Component } from 'react';
import list from './patientlistjson.js';
import './PersonList.css';;
class PatientList extends Component {
    constructor(props) {
        super(props)
    
  this.state = {
    data: list,
  }
    }
  

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return (
      <div className="cls_patientList">
        <div className="personCont">
            <div className="cls_pointIcon"><i class="fa fa-star-o fa-6" aria-hidden="true"></i></div>
            <div className="cls_PersonIcon"><i class="fa fa-user-circle" aria-hidden="true"></i></div>    
            <div className="cls_DescValue">{entry.id} - [{entry.fname}]</div>
        </div>
        <div className="cls_DescCont">
            <div className="cls_DescValue">{entry.fname}</div>
            <div className="cls_DescValue">{entry.mname}</div>
            <div className="cls_DescValue">{entry.lname}</div>
            <div className="cls_DescValue">{entry.surname}</div>
            <div className="cls_DescValue cls_dob"><span><i class="fa fa-birthday-cake" aria-hidden="true"></i></span><span>{entry.dob}</span><span><i class="fa fa-male" aria-hidden="true"></i></span></div>
            <div className="cls_DescValue cls_contact"><span><i class="fa fa-phone" aria-hidden="true"></i></span><span>Mobile: {entry.contact}</span></div>
        </div>
        
      </div>
      ) });
    const elementCont  = 
        <div className="cls_patient_list_cont">
            <div class="cls_Header">
                <div class="cls_textCont">Duplication Check</div>
                <div class="cls_btnCont">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-remove"></i></span>
                        <input value="" class="form-control" type="submit" />
                    </div>
                </div>
            </div>
            <div class="cls_content">
                {result}
            </div>
        </div>
    return <div>{elementCont}</div>
      
  }

  }
export default PatientList