import { ChevronLeft, ChevronRight } from "lucide-react";

export function BackAndForthButtons() {
  return (
    <div className='flex items-center gap-4'>
      <button className='p-1 rounded-full bg-black/40'>
        <ChevronLeft />
      </button>
      <button className='p-1 rounded-full bg-black/40'>
        <ChevronRight />
      </button>
    </div>
  )
}