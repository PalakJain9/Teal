import Link from 'next/link'
import React from 'react'

type NavbarProps = {
  isClicked: boolean,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Navbar ({ isClicked, setIsClicked } : NavbarProps) {

  return (
    <div
      className="fixed top-0 z-10 flex flex-row justify-between items-center w-full px-[1rem] h-[5rem] bg-white border-b-2 border-gray-100 md:border-b-0"
    >
      <div
        className="flex flex-row justify-start items-center gap-4"
      >
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`md:text-2xl text-gray-400 border-gray-300 p-[0.3rem] rounded-md
          ${isClicked ? 'border-2' : 'border-0'}
          `}
        >
          &#9776;
        </button>

        <Link
          href='/'
          className="md:text-2xl font-semibold text-gray-700"
        >
          <span className="text-teal">Teal</span>feed x Palak
        </Link>

      </div>

      <input
        className="hidden md:flex py-[0.5rem] px-[1rem] border-2 border-gray-100 rounded"
        placeholder="Search"
      >
      </input>

      <Link
        href="mailto:palakb188@gmail.com"
        className="py-[0.5rem] px-[1rem] rounded bg-teal text-white text-sm md:text-base hover:underline underline-offset-4"
      >
        Hire Palak
      </Link>

    </div>
  )
}