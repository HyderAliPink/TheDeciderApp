function OptionInput({ option, setOption, setOptionList, optionList }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = option.trim()
    if (!trimmed) return

    setOptionList([
      ...optionList,
      {
        id:
          typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random()}`,
        title: trimmed,
      },
    ])
    setOption('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3 rounded-3xl bg-white/10 p-4 shadow-lg backdrop-blur-sm sm:flex-nowrap">
      <input
        value={option}
        onChange={(e) => setOption(e.target.value)}
        type="text"
        autoComplete="off"
        placeholder="Add choice"
        className="min-h-10.5 flex-1 rounded-l-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
      />
      <button
        type="submit"
        className="min-h-10.5 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
      >
        Add
      </button>
    </form>
  )
}

export default OptionInput
