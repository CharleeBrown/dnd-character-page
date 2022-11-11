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
      <div class="rTable">
		<div class="rTableHeading">
				<div class="row rTableRow">
						<div class="col rTableHead">Spell Name</div>
						<div class="col rTableHead">Spell Level</div>
				</div>
		</div>
	<div class="rTableBody">
        {spells.map((d) => <div class="row">
					<div class="col-lg rTableCell">{d.name}</div>
					<div class="col-sm rTableCell">{d.level}</div>
			</div>)}
	</div>
</div>
      </Box>
  </div>
);
}
export default ClassPick;
