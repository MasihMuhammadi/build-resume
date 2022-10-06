import react,{useEffect,useState} from 'react';

const Animation = () =>{
    
    const[build,setBuild] = useState(<span className="build">Build Your Own <br /><span className="bigResume">Resume</span></span>);
    const [choose,setChoose] = useState(<span className="choose">Or Choose Your <br /><span className="bigResume">Resume</span ></span>)
    const [chooseOrBuild,setChooseOrBuild] = useState(<span className="buildOrchoose">Build Or Choose Your <br /> <span className="bigResume">Resume</span></span>)

    useEffect(()=>{
        setTimeout(()=>{
            setBuild(choose);
            setTimeout(()=>{
                setChoose(chooseOrBuild)
            },1000)
        },6000)
    })
 
    
    
  
    
    return(<>
    <div className='wallpaper'>
        <div className="getStarted">get Started</div>
    <h4 className='bio'>{build}</h4>
    </div>
    </>)
}

export default Animation;