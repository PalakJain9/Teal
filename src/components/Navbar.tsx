import React from "react"
import styles from '@/styles/Navbar.module.css'

export default function Navbar () {

  const [isClicked, setIsClicked] = React.useState(false);

  function Sidebar () {
    return (
      <div
        className={`w-2/3 md:w-1/4 min-h-screen bg-white z-10 flex flex-col justify-start items-start overflow-y-scroll 
        ${isClicked ? 'flex' : 'hidden'}
        `}
      >
        <p
          className={` bg-gray-200 ${styles.sidebarText}`}
        >
          Home
        </p>
        <p
          className={styles.sidebarText}
        >
          Following
        </p>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col w-full h-full"
    >
      <div
        className="flex flex-row justify-between items-center w-full p-[1rem] bg-white border-b-2 border-gray-100 md:border-b-0"
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
      <Sidebar />
    </div>
  )
}