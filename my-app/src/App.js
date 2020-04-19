import React from 'react';
import './App.css';
import { Button,TextField,List,ListItem,FormGroup} from '@material-ui/core';
import axios from 'axios';

const API_KEY = 'rmvTWyNUTQ95gpLSEwxjrTeJL5OpChhpCZi3sS9U';

class App extends React.Component {

  state ={ asteroidId:'',
            near_earth_objects:[] } 

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSelect(data){  
   this.getAstroidDetail(data); 
  }

  handleSubmit = () =>{
    console.log('handleSubmit',this.state.asteroidId);  
    this.getAstroidDetail(this.state.asteroidId); 
  }

  getAstroidDetail = (asteroidId) =>{
    let _this= this;
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`).then(response => {   
      if(response.data && response.status == 200){        
        const data= response.data;
        const name= data.name;
        const nasa_jpl_url= data.nasa_jpl_url;
        const is_potentially_hazardous_asteroid= data.is_potentially_hazardous_asteroid; 
        _this.props.history.push({pathname: '/astroidDetail',
                  state:{
                    'name': name,
                    'JplUrl': nasa_jpl_url,
                    'isHazardous': is_potentially_hazardous_asteroid        
                  }});
      }
    }).catch();  
  }

  handleAstroidlist = () =>{
    let _this= this;
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`).then(response => {    
      console.log( response.data);
      if(response.data && response.status == 200){        
        const data= response.data;
        const near_earth_objects= data.near_earth_objects;
        console.log(near_earth_objects);    
        this.setState({near_earth_objects});
       }
    }).catch();    
  }

  render() {
    const {asteroidId,near_earth_objects}= this.state;
   return( 
    <FormGroup className="box">     
      <TextField id="standard-basic" name="asteroidId" label="Enter Asteroid ID" value={asteroidId} onChange={this.handleChange}/>
       <Button variant="contained" disabled={asteroidId ? false : true} color="primary" onClick={this.handleSubmit}>
          Submit
      </Button>     
        <Button variant="contained" color="primary" onClick={this.handleAstroidlist}>
            Random Asteroid
        </Button>       
     <List>
       {near_earth_objects.map(dataId =>{        
         return <ListItem key={dataId.id} value={dataId} button onClick={this.handleSelect.bind(this,dataId.id)}>  
                    {dataId.id}       
                </ListItem>
        })}     
     </List>     
    </FormGroup>
   )
   };
}

export default App;
