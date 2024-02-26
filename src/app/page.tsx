import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { TopSection } from '../components/TopSection';
import { MadeForYou } from '../components/MadeForYou';
import { Recently } from '../components/Recently';
import { Podcasts } from '../components/Podcasts';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 ml-72 mb-24 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          {/* <h1 className='font-semibold text-3xl mt-10'>Boa tarde!</h1> */}
          <TopSection />
          <h2 className='font-semibold text-2xl mt-8'>Feito para Matheus</h2>
          <MadeForYou />
          <h2 className='font-semibold text-2xl mt-8'>Tocados recentemente</h2>
          <Recently />
          <h2 className='font-semibold text-2xl mt-8'>Seus Programas</h2>
          <Podcasts />
        </main>
      </div>
      <Footer />
    </div>
  )
}
