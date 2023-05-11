import { HomeIcon, Library, Search } from "lucide-react";

export function Menu() {
  return (
    <nav className='space-y-5 mt-6'>
      <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
        <HomeIcon />
        Home
      </a>
      <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
        <Search />
        Search
      </a>
      <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
        <Library />
        Your Library
      </a>
    </nav>
  )
}