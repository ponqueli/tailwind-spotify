import { Heart, Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-6 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <Image src="/album.jpeg" width={56} height={56} alt="capa album era" />
        <div className='flex flex-col gap-1'>
          <strong className='font-normal'>Hymne</strong>
          <span className='text-xs text-zinc-400'>Era</span>
        </div>
        <button className='ml-3 text-zinc-400 hover:text-green-400 transition-colors'>
          <Heart size={20} />
        </button>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
            <Shuffle size={20} />
          </button>
          <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
            <SkipBack size={20} />
          </button>
          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:bg-green-400 transition-colors'>
            <Play />
          </button>
          <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
            <SkipForward size={20} />
          </button>
          <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
            <Repeat size={20} />
          </button>
        </div>

        <div className='flex items-center gap-3'>
          <span className='text-xs text-zinc-400'>0:33</span>
          <div className="h-1 rounded-full w-80 bg-zinc-600">
            <div className="h-1 w-40 bg-zinc-200 rounded-full"></div>
          </div>
          <span className='text-xs text-zinc-400'>3:03</span>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
          <Mic2 size={20} />
        </button>
        <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
          <LayoutList size={20} />
        </button>
        <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
          <Laptop2 size={20} />
        </button>
        <button className='flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors'>
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 w-10 bg-zinc-200 rounded-full"></div>
          </div>
        </button>
        <button className='text-zinc-400 hover:text-zinc-100 transition-colors'>
          <Maximize2 size={20} />
        </button>
      </div>
    </footer >
  )
}