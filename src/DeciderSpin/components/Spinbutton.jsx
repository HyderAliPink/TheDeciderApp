import React from 'react'

function Spinbutton() {
  return (
    <div className='relative top-[-150px] left-[50%]'>
      <button
  className="relative w-30 h-[40px] flex items-center justify-center
             text-white bg-black rounded-lg cursor-pointer
             before:content-[''] before:absolute before:inset-0
             before:-left-1 before:-top-0.5
             before:w-32 before:h-12
             before:rounded-[10px]
             before:bg-[linear-gradient(-45deg,#e81cff,#40c9ff)]
             before:-z-10
             before:transition-all before:duration-700
             before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]

             after:content-[''] after:absolute after:inset-0
             after:bg-[linear-gradient(-45deg,#fc00ff,#00dbde)]
             after:scale-95 after:blur-[20px]
             after:-z-20

             hover:after:blur-[30px]
             hover:before:rotate-180

             active:before:scale-75"
>
  Let's Decide!
</button>
    </div>
  )
}

export default Spinbutton
