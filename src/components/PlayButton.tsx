
export function PlayButton() {
    return (
        <button className='absolute right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black mr-3 invisible group-hover:visible'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" /></svg>
        </button>
    )
}