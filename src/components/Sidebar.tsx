import styles from '@/styles/Sidebar.module.css'

type SidebarProps = {
  isClicked: boolean,
}

export default function Sidebar ({ isClicked } : SidebarProps) {
  return (
    <div
      className={`absolute top-0 left-0 w-2/3 md:w-1/4 lg:w-1/5 xl:w-1/6 min-h-screen bg-white z-10 flex flex-col justify-start items-start overflow-y-scroll 
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