import { NavButton } from "./NavButton";
import { SearchBar } from "./SearchBar";
import { NavIcon } from "./NavIcon";

export function NavBar() {
  return (
    <nav className="shadow-l bg-zinc-900 p-4 px-5 h-18 flex items-center justify-center rounded-4xl gap-4">
      <NavIcon />
      <div className="flex items-center gap-4">
        <NavButton to="/">Portfolio</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/contact">Contact</NavButton>
      </div>
      <SearchBar />
    </nav>
  );
}
