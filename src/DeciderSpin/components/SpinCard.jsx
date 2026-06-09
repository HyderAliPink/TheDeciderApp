import React from 'react'

function SpinCard({optionList}) {




  return (
    <div className='flex gap-3 min-w-[600px] max-w-[1000px]  items-center  overflow-scroll  m-2  ' style={{scrollbarWidth:'none'}}>
        {optionList.map((item)=>{
            
      
      return <div
  className="relative flex flex-col items-center justify-center select-none
             w-[20vmin] h-[20vmin]
             min-w-40
             max-w-40
             bg-[linear-gradient(135deg,#1e1e24_10%,#050505_60%)]
             bg-[length:200%_200%]
             animate-gradient-shift"
>
  <div
    className="absolute -inset-[10px] -z-20
               bg-[radial-gradient(circle_at_0_0,hsl(27_93%_60%),transparent),radial-gradient(circle_at_100%_0,#00a6ff,transparent),radial-gradient(circle_at_0_100%,#ff0056,transparent),radial-gradient(circle_at_100%_100%,#6500ff,transparent)]
               blur-[2vmin]
               animate-blur-animation"
  />

  <div
    className="absolute -inset-[2px] -z-10
               bg-[radial-gradient(circle_at_0_0,hsl(27_93%_60%),transparent),radial-gradient(circle_at_100%_0,#00a6ff,transparent),radial-gradient(circle_at_0_100%,#ff0056,transparent),radial-gradient(circle_at_100%_100%,#6500ff,transparent)]"
  />

  <span
    className="
      w-[90%]
      text-center
      text-white
      text-2xl 
      font-semibold
      break-words
      whitespace-normal
      leading-tight
      overflow-hidden
    "
  >
    {item.title.charAt(0).toUpperCase()}{item.title.slice(1).toLowerCase()}
  </span>
</div>   
      
})}
    </div>
  )
}

export default SpinCard
