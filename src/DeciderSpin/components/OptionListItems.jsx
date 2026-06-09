import React from 'react'

function OptionListItems({optionList}) {
 
  return (
    <div className=' max-w-200 overflow-x-scroll  mr-8 '  style={{scrollbarWidth:'none'}} >
      <ol className='ml-2 px-2 space-y-3 list-inside text-gray-800 '>
        {optionList.map((item, index)=> <li className='border m-2 px-4 py-2 w-50' key={index} >{item.title.charAt(0).toUpperCase()}{item.title.slice(1).toLowerCase()}</li>) }
      </ol>
    </div>
  )
}

export default OptionListItems
