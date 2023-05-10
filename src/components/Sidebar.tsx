import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2 '>
        <button className='w-3 h-3 bg-red-500 rounded-full' />
        <button className='w-3 h-3 bg-yellow-500 rounded-full' />
        <button className='w-3 h-3 bg-green-500 rounded-full' />
      </div>
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

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>TudoJunto&Misturado</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Deep House 2023</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Dramatic Classical</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Baden</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Mozart for Babies</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Pop Goes Classical</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>ClassicsByJose</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Antigonas xD</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Classical Essentials</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Rosicrucian Meditation</a>
        <a href="" className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>Benedictus - Karl Jenkins</a>
      </nav>
    </aside>
  )
}