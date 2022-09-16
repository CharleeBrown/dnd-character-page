import React, {useState, useEffect} from 'react';
import styles from './ClassPick.module.css';


function ClassPick(){
 function getInitialState(){
  return {
    isDisabled:true
  }
}

   function handleChange(event){
    console.log(event.target.value);
    console.log("SENT");
    getName(event.target.value);
  }
function getName(mains){
  let spellURL :string ="https://api.open5e.com/spells/?dnd_class="+mains;
    fetch(spellURL)
                  .then((response) =>{
                    return response.json()})
                  .then(data =>{
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
    <select onChange={handleChange} name="classList">
      <option disabled selected>Select First Class </option>
        {names.map(n =>(<option   key={n.slug}>{n.name}</option>))}
        </select>
       
        <select >
        <option disabled selected>Select second Class </option>
        {names.map(n =>(<option   key={n.slug}>{n.name}</option>))}
        </select>
        <select>
      <option  selected>Select a Spell </option>
        {spells.map(s =>(<option key={!s.cantrip}>{s.name }</option>))}
        </select>
     {spells.map(d =>(<p key={!d.cantrip}>{d.description}</p>))}
  </div>
);
}
export default ClassPick;
