import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import OptionInput from '../components/OptionInput.jsx'
import OptionListItems from '../components/OptionListItems.jsx'
import SpinCard from '../components/SpinCard.jsx'
import Spinbutton from '../components/Spinbutton.jsx'
function Mainpage() {
    
    const [option, setOption] = useState([])
    const [optionList, setOptionList] = useState([])
   if (option === "") {
     console.table(optionList);
   }
   const [transformX, setTransformX] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  const CARD_WIDTH = 40; 
  const CARD_GAP = 12;    
  const VIEWPORT_WIDTH = 1000;
    

  return (

    <div className='w-screen overflow-hidden '>
      <Header/>
      <OptionInput option={option} setOption={setOption} setOptionList={setOptionList} optionList={optionList}/>
      <div className='flex   h-125 p-8'>
      <OptionListItems  optionList={optionList} />
      <SpinCard optionList={optionList}/>

      </div>
      <Spinbutton/>
    </div>
  )
}

export default Mainpage
