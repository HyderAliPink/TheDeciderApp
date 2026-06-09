
function OptionInput({option, setOption, setOptionList, optionList}) {
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log();
        if (option.trim() === "") {
            return
        }
        setOptionList([...optionList, {id:optionList.length, title:option}])
        setOption("")


    }
  return (
    
        <form onSubmit={handleSubmit} className="flex items-center ml-2">
  <input placeholder='option' value={option} onChange={(e)=>{ 
      setOption(e.target.value)
        
    }
}
    type="text"
    placeholder="option"
    autoComplete="off"
    className="
      min-h-10.5
      max-w-37.5
      px-4
      text-[15px]
      text-gray-500
      bg-transparent
      border
      border-[#5e4dcd]
      rounded-l-md
      outline-none
      focus:border-[#3898EC]
    "
  />

  <button
  
    type="submit"
    
    className="
      min-h-10.5
      px-2
      py-1
      text-[15px]
      text-white
      bg-[#5e4dcd]
      rounded-r-md
      cursor-pointer
      transition-colors
      duration-300
      hover:bg-[#5e5dcd]
    ">Add
  </button>
</form>
       
    
  )
}

export default OptionInput
