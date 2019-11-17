import React, { Component } from 'react'
import './form.css';
import relationList from './data/relationData';
import idTypeList from './data/IDTypeData';
import contactTypeList from './data/ContactTypeData';
import mrnList from './data/MRNListData';

const RenderHeader = props =>{
    return(
        <div className="cls_Header">
            <div className="cls_btnCont">
                <div className="input-group cls-submit">
                    <span className="input-group-addon"><i className="fa fa-plus-square"></i></span>
                    <input value="" className="form-control" type="submit" onClick={props.submitClick}/>
                </div>
                <div className="input-group cls-reset">
                    <span className="input-group-addon"><i className="fa fa-refresh"></i></span>
                    <input value="" className="form-control" type="reset" onClick={props.resetClick} />
                </div>
            </div>
        </div>
    )
}
const RenderRelationDom = props => {
    const relationDom = props.relationList.map((row,key) => {
        return (
            <option value={row.id}>{row.value}</option>
        )  
    })

    return <div className="cls_column">
        <select value={props.relType} onChange={props.onChange}>
            <option value={props.defaultValue}>{props.defaultValue}</option>
            {relationDom}
        </select>
    </div>
}
const RenderInputDom = props => {
    
    return (
        <div className={"cls_column " + (props.extraClassName?props.extraClassName:"")  }>
            <input type="text" required name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    )
}

const RenderSearch = props => {
   return (
        <div className="cls_column cls_search">
            <input required type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
            <span className="input-group-addon">
             <i className="fa fa-search"></i>
          </span>
          { props.showResults ? <RenderMRNList mrnList={mrnList} onClick={props.searchValClick}/> : null}
        </div>
    )
}

const RenderSwitch = props =>{
    return (
        <div className="cls_column">
            <div className='custom-control custom-switch'>
                <input required type='checkbox' className='custom-control-input' id='customSwitches' checked={props.switch1} onChange={props.onChange} />
                <label className='custom-control-label' htmlFor='customSwitches'>
                    Is Emergency
                </label>
            </div>
        </div>
    )
}
const RenderMRNList = props => {
    
      return (
        <ul className="list-group">
        {
          props.mrnList.map(function(item,key) {
            return <li className="list-group-item" value={item.id} onClick={() => props.onClick(item.id)}>{item.id}</li>
          })
         }
        </ul>
      ) 
  }
  
class Form extends Component {
  constructor(props) {
    super(props)
    this.relationList = relationList;
    this.idTypeList = idTypeList;
    this.contactTypeList = contactTypeList;
    this.initialmrnList = mrnList;
    
    this.initialState = {
      relMRN:'',
      fname: '',
      sname: '',
      lname: '',
      surname: '',
      relType: 'Relation Type',
      idType:'ID Type',
      id: '',
      contactType: 'Contact Type',
      contact: '',
      address: "",
      isEmergency: true,
      mrnList: this.initialmrnList,
      showResults: false 
      
    }

    this.state = this.initialState
  }
  searchEvent = event => {
   
    
    const{ mrnList1 } = this.initialmrnList && this.initialmrnList.filter(function(item){
    return item.id.toLowerCase().search(
      event.target.value.toLowerCase()) !== -1;
  });
  this.setState({
    relMRN: event.target.value,
    mrnList: mrnList1,
    showResults:true
    });
}
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  relOptChange= event => {
     this.setState({relType: event.target.value});
  }

  idTypeChange= event => {
    this.setState({idType: event.target.value});
  }
  
  contactTypeChange= event => {
    this.setState({contactType: event.target.value});
  }
  handleSwitchChange = nr => () => {
    let isEmergency = `switch${nr}`;
    this.setState({
      [isEmergency]: !this.state[isEmergency]
    });
  }
  submitForm = () => {
    window.open("/list?id=" + this.state.relMRN);
    this.setState(this.initialState)
  }
  resetClick = (event) => {
    this.setState(this.initialState)
  }
  searchValClick = (item) => {
    this.setState({
        relMRN: item,
        showResults:false
    })
  }
  
  render() {
    const { relMRN,fname,sname,lname,surname,relType,idType,id,contactType,contact,address,isEmergency} = this.state;
  
    return (
        <form method="post" action="javascript:void(0);">
            <RenderHeader submitClick={this.submitForm} resetClick={this.resetClick}/>
            <div className="cls_row">
                <RenderRelationDom relType={relType}  defaultValue="Relation Type" relationList={this.relationList} onChange={this.relOptChange}/>
                <RenderSearch showResults={this.state.showResults} name="relMRN" value={relMRN} searchValClick={this.searchValClick} onChange={this.searchEvent} placeholder="Relation MRN" />
                <RenderInputDom  name="fname" value={fname} onChange={this.handleChange} placeholder="First Name" extraClassName="cls_nameCont"/>
                <RenderInputDom  name="sname" value={sname} onChange={this.handleChange} placeholder="Middle Name" extraClassName="cls_nameCont"/>
                <RenderInputDom name="lname" value={lname} onChange={this.handleChange} placeholder="Third Name"  extraClassName="cls_nameCont"/>
                <RenderInputDom  name="surname" value={surname} onChange={this.handleChange} placeholder="Surname"   extraClassName="cls_nameCont"/>
            </div>
            <div className="cls_row">
                <RenderRelationDom relType={idType} defaultValue="ID Type" relationList={this.idTypeList} onChange={this.idTypeChange}/>
                <RenderInputDom name="id" value={id} onChange={this.handleChange} placeholder="ID" />
                <RenderRelationDom relType={contactType} defaultValue="Contact Type" relationList={this.contactTypeList} onChange={this.contactTypeChange}/>
                <RenderInputDom name="contact" value={contact} onChange={this.handleChange} placeholder="Contact No" />
                <RenderInputDom name="address" value={address} onChange={this.handleChange} placeholder="Address" />
                <RenderSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)} />
            </div>
        </form>
    );
  }
}

export default Form;