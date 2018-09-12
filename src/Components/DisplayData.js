import React, { Component } from 'react';

const maintainence_data = require('../data/maintainence_data.json');

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: [],
      extended_cost_$: [],
      end_date: [],
      turbine_name: [],
      labour_cost_$: [],
      windfarm_name: [],
      duration_mins: [],
      sr_type: [],
      service_req_description: [],
      pk: [],
      service_date: [],
      start_date: [],
      service_req_number: []
    };
  }

  handleChange(e){
    this.setState({value: e.target.value}, () => {
      if(this.state.value === 'all'){
        const index = []; const extended_cost_$ = []; const end_date = []; const turbine_name = [];  const labour_cost_$ = [];
        const windfarm_name = []; const duration_mins = []; const sr_type = []; const service_req_description = [];
        const pk = []; const service_date = []; const start_date = []; const service_req_number = []; let i = 0;
        for(i; i<maintainence_data.length; i++){
          index[i] = "Entry No. " + (i + 1);
          extended_cost_$[i] = maintainence_data[i].extended_cost_$;
          end_date[i] = maintainence_data[i].end_date;
          if(maintainence_data[i].end_date === ''){
            end_date[i] = "Not Recorded";
          }
          turbine_name[i] = maintainence_data[i].turbine_name;
          labour_cost_$[i] = maintainence_data[i].labour_cost_$;
          windfarm_name[i] = maintainence_data[i].windfarm_name;
          duration_mins[i] = maintainence_data[i].duration_mins;
          sr_type[i] = maintainence_data[i].sr_type;
          service_req_description[i] = maintainence_data[i].service_req_description;
          pk[i] = maintainence_data[i].pk;
          service_date[i] = maintainence_data[i].service_date;
          start_date[i] = maintainence_data[i].start_date;
          service_req_number[i] = maintainence_data[i].service_req_number;
        }
        this.setState({index, extended_cost_$, end_date, turbine_name, labour_cost_$, windfarm_name, duration_mins,
          sr_type, service_req_description, pk, service_date, start_date, service_req_number});
      }else if(this.state.value === 'fifteen'){
        const index = []; const extended_cost_$ = []; const end_date = []; const turbine_name = [];  const labour_cost_$ = [];
        const windfarm_name = []; const duration_mins = []; const sr_type = []; const service_req_description = [];
        const pk = []; const service_date = []; const start_date = []; const service_req_number = []; let i = 0;
        for(i; i<15; i++){
          index[i] = "Entry No. " + (i + 1);
          extended_cost_$[i] = maintainence_data[i].extended_cost_$;
          end_date[i] = maintainence_data[i].end_date;
          if(maintainence_data[i].end_date === ''){
            end_date[i] = "Not Recorded";
          }
          turbine_name[i] = maintainence_data[i].turbine_name;
          labour_cost_$[i] = maintainence_data[i].labour_cost_$;
          windfarm_name[i] = maintainence_data[i].windfarm_name;
          duration_mins[i] = maintainence_data[i].duration_mins;
          sr_type[i] = maintainence_data[i].sr_type;
          service_req_description[i] = maintainence_data[i].service_req_description;
          pk[i] = maintainence_data[i].pk;
          service_date[i] = maintainence_data[i].service_date;
          start_date[i] = maintainence_data[i].start_date;
          service_req_number[i] = maintainence_data[i].service_req_number;
        }
        this.setState({index, extended_cost_$, end_date, turbine_name, labour_cost_$, windfarm_name, duration_mins,
          sr_type, service_req_description, pk, service_date, start_date, service_req_number});
      }else if(this.state.value === 'fifty'){
        const index = []; const extended_cost_$ = []; const end_date = []; const turbine_name = [];  const labour_cost_$ = [];
        const windfarm_name = []; const duration_mins = []; const sr_type = []; const service_req_description = [];
        const pk = []; const service_date = []; const start_date = []; const service_req_number = []; let i = 0;
        for(i; i<50; i++){
          index[i] = "Entry No. " + (i + 1);
          extended_cost_$[i] = maintainence_data[i].extended_cost_$;
          end_date[i] = maintainence_data[i].end_date;
          if(maintainence_data[i].end_date === ''){
            end_date[i] = "Not Recorded";
          }
          turbine_name[i] = maintainence_data[i].turbine_name;
          labour_cost_$[i] = maintainence_data[i].labour_cost_$;
          windfarm_name[i] = maintainence_data[i].windfarm_name;
          duration_mins[i] = maintainence_data[i].duration_mins;
          sr_type[i] = maintainence_data[i].sr_type;
          service_req_description[i] = maintainence_data[i].service_req_description;
          pk[i] = maintainence_data[i].pk;
          service_date[i] = maintainence_data[i].service_date;
          start_date[i] = maintainence_data[i].start_date;
          service_req_number[i] = maintainence_data[i].service_req_number;
        }
        this.setState({index, extended_cost_$, end_date, turbine_name, labour_cost_$, windfarm_name, duration_mins,
          sr_type, service_req_description, pk, service_date, start_date, service_req_number});
      }else if(this.state.value === 'hundred'){
        const index = []; const extended_cost_$ = []; const end_date = []; const turbine_name = [];  const labour_cost_$ = [];
        const windfarm_name = []; const duration_mins = []; const sr_type = []; const service_req_description = [];
        const pk = []; const service_date = []; const start_date = []; const service_req_number = []; let i = 0;
        for(i; i<100; i++){
          index[i] = "Entry No. " + (i + 1);
          extended_cost_$[i] = maintainence_data[i].extended_cost_$;
          end_date[i] = maintainence_data[i].end_date;
          if(maintainence_data[i].end_date === ''){
            end_date[i] = "Not Recorded";
          }
          turbine_name[i] = maintainence_data[i].turbine_name;
          labour_cost_$[i] = maintainence_data[i].labour_cost_$;
          windfarm_name[i] = maintainence_data[i].windfarm_name;
          duration_mins[i] = maintainence_data[i].duration_mins;
          sr_type[i] = maintainence_data[i].sr_type;
          service_req_description[i] = maintainence_data[i].service_req_description;
          pk[i] = maintainence_data[i].pk;
          service_date[i] = maintainence_data[i].service_date;
          start_date[i] = maintainence_data[i].start_date;
          service_req_number[i] = maintainence_data[i].service_req_number;
        }
        this.setState({index, extended_cost_$, end_date, turbine_name, labour_cost_$, windfarm_name, duration_mins,
          sr_type, service_req_description, pk, service_date, start_date, service_req_number});
      }

    });
    e.preventDefault();
  }

  componentWillMount(){
    const index = []; const extended_cost_$ = []; const end_date = []; const turbine_name = [];  const labour_cost_$ = [];
    const windfarm_name = []; const duration_mins = []; const sr_type = []; const service_req_description = [];
    const pk = []; const service_date = []; const start_date = []; const service_req_number = []; let i = 0;
    for(i; i<maintainence_data.length; i++){
      index[i] = "Entry No. " + (i + 1);
      extended_cost_$[i] = maintainence_data[i].extended_cost_$;
      end_date[i] = maintainence_data[i].end_date;
      if(maintainence_data[i].end_date === ''){
        end_date[i] = "Not Recorded";
      }
      turbine_name[i] = maintainence_data[i].turbine_name;
      labour_cost_$[i] = maintainence_data[i].labour_cost_$;
      windfarm_name[i] = maintainence_data[i].windfarm_name;
      duration_mins[i] = maintainence_data[i].duration_mins;
      sr_type[i] = maintainence_data[i].sr_type;
      service_req_description[i] = maintainence_data[i].service_req_description;
      pk[i] = maintainence_data[i].pk;
      service_date[i] = maintainence_data[i].service_date;
      start_date[i] = maintainence_data[i].start_date;
      service_req_number[i] = maintainence_data[i].service_req_number;
    }
    this.setState({index, extended_cost_$, end_date, turbine_name, labour_cost_$, windfarm_name, duration_mins,
      sr_type, service_req_description, pk, service_date, start_date, service_req_number});
    }

    render() {
      var index_item = [];
      if(this.state.index){
        index_item = this.state.index.map(index =>{
          return(<tr><td>{index}</td></tr>);
        });
      }

      var extended_cost_$_item = [];
      if(this.state.extended_cost_$){
        extended_cost_$_item = this.state.extended_cost_$.map(extended_cost_$ =>{
          return(<tr><td>{extended_cost_$}</td></tr>);
        });
      }
      var end_date_item = [];
      if(this.state.end_date){
        end_date_item = this.state.end_date.map(end_date =>{
          return(<tr><td>{end_date}</td></tr>);
        });
      }
      var turbine_name_item = [];
      if(this.state.turbine_name){
        turbine_name_item = this.state.turbine_name.map(turbine_name =>{
          return(<tr><td>{turbine_name}</td></tr>);
        });
      }
      var labour_cost_$_item = [];
      if(this.state.labour_cost_$){
        labour_cost_$_item = this.state.labour_cost_$.map(labour_cost_$ =>{
          return(<tr><td>{labour_cost_$}</td></tr>);
        });
      }
      var windfarm_name_item = [];
      if(this.state.windfarm_name){
        windfarm_name_item = this.state.windfarm_name.map(windfarm_name =>{
          return(<tr><td>{windfarm_name}</td></tr>);
        });
      }
      var duration_mins_item = [];
      if(this.state.duration_mins){
        duration_mins_item = this.state.duration_mins.map(duration_mins =>{
          return(<tr><td>{duration_mins}</td></tr>);
        });
      }
      var sr_type_item = [];
      if(this.state.sr_type){
        sr_type_item = this.state.sr_type.map(sr_type =>{
          return(<tr><td>{sr_type}</td></tr>);
        });
      }
      var service_req_description_item = [];
      if(this.state.service_req_description){
        service_req_description_item = this.state.service_req_description.map(service_req_description =>{
          return(<tr><td>{service_req_description}</td></tr>);
        });
      }
      var pk_item = [];
      if(this.state.pk){
        pk_item = this.state.pk.map(pk =>{
          return(<tr><td>{pk}</td></tr>);
        });
      }
      var service_date_item = [];
      if(this.state.service_date){
        service_date_item = this.state.service_date.map(service_date =>{
          return(<tr><td>{service_date}</td></tr>);
        });
      }
      var start_date_item = [];
      if(this.state.start_date){
        start_date_item = this.state.start_date.map(start_date =>{
          return(<tr><td>{start_date}</td></tr>);
        });
      }
      var service_req_number_item = [];
      if(this.state.service_req_number){
        service_req_number_item = this.state.service_req_number.map(service_req_number =>{
          return(<tr><td>{service_req_number}</td></tr>);
        });
      }

      return (
        <div className="DisplayData">
        <h3>Data</h3>


        <p>Number of Entries to Display:&nbsp;
          <select onChange={this.handleChange.bind(this)}>
            <option value="all">All</option>
            <option value="fifteen">15</option>
            <option value="fifty">50</option>
            <option value="hundred">100</option>
          </select>
        </p>

        {/*Table 1*/}
        <table>
        <tr>
        <td><table><thead>
        <tr>
        <td><b>Index&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {index_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Extended Cost ($)&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {extended_cost_$_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>End Date&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {end_date_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Turbine Name&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {turbine_name_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Labour Cost ($)&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {labour_cost_$_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Windfarm Name&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {windfarm_name_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Duration Mins&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {duration_mins_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>SR type&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {sr_type_item}
        </tbody>
        </table></td>
        </tr>
        </table>
        <p></p>

        {/*Table 2*/}

        <table><tr>
        <td><table><thead>
        <tr>
        <td><b>Index&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {index_item}
        </tbody>
        </table></td>
        <td><table><thead>
        <tr>
        <td><b>Service Req Description&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {service_req_description_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>PK&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {pk_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Service Date&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {service_date_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Start Date&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {start_date_item}
        </tbody>
        </table></td>

        <td><table><thead>
        <tr>
        <td><b>Service Req Number&emsp;</b></td>
        </tr>
        </thead>
        <tbody>
        {service_req_number_item}
        </tbody>
        </table></td>
        </tr>
        </table>
        <p></p>
        </div>
      );
    }
  }

  export default DisplayData;
