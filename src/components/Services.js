import React from 'react';
import { Component } from 'react';
import serviceList from "../data/ServiceListData.js";
import ServiceInfoList from "./ServiceInfoList";
class Services extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            initialServiceist: serviceList,
            tempServiceList : serviceList,
            selectedItems: []
        }
    }
    render(){
        const selectedItemcbk = (index,event) => {
            const {selectedItems,tempServiceList} = this.state;
            
            if(!event.currentTarget.classList.contains("selected"))
            {
              
              event.currentTarget.classList.add("selected");
              selectedItems.push(index);
              tempServiceList[index].selected = true;
                this.setState({
                    selectedItems,
                    tempServiceList
                })              
            }
            else
            {
                event.currentTarget.classList.remove("selected");
                tempServiceList[index].selected = false;
                this.setState({
                    selectedItems: selectedItems.filter((selectedItems,i) => {
                        return i != index;                    
                    }),
                    tempServiceList
                });
            }
        }
        
        const selectedAllcbk = (event) => {
            this.setState({
                selectedItems:[]
            })
            const {selectedItems,tempServiceList} = this.state;
            if(!event.currentTarget.classList.contains("selected"))
            {
                
              event.currentTarget.classList.add("selected");
              tempServiceList.map((row,index) => {
                selectedItems.push(index);
                row.selected = true;

              })              
            }
            else
            {
                event.currentTarget.classList.remove("selected");
                tempServiceList.map((row,index) => {
                    row.selected = false;
    
                  })       
            }
            this.setState({
                selectedItems
            })
        }
        const removeMultipleServiceList = () => {
            
            const { tempServiceList,selectedItems } = this.state
          
            this.setState({
                tempServiceList: tempServiceList.filter((tempServiceList, i) => {
                    return !selectedItems.includes(i)
              }),
              selectedItems:[]
            })
          }
        const saveAction = ( ) => {
            this.setState({
                initialServiceist:tempServiceList
            })
            alert("your changes are saved.");
        }
        const starAction = ( ) => {
            
            alert("your are clicked star.");
        }
        const removeServiceList = index => {
            console.log("index:" + index);
            const { tempServiceList } = this.state
          
            this.setState({
                tempServiceList: tempServiceList.filter((tempServiceList, i) => {
                return i !== index
              }),
            })
          }
          

          const { serviceList,tempServiceList } = this.state   
        return (
            <ServiceInfoList serviceList={tempServiceList} removeServiceList={removeServiceList} selectedItemcbk={selectedItemcbk} selectedAllcbk={selectedAllcbk} removeMultipleServiceList={removeMultipleServiceList} saveAction={saveAction} starAction={starAction}></ServiceInfoList>
        )
            
    }
} 

export default  Services;