import Link from 'next/link'

function Navbar() {
    return (
        <nav className="tm:py-15 md:py-22 tm:h-79 md:h-95 bg-white shadow-xl">
            <div className="tm:container mx-auto grid grid-cols-1 items-center content-center justify-center">
                <div className="flex justify-center"><Link href="/pacorabanne"><a><img src="/img/webp/logo-phantom.webp" alt="Phantom by Paco Rabane" width="200px" /></a></Link></div>
            </div>
        </nav>
    )
}

export default Navbar
