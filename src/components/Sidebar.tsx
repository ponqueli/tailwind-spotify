import { ThreeAppleButtons } from "./ThreeAppleButtons";
import { Menu } from "./Menu";
import { NavPlayList } from "./NavPlayList";

interface ItemProps {
  id: number,
  name: string,
  href: string,
}

export function Sidebar() {
  const playList: ItemProps[] = [
    {
      id: 1,
      name: "TudoJunto & Misturado",
      href: "#"
    },
    {
      id: 2,
      name: "Deep House 2023",
      href: "#"
    },
    {
      id: 3,
      name: "Dramatic Classical",
      href: "#"
    },
    {
      id: 4,
      name: "Baden",
      href: "#"
    },
    {
      id: 5,
      name: "Pop Goes Classical",
      href: "#"
    },
    {
      id: 6,
      name: "Baden",
      href: "#"
    },
    {
      id: 7,
      name: "Cinema Paradiso - Ennio Morricone",
      href: "#"
    },
    {
      id: 8,
      name: "Benedictus - Karl Jenkins",
      href: "#"
    },
    {
      id: 9,
      name: "Rosicrucian Meditation",
      href: "#"
    },
    {
      id: 10,
      name: "Classical Essentials",
      href: "#"
    },
    {
      id: 11,
      name: "Antigonas xD",
      href: "#"
    },
    {
      id: 12,
      name: "ClassicsByJose",
      href: "#"
    },
  ]
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <ThreeAppleButtons />
      <Menu />
      <NavPlayList
        items={playList}
      />
    </aside>
  )
}