"use client";
import LoadingAnimation from "@/components/widgets/Loader";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  // Types of component
  // 1. server - SEO
  // 2. client - Browser interactivity
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="content">
      <h1 className="text-3xl font-bold red">Hello Tiger</h1>
      <LoadingAnimation/>
      {/* <LoadingAnimation/> */}
        </div>
        {/* <button className="btn btn-primary">Get Started</button> */}
        
      </main>
      
  );
}
