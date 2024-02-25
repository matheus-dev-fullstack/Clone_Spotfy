import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export function RecentSongs(){
    return (
        <div className='grid grid-cols-4 gap-4 mt-5'>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/mix-romantico.jpeg" alt=">Mix romântico" />
                <strong className='w-40'>Mix romântico</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/radio-supercombo.jpeg" alt="Radio de Supercombo" />
                <strong className='w-40'>Radio de Supercombo</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/daily-mix2.jpeg" alt="capa da playlist" />
                <strong className='w-40'>Daily Mix 2</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/daily-mix4.jpeg" alt="capa da playlist" />
                <strong className='w-40'>Daily Mix 4</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/mix-jovem-dionisio.jpeg" alt="capa da playlist" />
                <strong className='w-40'>Mix de Jovem Dionísio</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/mix-selvagens.jpeg" alt="capa da playlist" />
                <strong className='w-40'>Mix de Selvagens <br /> à Procura de Lei</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/musicas-curtidas.png" alt="capa da playlist" />
                <strong className='w-40'>Músicas Curtidas</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='relative bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                <Image width={76} height={76} src="/radio-morena.jpeg" alt="capa da playlist" />
                <strong className='w-40'>Rádio de Morena</strong>
                <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'><Play /></button>
            </a>

        </div>
    )
}