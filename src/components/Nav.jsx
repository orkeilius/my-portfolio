export default function Nav() {
    return (
        <>
            <nav className='w-full h-12 flex content-center'>
                <NavButton text="acceuil" link="/" />
                <NavButton text="veille" link="/" />
                <NavButton text="projet" link="/"/>
            </nav>
            <div className="w-full h-[1px] bg-[linear-gradient(90deg,rgba(0,0,0,0)0%,rgba(255,255,255,1)1%,rgba(255,255,255,1)72%,rgba(255,255,255,1)99%,rgba(0,0,0,0)100%);]" />
        </>
    )
}

function NavButton({link ,text}){
    return (
        <a href={link} className="hover:bg-slate-800 w-[4.25em] text-center p-2 mx-3 my-1 block rounded-3xl pt-2 ">
            {text}
        </a>
    )
}