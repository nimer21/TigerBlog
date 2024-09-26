"use client";
import React from 'react'
import { routes } from './data';
import { ScrollArea } from '../ui/scroll-area';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full text-white">
      <ScrollArea className="h-[60vh]">
        <div classNAme="space-y-0">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}
            className={cn("text-sm group flex p-3 w-full justify-start cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathname === route.href ? "text-white bg-white/10" : "text-zinc-200")}>
              <span className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-2" color=
                {route.color}/>
                {route.label}
              </span>
            </Link>
          ))}

        </div>
      </ScrollArea>
      
    </div>
  )
}
