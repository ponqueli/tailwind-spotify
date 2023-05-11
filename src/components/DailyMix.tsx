import Image from "next/image";

interface DailyMixProps {
  name: string,
  image: string,
  alt: string
  subtitle: string
}
export function DailyMix(props: DailyMixProps) {
  const { name, image, alt, subtitle } = props
  return (
    <a href='#' className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
      <Image className="w-full" src={image} width={120} height={120} alt={alt} />
      <strong className='font-semibold'>{name}</strong>
      <span className='text-sm text-zinc-400'>{subtitle}</span>
    </a>
  )
}