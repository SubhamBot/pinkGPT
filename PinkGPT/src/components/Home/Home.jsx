import { useState,useEffect,useRef } from 'react'
import Typewriter from 'typewriter-effect';

import eustace from './image.png';
import courageandmuriel from './muriel.png';
import courage from './couragethumbsup.png';

function Home() {
  
  const introText = ['Hi There','This is PinkGPT','It is an attempt',' at creating a funky UI',' for ChatGPT'];
  const introText1 = ["TBH, I'm not sure,", "If this is really funky or just","PLAIN UGLY"];
  const introText2 = ["But One thing is Certain,", "More Features are", "ON THEIR WAY!"]
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [stringNo, setstringNo] = useState(0);
  const [typedText1, setTypedText1] = useState('');
  const [index1, setIndex1] = useState(0);
  const [stringNo1, setstringNo1] = useState(0);
  const [typedText2, setTypedText2] = useState('');
  const [index2, setIndex2] = useState(0);
  const [stringNo2, setstringNo2] = useState(0);
  
  
  const addChars = () => {
    
    
  };

    useEffect(() => {
      if(stringNo<introText.length){
        if(index < introText[stringNo].length) {
          const t = setTimeout(()=>{setTypedText(prevText => prevText + introText[stringNo][index]); setIndex(prevIndex => prevIndex+1)},50)
          console.log(t)
          return () => clearTimeout(t);
        }
        else{
          if(stringNo<introText.length){
            setstringNo(prevstringNo => prevstringNo+1);
            setTypedText(prevText =>  prevText+'<br/>');
            setIndex(prevIndex=>0);
            
          }
        }
      }
      if(stringNo1<introText1.length){
        if(index1 < introText1[stringNo1].length) {

          const t = setTimeout(()=>{setTypedText1(prevText1 => prevText1 + introText1[stringNo1][index1]); setIndex1(prevIndex1 => prevIndex1+1)},50)
          console.log(t)
          return () => clearTimeout(t);
        }
        else{
          if(stringNo1<introText1.length){
            setstringNo1(prevstringNo1 => prevstringNo1+1);
            setTypedText1(prevText1 =>  prevText1+'<br/>');
            setIndex1(prevIndex1=>0);
            
          }
        }
      }
      if(stringNo2<introText2.length){
        if(index2 < introText2[stringNo2].length) {
          const t = setTimeout(()=>{setTypedText2(prevText2 => prevText2 + introText2[stringNo2][index2]); setIndex2(prevIndex2 => prevIndex2+1)},50)
          console.log(t)
          return () => clearTimeout(t);
        }
        else{
          if(stringNo2<introText2.length){
            setstringNo2(prevstringNo2 => prevstringNo2+1);
            setTypedText2(prevText2 =>  prevText2+'<br/>');
            setIndex2(prevIndex2=>0);
            
          }
        }
      }
      
      
    }, );

    
  
  return (
    <>
      <div>
      
        <div className= 'fixed bg-pink-900 h-screen border-r-[5px] border-white-300 border-dashed w-[370px] flex'>
          <h1 className='pl-16 pt-1 font-black font-mono h-12 w-full  border-b-[5px] border-white-300 border-dashed text-white text-2xl'>Chat History</h1>
        
        </div>
        
        <div className='relative top-5 bottom-96 left-24'>
          
          <div className='relative top-10 start-[450px] pl-10 left-96 w-96 h-[400px] border-[5px] rounded-lg border-white border-dashed font-black font-mono text-pink-950 text-5xl shadow-lg'>
            <div dangerouslySetInnerHTML={{ __html: typedText }} />
          </div>
          <img className='absolute top-[440px] start-[450px] w-80' src={courageandmuriel} />
          <img className='absolute top-10 left-[1050px] w-70 h-[350px]' src={eustace}/>
          <div className='relative top-0 pl-5 pt-10 start-[950px] left-1/3 w-96 h-96 border-[5px] rounded-lg border-white border-dashed font-black font-mono text-white text-5xl shadow-2xl'>
            <div dangerouslySetInnerHTML={{ __html: typedText1 }} />
          </div>
          
          <div className='relative top-[20px] my-24 bottom-24 pl-5 pt-5 pb-5 start-[450px] left-96 w-96 h-72 border-[5px] rounded-lg border-white border-dashed font-black font-mono text-pink-950 text-5xl shadow-xl'>
            <div dangerouslySetInnerHTML={{ __html: typedText2 }} />

          </div>
          <img className='absolute top-[815px] bottom-[384px] left-[920px] w-80' src={courage}/>
        </div>
        <button className='absolute top-[1140px] left-[980px] w-80 h-20 border-[5px] rounded-lg border-red-900 border-dashed font-black font-mono bg-red-200 text-pink-950 text-3xl hover:text-white hover:border-white hover:bg-pink-900 hover:shadow-2xl'>
          start
        </button>
      </div>
      
    </>
  )
}

export default Home