function SpinCard({
  optionList,
  transformX,
  isSpinning,
  skipTransition,
  onTransitionEnd,
  cardWidth = 160,
  cardGap = 20,
  repeatCount = 4,
}) {
  if (!optionList.length) {
    return (
      <div className="flex h-[200px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-6 text-center text-sm text-white/60 backdrop-blur-sm">
        <p className="max-w-xs">
          Add choices above and press <strong>"Let's Decide!"</strong> to spin the wheel.
        </p>
      </div>
    )
  }

  const repeatedOptions = Array.from({ length: repeatCount }, () => optionList).flat()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
      {/* Percentage Badge */}
      <div className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
        Chance: {optionList.length ? (100 / optionList.length).toFixed(1) : 0}%
      </div>

      {/* Center Target Indicator */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 shadow-[0_0_12px_#f59e0b]" />

      {/* Indicator arrows */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1">
        <div className="h-0 w-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-amber-400" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1">
        <div className="h-0 w-0 border-b-[12px] border-l-[8px] border-r-[8px] border-b-amber-400 border-l-transparent border-r-transparent" />
      </div>

      {/* Viewport */}
      <div className="w-full overflow-hidden py-6">
        <div
          className="flex items-center"
          style={{
            gap: `${cardGap}px`,
            transform: `translateX(${transformX}px)`,
            transition: skipTransition
              ? 'none'
              : isSpinning
              ? 'transform 4s cubic-bezier(0.22, 1, 0.36, 1)'
              : 'transform 0.4s ease-out',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {repeatedOptions.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-[linear-gradient(135deg,rgba(65,88,208,0.8)_0%,rgba(200,80,192,0.6)_46%,rgba(255,204,112,0.5)_100%)] shadow-lg backdrop-blur-sm"
              style={{
                width: `${cardWidth}px`,
                minWidth: `${cardWidth}px`,
                height: '180px',
              }}
            >
              <span className="block break-words p-3 text-lg font-bold leading-tight text-white drop-shadow-md">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

