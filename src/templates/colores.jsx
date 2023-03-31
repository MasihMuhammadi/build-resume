import React,{useState,useEffect} from 'react'

const Colores = (props) =>{
    const [bodyColor,setBodyColor] = useState('white')
    const [bodyFontColor,setBodyFontColor] = useState('')
    const [headerColor,setHeaderColor] = useState('')


    const handleBodyColor = (e) =>{
        setBodyColor(e.target.value)
        // props.onChange(bodyColor)
    }
    const handleBodyFontColor = (e) =>{
        setBodyFontColor(e.target.value)
        // props.onChange(bodyFontColor)
    }
    const handleHeaderColor = (e) =>{
        setHeaderColor(e.target.value)
        // props.onChange(headerColor)
    }
    useEffect(() =>{
        props.onChange(bodyColor,bodyFontColor,headerColor)
    })
    return(<>
    <div className=''>
      <input className="" id="bodyColor" type="color"     onChange={handleBodyColor}/>
      <input className="" id="bodyFontColor" type="color" onChange={handleBodyFontColor}/>
      <input className="" id="headerColor" type="color"   onChange={handleHeaderColor}/>
    </div> 
    </>)
}

export default Colores;