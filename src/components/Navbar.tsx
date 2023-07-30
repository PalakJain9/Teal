import React from 'react'

type NavbarProps = {
  isClicked: boolean,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Navbar ({ isClicked, setIsClicked } : NavbarProps) {

  return (
    <div
      className="flex flex-row justify-between items-center w-full px-[1rem] h-[5rem] bg-white border-b-2 border-gray-100 md:border-b-0"
    >
      <div
        className="flex flex-row justify-start items-center gap-4"
      >
        <button
          onClick={() => setIsClicked(!isClicked)}
          className="md:text-2xl text-gray-400"
        >
          &#9776;
        </button>

        <p
          className="md:text-2xl font-semibold text-gray-700"
        >
          <span className="text-teal">Teal</span>feed x Palak
        </p>

      </div>

      <input
        className="hidden md:flex py-[0.5rem] px-[1rem] border-2 border-gray-100 rounded"
        placeholder="Search"
      >
      </input>

      <button
        className="py-[0.5rem] px-[1rem] rounded bg-teal text-white text-sm md:text-base"
      >
        Hire Palak
      </button>

    </div>
  )
}