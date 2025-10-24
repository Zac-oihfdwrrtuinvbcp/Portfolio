export function SearchBar() {
  return (
    <div className="relative flex items-center">
      <i className="fa-solid fa-magnifying-glass absolute left-3 text-zinc-400 pointer-events-none"></i>
      <input
        aria-label="Search"
        className="pl-10 pr-4 py-2 rounded-3xl bg-zinc-800 text-zinc-200 shadow-l focus:outline-none"
        placeholder="Search projects..."
      />
    </div>
  )
}