import React, {useState, useEffect} from 'react';
import styles from './ClassPick.module.css';
import {Select, Box, Grid} from '@chakra-ui/react'

function ClassPick(){
 function getInitialState(){
  return {
    isDisabled:true
  }
}

   function handleChange(event){
    getName(event.target.value);
  }
function getName(mains){
  let spellURL :string ="https://api.open5e.com/spells/?dnd_class="+mains;
    fetch(spellURL)
                  .then((response) =>{
                    return response.json()})
                  .then(data =>{
                    data.results.sort((a, b) =>a.level.localeCompare(b.level))
                    setSpells(data.results);
                  });
}

function setters() {
  this.setState({ 
    isDisabled: false
  });
}

  
  const [keyer, setKey] = useState();
  const [names, setNames] = useState([]);
  const [spells, setSpells] = useState([]);
const fetchData = () =>{
  let classURL :string = "https://api.open5e.com/classes";
 

  let nameRes = fetch(classURL)
  .then((response) => {
    return response.json()
      })
  .then(data => {
    setNames(data.results);
  })}

useEffect(() => {
getInitialState()
fetchData()
},[])

return(
  
  <div className={styles.ClassPick}>
    <Box>
    <Select onChange={handleChange} bg="white" color="black"  name="classList">
      <option disabled selected>Select First Class </option>
        {names.map(n =>(<option   key={n.slug}>{n.name}</option>))}
        </Select>
    </Box>
    <Box>
      <table>
        <thead>
          <tr>
            <th>Spell Name</th>
            <th>Spell Level</th>
          </tr>
        </thead>
        <tbody>
        {spells.map((d) => <tr key={d.id}>
          <td  id="levels">{d.name}</td>
          <td id="levels">{d.level}</td>
        </tr>)}
        </tbody>
      </table>
      </Box>
  </div>
);
}
export default ClassPick;
