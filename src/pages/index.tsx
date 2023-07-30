import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div
      className="flex flex-col justify-start items-start w-full h-full"
    >
      <Navbar 
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />
      
      <div
        className="relative flex flex-row w-full h-full"
      >
        {/* sidebar with absolute positioning */}
        <Sidebar 
          isClicked={isClicked}
        />
        <Hero />
      </div>
    </div>
  )
}