import { Album } from '@/components/Album'
import { BackAndForthButtons } from '@/components/BackAndForthButtons'
import { DailyMix } from '@/components/DailyMix'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { Play } from 'lucide-react'

export default function Home() {
  const albums = [
    {
      id: 1,
      name: 'The Very Best of Era',
      alt: 'capa album era',
      image: '/era.jpg',
      icon: <Play />,
    },
    {
      id: 2,
      name: 'Era II',
      alt: 'capa album era',
      image: '/era2.jpg',
      icon: <Play />,
    },
    {
      id: 3,
      name: 'Voyage Abba',
      alt: 'capa album abba',
      image: '/abba.png',
      icon: <Play />,
    },
    {
      id: 4,
      name: 'The Best of Ennio Morricone',
      alt: 'capa album ennio morricone',
      image: '/ennio.jpg',
      icon: <Play />,
    },
    {
      id: 5,
      name: 'U2',
      alt: 'capa album u2',
      image: '/u2.jpg',
      icon: <Play />,
    },
    {
      id: 6,
      name: 'The Very Best of Eric Jonhson',
      alt: 'capa album eric johnson',
      image: '/eric.jpg',
      icon: <Play />,
    },
    {
      id: 7,
      name: 'Vangelis',
      alt: 'capa album vangelis',
      image: '/vangelis.jpg',
      icon: <Play />,
    }];

  const dailyMixes = [
    {
      id: 1,
      name: 'Daily Mix 1',
      alt: 'capa album daily mix 1',
      image: '/ennio.jpg',
      subtitle: 'Classic Tale, Royal Symphony Orchestra, and more',
    },
    {
      id: 2,
      name: 'Daily Mix 2',
      alt: 'capa album daily mix 2',
      image: '/vangelis.jpg',
      subtitle: 'The very best of Vangelis and more',
    },
    {
      id: 3,
      name: 'Daily Mix 3',
      alt: 'capa album daily mix 3',
      image: '/u2.jpg',
      subtitle: 'The very best of U2 and more',
    },
    {
      id: 4,
      name: 'Daily Mix 4',
      alt: 'capa album daily mix 4',
      image: '/era.jpg',
      subtitle: 'Era, Ennya and more',
    }];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <BackAndForthButtons />

          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            {albums.map(album => (
              <Album
                key={album.id}
                name={album.name}
                alt={album.alt}
                image={album.image}
                icon={album.icon}
              />
            ))}
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Jose Conto</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            {dailyMixes.map(dailyMix => (
              <DailyMix
                key={dailyMix.id}
                name={dailyMix.name}
                alt={dailyMix.alt}
                image={dailyMix.image}
                subtitle={dailyMix.subtitle}
              />))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
