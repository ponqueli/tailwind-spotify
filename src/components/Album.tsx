import Image from "next/image";

interface AlbumProps {
  name: string,
  image: string,
  alt: string
  icon: React.ReactNode
}

export function Album(props: AlbumProps) {
  const { name, image, alt, icon } = props
  return (
    <a href="#" className='group bg-white/5 rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
      <Image src={image} width={104} height={104} alt={alt} />
      <strong>{name}</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        {icon}
      </button>
    </a>
  )
}