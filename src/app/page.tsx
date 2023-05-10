import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2 '>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
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
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronLeft />
            </button>
            <button className='p-1 rounded-full bg-black/40'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/10 rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  )
}
