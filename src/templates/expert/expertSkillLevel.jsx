import React,{useState} from 'react'


const ExpertSkillLevel = () =>{
    const levels = [
      'star','circle','4zol'
    ]
    let r = Math.floor(Math.random() * levels.length);
    let random_skill = levels[r].answer;


    return(<>
        <option>{random_skill}</option>

    </>)
}


export default ExpertSkillLevel;