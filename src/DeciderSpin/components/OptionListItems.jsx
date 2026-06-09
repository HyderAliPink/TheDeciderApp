function OptionListItems({ optionList }) {
  return (
    <div className="max-h-[60vh] overflow-auto pr-2 no-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      {optionList.length === 0 ? (
        <p className="text-sm text-slate-300">No choices yet. Add an item to start the spinner.</p>
      ) : (
        <ol className="space-y-3">
          {optionList.map((item) => (
            <li key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white shadow-sm">
              {item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default OptionListItems
