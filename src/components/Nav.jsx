export default function Nav() {
    return (
        <>
            <nav className='w-full h-12 flex content-center'>
                <NavButton text="acceuil" link="/" />
                <NavButton text="veille" link="/" />
                <NavButton text="projet" link="/"/>
            </nav>
            <div className="mb-6 w-full h-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(255,255,255,1)1%,rgba(255,255,255,1)72%,rgba(255,255,255,1)99%,rgba(0,0,0,0)100%);]" />
        </>
    )
}

function NavButton({link ,text}){
    return (
        <a href={link} className="hover:border-b-4 w-[4.25em] transition-all text-center p-3 mx-3 my-1 block pt-1.5 mb-0 border-b-0">
            {text}
        </a>
    )
}