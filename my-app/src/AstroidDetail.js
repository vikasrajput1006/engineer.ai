import React from 'react';
import { InputLabel,FormGroup,FormLabel } from '@material-ui/core';

function AstroidDetail(props){
  const data= props.location.state;
  const name= data.name;
  const nasa_jpl_url= data.JplUrl;
  const is_potentially_hazardous_asteroid= data.isHazardous;  

   return(
    <FormGroup  className="detail-box">
          <div>-<FormLabel >{name}</FormLabel > </div>
          <div>-<FormLabel > {nasa_jpl_url} </FormLabel></div>
          <div>-<FormLabel >{is_potentially_hazardous_asteroid.toString()}</FormLabel></div>
    </FormGroup>   
   )
}

export default AstroidDetail;
