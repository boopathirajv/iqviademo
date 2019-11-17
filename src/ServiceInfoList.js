import React, { Component } from 'react';
import './ServiceList.css';
const ServiceTableHeader = () => {
    return (
        
        <div class="cls_Header">
            <div class="cls_textCont"><span class="cls_iconCont"><i class="fa fa-empire"></i></span><span>Service Information</span></div>
            <div class="cls_btnCont">
                <div class="input-group cls_noticount">
                    <span class="input-group-addon"></span>  
                </div>
                
                <div class="input-group cls_bell">
                    <span class="input-group-addon"><i class="fa fa-bell-o"></i></span>  
                </div>
                <div class="input-group cls_remove">
                    <span class="input-group-addon"><i class="fa fa-times-circle"></i></span>
                </div>
                
                <div class="input-group cls_star">
                  <span class="input-group-addon"><i class="fa fa-star"></i></span>
                </div>
                <div class="input-group cls_save">
                    <span class="input-group-addon"><i class="fa fa-save"></i></span>
                </div>
                
            </div>
        </div>
        
    )
  }

const SubHeader = () => {
    return(
        <div class="cls_SubHeader"> <div class="cls_textCont"><span class="cls_iconCont"><span className="cls_input" ></span></span><span>Service(s)</span></div></div>
    )
}

const  ServiceListDom = props => {
    const rows = props.serviceList.map((row, index) => {
      return (
        <div className="cls_ServiceList" key={index}>
           <div className="cls_ServiceIdCont" key={index}>
            <div className="cls_ServiceIdInput"><div className="cls_input" key={index}></div></div>
            <div className="cls_ServiceIdValue">{row.id}</div>
          </div>   
          <div className="cls_ServiceContent" key={index}>
            <div className="cls_ServiceName">{row.name}</div>
            <div className="cls_ServiceUnitCont">
              <div className="cls_ServiceCount"><i class="fa fa-bullseye" aria-hidden="true"></i>{row.testCount}</div> 
              <div className="cls_ServiceUnit"><i class="fa fa-money" aria-hidden="true"></i>{row.unit1}</div> 
              <div className="cls_ServiceUnit"><i class="fa fa-money" aria-hidden="true"></i>{row.unit2}</div>
              <div class="cls_ActionCont">  
                <div className="cls_ServiceEdit"><i class="fa fa-pencil" aria-hidden="true"></i></div> 
                <div className="cls_ServiceDelete"><i class="fa fa-trash-o" aria-hidden="true"></i></div>  
              </div>
            </div>
            <div className="cls_ServiceTime">{row.time}</div>
          </div>   
        </div>
      )
    })
  
    return <div className="cls_ServiceListCont">{rows}</div>
  }


class ServiceInfoList extends Component {

  render() {
    const { serviceList } = this.props

    return (
      <div className="cls_serviceListCont">
        <ServiceTableHeader/>
        <SubHeader/>
        <ServiceListDom serviceList={serviceList}/>
      </div>
        
    )
  }
}

export default ServiceInfoList;