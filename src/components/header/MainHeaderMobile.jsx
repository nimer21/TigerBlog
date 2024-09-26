"use client";
import React, { useState } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import MobileMenu from './MobileMenu';
import { ModeToggle } from '../widgets/ModeToggle';
import { logo } from './MainHeader';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { MdOutlineSearchOff } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import HeaderSearch from './HeaderSearch';
import { cn } from '@/lib/utils';

export default function MainHeaderMobile() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="bg-color-dark-blue relative">
      <div className="container h-16 flex justify-between items-center">
        <div className="flex justify-between items-center space-x-3">

        <Sheet>
          <SheetTrigger asChild>
            {/* <Button variant="outline">{side}</Button> */}
            <AiOutlineMenu
            size={28}
            color="white"
            className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent side={"left"}
          className="w-[300px] bg-color-dark-blue p-4">
            <SheetHeader>
              {logo}
              {/* <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription> */}
            </SheetHeader>
            <Separator className="bg-zinc-300 mt-2" />

            <div className="grid gap-4 py-4">
              <MobileMenu/>
              {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div> */}
            </div>

            <div className="grid gap-4 py-4">
              <ModeToggle/>
            </div>

            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
               <Button variant="destructive" className="w-full">
                        Logout
               </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <>
        {logo}
        </>
        </div>
        <nav className="mr-[20px]">
          <ul className="text-white flex-center space-x-5n">
            <li>
              {showSearch ? (
                <MdOutlineSearchOff
                size={28}
                className="cursor-pointer
                hover:text-color-secondary"
                onClick={() => setShowSearch(false)}
                />
              ) : (
                <FiSearch
                size={23}
                className="cursor-pointer
                hover:text-color-secondary"
                onClick={() => setShowSearch(true)}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
      {/** Search bar */}
      <div className={cn("w-full h-16 bg-gray-200 absolute right-0 transition-all duration-500 ease-in-out z-50",
        showSearch ? "top-16" : "top-[-100%]"
      )}>
        <span className="flex-center h-16">
          <HeaderSearch/>
          <IoMdClose
          size={28}
          className="cursor-pointer
          hover:text-color-secondary"
          onClick={() => setShowSearch(false)}
          />
        </span>
      </div>
    </div>
  )
}
