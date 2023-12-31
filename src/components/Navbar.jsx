import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 flex flex-wrap justify-between p-5 bg-white fixed top-0 w-full  border-b border-gray-300">
      <div>
        <Link className="text-red-600 hover:font-bold" href="/">
          SAMMANSLAGET
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link className="text-black hover:font-bold" href="/">
          HEM
        </Link>
        <Link href="/about" className="text-black hover:font-bold">
          OM SIDAN
        </Link>
      </div>
    </nav>
  );
}
