import React, { Component } from 'react';
import { BarChart, Bar, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { compare_sr_type } from './SortHelper.js';
const maintainence_data = require('../data/maintainence_data.json');

class CostbyServiceType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 'all'
    };
  }

  dataInit(maintainence_data){
    const data = [];
    for(let i=0; i<maintainence_data.length; i++){
      data[i] = maintainence_data[i];
      data[i].pk = data[i].extended_cost_$ + data[i].labour_cost_$; //overwrite pk since it's not getting used anyways
    }
    data.sort(compare_sr_type);
    this.setState({data});
  }

  componentDidMount(){
    this.dataInit(maintainence_data);
  }

  /* eslint-disable */
  handleChange(e){
    this.setState({value: e.target.value}, () => {
      if(this.state.value === 'all'){
        this.dataInit(maintainence_data);
      }else if(this.state.value === 'year1'){
        const data = [];
        for(let i=0; i<maintainence_data.length; i++){
          data[i] = maintainence_data[i];
          data[i].pk = data[i].extended_cost_$ + data[i].labour_cost_$; //overwrite pk since it's not getting used anyways
        }
        data.sort(compare_sr_type);
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2014){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year2'){
        const data = [];
        for(let i=0; i<maintainence_data.length; i++){
          data[i] = maintainence_data[i];
          data[i].pk = data[i].extended_cost_$ + data[i].labour_cost_$; //overwrite pk since it's not getting used anyways
        }
        data.sort(compare_sr_type);
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2015){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year3'){
        const data = [];
        for(let i=0; i<maintainence_data.length; i++){
          data[i] = maintainence_data[i];
          data[i].pk = data[i].extended_cost_$ + data[i].labour_cost_$; //overwrite pk since it's not getting used anyways
        }
        data.sort(compare_sr_type);
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2016){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year4'){
        const data = [];
        for(let i=0; i<maintainence_data.length; i++){
          data[i] = maintainence_data[i];
          data[i].pk = data[i].extended_cost_$ + data[i].labour_cost_$; //overwrite pk since it's not getting used anyways
        }
        data.sort(compare_sr_type);
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2017){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }
    });
    e.preventDefault();
  }



  render() {
    return (
      <div className="CostbyServiceType">
      <h3>Cost By Service Type</h3>
      <ResponsiveContainer width='100%' height={300}>
      <BarChart width={600} height={300} data={this.state.data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="sr_type"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Bar name="Extended + Labor Cost" dataKey="pk" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>

      <p style={{marginLeft: 5 + 'em'}}>Displaying End Date Year(s):&nbsp;
        <select onChange={this.handleChange.bind(this)}>
          <option value="all">All</option>
          <option value="year1">2014</option>
          <option value="year2">2015</option>
          <option value="year3">2016</option>
          <option value="year4">2017</option>
        </select>
      </p>
      <hr />
      </div>
    );
  }
}

export default CostbyServiceType;
