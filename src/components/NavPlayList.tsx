interface ItemProps {
  id: number,
  name: string,
  href: string,
}

interface ItemListProps {
  items: ItemProps[]
}
export function NavPlayList({ items }: ItemListProps) {
  return (
    <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
      {items.map(item => (
        <a
          key={item.id}
          href={item.href}
          className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100'>
          {item.name}
        </a>
      ))}
    </nav>
  )
}