import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import Header from '../components/Header.jsx'
import OptionInput from '../components/OptionInput.jsx'
import OptionListItems from '../components/OptionListItems.jsx'
import SpinCard from '../components/SpinCard.jsx'
import Spinbutton from '../components/Spinbutton.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CARD_WIDTH = 160
const CARD_GAP = 20
const STEP = CARD_WIDTH + CARD_GAP
const SPIN_ROUNDS = 4
const PRE_ROUNDS = 3
const REPEAT_COUNT = SPIN_ROUNDS + PRE_ROUNDS + 2

function getCenterOffset(container) {
  if (!container) return 0
  return Math.round(container.offsetWidth / 2 - CARD_WIDTH / 2)
}

function Mainpage() {
  const [option, setOption] = useState('')
  const [optionList, setOptionList] = useState([])
  const [transformX, setTransformX] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState(null)

  const containerRef = useRef(null)

  const startIndex = optionList.length * PRE_ROUNDS

  useLayoutEffect(() => {
    const updateTrack = () => {
      if (!containerRef.current) return
      const centerOffset = getCenterOffset(containerRef.current)
      if (!isSpinning) {
        setTransformX(centerOffset - startIndex * STEP)
      }
    }

    updateTrack()
    window.addEventListener('resize', updateTrack)
    return () => window.removeEventListener('resize', updateTrack)
  }, [isSpinning, startIndex, optionList.length])

  const handleSpin = useCallback(() => {
    if (!optionList.length || isSpinning) return

    const selectedIndex = Math.floor(Math.random() * optionList.length)
    const selected = optionList[selectedIndex]
    const finalIndex = startIndex + SPIN_ROUNDS * optionList.length + selectedIndex
    const centerOffset = getCenterOffset(containerRef.current)
    const targetX = Math.round(centerOffset - finalIndex * STEP)

    setWinner(selected)
    setIsSpinning(true)
    setTransformX(targetX)
  }, [optionList, isSpinning, startIndex])

  const handleTransitionEnd = () => {
    if (!isSpinning) return
    setIsSpinning(false)

    if (winner) {
      toast.success(`Decided: ${winner.title}`, {
        position: 'top-center',
        theme: 'dark',
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-white">
      <Header />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <OptionInput
          option={option}
          setOption={setOption}
          setOptionList={setOptionList}
          optionList={optionList}
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 sm:px-6 lg:flex-row lg:items-start lg:px-8">
        <aside className="w-full lg:w-72 shrink-0">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-md">
            <h2 className="mb-4 text-lg font-bold text-white">Your Choices</h2>
            <OptionListItems optionList={optionList} />
          </div>
        </aside>

        <main className="flex flex-1 flex-col items-center gap-8">
          <div ref={containerRef} className="w-full">
            <SpinCard
              optionList={optionList}
              transformX={transformX}
              isSpinning={isSpinning}
              onTransitionEnd={handleTransitionEnd}
              cardWidth={CARD_WIDTH}
              cardGap={CARD_GAP}
              repeatCount={REPEAT_COUNT}
            />
          </div>

          <Spinbutton onSpin={handleSpin} disabled={isSpinning || optionList.length === 0} />
        </main>
      </div>

      <ToastContainer pauseOnHover closeOnClick />
    </div>
  )
}

export default Mainpage
