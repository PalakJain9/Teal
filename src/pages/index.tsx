import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Home() {

  const [isClicked, setIsClicked] = React.useState(true);

  return (
    <div
      className="flex flex-col justify-start items-start w-full h-full"
    >
      <Navbar 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      
      <div
        className="flex flex-row w-full h-full"
      >
        {/* sidebar with absolute positioning */}
        <Sidebar 
          isClicked={isClicked}
        />

        <Hero 
          isClicked={isClicked}
        />
      </div>
    </div>
  )
}