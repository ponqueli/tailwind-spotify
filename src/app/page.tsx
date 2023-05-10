import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Heart } from 'lucide-react'
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
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpeg" width={104} height={104} alt="capa album era" />
              <strong>Era</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Jose Conto</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href='#' className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={120} height={120} alt="capa album era" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Classic Tale, Royal Symphony Orchestra, and more</span>
            </a>
            <a href='#' className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={120} height={120} alt="capa album era" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Classic Tale, Royal Symphony Orchestra, and more</span>
            </a>
            <a href='#' className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={120} height={120} alt="capa album era" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Classic Tale, Royal Symphony Orchestra, and more</span>
            </a>
            <a href='#' className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image className="w-full" src="/album.jpeg" width={120} height={120} alt="capa album era" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Classic Tale, Royal Symphony Orchestra, and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src="/album.jpeg" width={56} height={56} alt="capa album era" />
          <div className='flex flex-col gap-1'>
            <strong className='font-normal'>Hymne</strong>
            <span className='text-xs text-zinc-400'>Era</span>
          </div>
          <a className='ml-3' href='#'><Heart /></a>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  )
}
