function SpinCard({ optionList, transformX, isSpinning, onTransitionEnd, cardWidth = 160, cardGap = 20, repeatCount = 7 }) {
  if (!optionList.length) {
    return (
      <div className='flex h-[240px] w-full items-center justify-center rounded-3xl border border-white/20 bg-black/10 p-6 text-center text-sm text-slate-300 backdrop-blur-sm'>
        Add choices and press "Let's Decide!" to start the spinner.
      </div>
    )
  }

  const repeatedOptions = Array.from({ length: repeatCount }, () => optionList).flat()

  return (
    <div className='relative max-w-[960px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl w-full'>
      <div className='pointer-events-none absolute inset-y-0 left-1/2 z-20 h-full w-px bg-white/30' />
      <div className='overflow-hidden'>
          <div
            className='flex items-center'
            style={{
              gap: `${cardGap}px`,
              transform: `translateX(${transformX}px)`,
              transition: isSpinning ? 'transform 4s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.3s ease-out',
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {repeatedOptions.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className='flex-none flex items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black px-4 text-center shadow-xl'
                style={{ width: `${cardWidth}px`, minWidth: `${cardWidth}px`, height: '200px' }}
              >
                <span className='inline-block max-w-full break-words text-lg font-semibold leading-tight text-white text-center'>
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}
                </span>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default SpinCard