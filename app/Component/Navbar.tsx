import Link from "next/link"
export default function Navbar(){
return(<header>
<nav className="flex bg-black w-full h-14 items-center ">
    <div className="w-3/12 h-10 bg-red-700 ml-24 text-gray-300 text-center pt-2"> Class 5 Assignment</div>
    <div className="flex w-2/4 bg-black text-white justify-end gap-4 items-center ">
    <Link href="/">Home </Link>
    <Link href="/about">About </Link>
    <Link href="/contact">Contact us</Link>
    </div>
</nav>
</header>
)
}
