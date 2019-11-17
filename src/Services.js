import React from 'react';
import { Component } from 'react';
import serviceList from "./ServiceListData.js";
import ServiceInfoList from "./ServiceInfoList";
class Services extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            serviceList : serviceList
        }
    }
    render(){
        const removeServiceList = index => {
            console.log("index:" + index);
            const { serviceList } = this.state
          
            this.setState({
                serviceList: serviceList.filter((serviceList, i) => {
                return i !== index
              }),
            })
          }
          

          const { serviceList } = this.state   
        return (
            <ServiceInfoList serviceList={serviceList} removeServiceList={removeServiceList}></ServiceInfoList>
        )
            
    }
} 

export default  Services;