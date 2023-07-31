import styles from '@/styles/Sidebar.module.css'
import Link from 'next/link'
import React from 'react';

type SidebarProps = {
  isClicked: boolean,
}

export default function Sidebar ({ isClicked } : SidebarProps) {

  return (
    <div
      className={`fixed top-[5rem] left-0 w-1/3 md:w-1/5 lg:w-1/6 bg-white z-10 flex flex-col justify-start items-start gap-6 h-full overflow-y-auto
      ${isClicked ? 'flex' : 'hidden'}
      `}
    >
      <div
        className='w-full flex flex-col justify-start items-start'
      >
        <Link
          href='/'
          className={` bg-gray-200 ${styles.sidebarText}`}
        >
          Home
        </Link>
        
        <p
          className={styles.sidebarText}
        >
          Following Palak
        </p>
      </div>
      
      <div className='border-b border-gray-200 w-full'></div>

      <div
        className={`w-full flex flex-col justify-start items-start`}
      >
        <p 
          className={styles.sidebarHeading}
        >
          Discover
        </p>

        <p
          className={styles.sidebarText}
        >
          Development
        </p>

        <p
          className={styles.sidebarText}
        >
          Community
        </p>
      </div>

      <div className='border-b border-gray-200 w-full'></div>

      <div
        className={`w-full flex flex-col justify-start items-start`}
      >
        <p 
          className={styles.sidebarHeading}
        >
          Popular Posts
        </p>

        <Link
          href='https://palakjain.hashnode.dev/nextjs-13-routing-a-complete-guide-to-mastering-dynamic-and-nested-routes'
          className={styles.sidebarText}
        >
          Next.js 13 App Directory: Routing Explained
        </Link>

        <Link
          href='https://palakjain.hashnode.dev/4-linkedin-hacks-you-cant-miss-at-all'
          className={styles.sidebarText}
        >
          4 LinkedIn Hacks You Can't Miss
        </Link>
      </div>

      <div className='border-b border-gray-200 w-full'></div>

      <div
        className={`w-full flex flex-col justify-start items-start`}
      >
        <p 
          className={styles.sidebarHeading}
        >
          Contact
        </p>

        <Link
          href='mailto:palakb188@gmail.com'
          className={styles.sidebarText}
        >
          Email
        </Link>
          
        <Link
          href='https://www.linkedin.com/in/palakjain9'
          className={styles.sidebarText}
        >
          LinkedIn
        </Link>
        
        <Link
          href='https://github.com/PalakJain9'
          className={styles.sidebarText}
        >
          GitHub
        </Link>
        
        <Link
          href='https://palakjain.hashnode.dev/'
          className={styles.sidebarText}
        >
        Blog
        </Link>

        <Link
          href='https://heypalakjain.vercel.app/'
          className={styles.sidebarText}
        >
          Portfolio
        </Link>

      </div>
    </div>
  )
}