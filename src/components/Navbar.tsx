export default function Navbar () {
  return (
    <div
      className="flex flex-row justify-between items-center w-full p-[1rem]"
    >
      <div
        className="flex flex-row justify-start items-center gap-4"
      >
        <p
          className="md:text-2xl font-bold text-gray-400"
        >
          &#9776;
        </p>

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
        className="py-[0.5rem] px-[1rem] rounded bg-teal text-white text-sm"
      >
        Hire Palak
      </button>

    </div>
  )
}