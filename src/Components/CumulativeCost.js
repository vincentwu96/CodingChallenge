import React, { Component } from 'react';
import { LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { deep_copy } from './SortHelper.js';

const maintainence_data = require('../data/maintainence_data.json');

class CumulativeCost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 'all'
    };
  }


  componentDidMount(){
    var data = [];
    var data_temp = [];
    var extended_cost=0;
    var labour_cost=0;
    data_temp = deep_copy(maintainence_data);
    for(let j=0; j<data_temp.length; j++){
      data[j] = data_temp[data_temp.length-j-1];  // move earlier years to left
      extended_cost = extended_cost + data[j].extended_cost_$;  // cumulative extended_cost_$
      data[j].extended_cost_$ = extended_cost;

      labour_cost = labour_cost + data[j].labour_cost_$;  // cumulative labour_cost_$
      data[j].labour_cost_$ = labour_cost;
    }
    this.setState({data});
  }

  /* eslint-disable */
  handleChange(e){
    var extended_cost=0;
    var labour_cost=0;
    this.setState({value: e.target.value}, () => {

      if(this.state.value === 'all'){
        var data = [];
        var data_temp = [];
        data_temp = deep_copy(maintainence_data);
        for(let j=0; j<data_temp.length; j++){
          data[j] = data_temp[data_temp.length-j-1];  // move earlier years to left
          extended_cost = extended_cost + data[j].extended_cost_$;  // cumulative extended_cost_$
          data[j].extended_cost_$ = extended_cost;

          labour_cost = labour_cost + data[j].labour_cost_$;  // cumulative labour_cost_$
          data[j].labour_cost_$ = labour_cost;
        }
        this.setState({data});
      }else if(this.state.value === 'year1'){
        var data = [];
        var data_temp = [];
        data_temp = deep_copy(maintainence_data);
        for(let i=0; i<data_temp.length; i++){
          data[i] = data_temp[data_temp.length-i-1];  // move earlier years to left
          extended_cost = extended_cost + data[i].extended_cost_$;  // cumulative extended_cost_$
          data[i].extended_cost_$ = extended_cost;
          labour_cost = labour_cost + data[i].labour_cost_$;  // cumulative labour_cost_$
          data[i].labour_cost_$ = labour_cost;
        }
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2014){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year2'){
        var data = [];
        var data_temp = [];
        data_temp = deep_copy(maintainence_data);
        for(let i=0; i<data_temp.length; i++){
          data[i] = data_temp[data_temp.length-i-1];  // move earlier years to left
          extended_cost = extended_cost + data[i].extended_cost_$;  // cumulative extended_cost_$
          data[i].extended_cost_$ = extended_cost;
          labour_cost = labour_cost + data[i].labour_cost_$;  // cumulative labour_cost_$
          data[i].labour_cost_$ = labour_cost;
        }
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2015){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year3'){
        var data = [];
        var data_temp = [];
        data_temp = deep_copy(maintainence_data);
        for(let i=0; i<data_temp.length; i++){
          data[i] = data_temp[data_temp.length-i-1];  // move earlier years to left
          extended_cost = extended_cost + data[i].extended_cost_$;  // cumulative extended_cost_$
          data[i].extended_cost_$ = extended_cost;
          labour_cost = labour_cost + data[i].labour_cost_$;  // cumulative labour_cost_$
          data[i].labour_cost_$ = labour_cost;
        }
        for(let j=data.length-1; j>=0; j--){
          var date = data[j].end_date.substring(0,4);
          if(date != 2016){
            data.splice(j, 1);
          }
        }
        this.setState({data});
      }else if(this.state.value === 'year4'){
        var data = [];
        var data_temp = [];
        data_temp = deep_copy(maintainence_data);
        for(let i=0; i<data_temp.length; i++){
          data[i] = data_temp[data_temp.length-i-1];  // move earlier years to left
          extended_cost = extended_cost + data[i].extended_cost_$;  // cumulative extended_cost_$
          data[i].extended_cost_$ = extended_cost;
          labour_cost = labour_cost + data[i].labour_cost_$;  // cumulative labour_cost_$
          data[i].labour_cost_$ = labour_cost;
        }
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
/*
    const date = [];
    for(let j=0; j<data.length; j++){
      date[j] = data[j].service_date;
    }
*/
    return (
      <div className="CumulativeCost">
      <h3>Cumulative Cost</h3>
        <ResponsiveContainer width='100%' height={300}>
        <LineChart width={600} height={300} data={this.state.data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="service_date"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line name="Extended Cost" type="monotone" dataKey="extended_cost_$" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line name="Labour Cost" type="monotone" dataKey="labour_cost_$" stroke="#82ca9d" />
          </LineChart>
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

export default CumulativeCost;
