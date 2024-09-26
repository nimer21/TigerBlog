"use client";
import React, { useState } from "react";
import { FaPenToSquare, FaRegUser } from "react-icons/fa6";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import { ModeToggle } from "../widgets/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLogin } from "react-icons/ci"
import { Button } from "../ui/button";
import { LuUser2 } from "react-icons/lu"

export const logo = (
  <Link href={"/"}>
  <div className="flex-start w-[150px]">
    <h2 className="text-color-secondary text-3xl">Tiger</h2>
    <FaPenToSquare size={30} color="blue" className="p-0" />
  </div>
  </Link>
);

export default function MainHeader() {
  const [scrollPage, setScrollPage] = useState(false);
  const fixNavbar = () => {
    if (typeof window !== "undefined" &&  window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  }
  window.addEventListener("scroll",fixNavbar);
  return (
    <div className={scrollPage ? "w-full fixed top-0 transition-all duration-500 ease-in-out z-50" : null}>
    <div className="bg-color-white">
      <div className="container">
        <div className="h-16 flex justify-between items-center">
        {/* className="logo cursor-pointer" */}
          <div>{logo}</div>
          <HeaderSearch />
          <nav className="mr-[20px]">
            <ul className="flex-center space-x-5">
              <li>
                <DropdownMenu>

                  <DropdownMenuTrigger asChild>
                    {/* <Button variant="outline">Open</Button> */}
                    <Link href={"/account"} className="flex-center
                    space-x-1 outline-none dark:text-yellow-300">
                    <FaRegUser />
                      <span>Account</span>
                      <MdKeyboardArrowDown size={20} />
                    </Link>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                    <DropdownMenuSeparator />

                    {/* <DropdownMenuCheckboxItem
                      checked={showStatusBar}
                      onCheckedChange={setShowStatusBar}
                    >
                      Status Bar
                    </DropdownMenuCheckboxItem> */}

                    {/* <DropdownMenuCheckboxItem
                      checked={showActivityBar}
                      onCheckedChange={setShowActivityBar}
                      disabled
                    >
                      Activity Bar
                    </DropdownMenuCheckboxItem> */}

                    <DropdownMenuItem>
                        <Button variant="destructive" className="w-full">
                            <Link href="/login" className="text-white
                            dark:text-white">
                            <span className="flex-center space-x-2">
                                <CiLogin/>
                                Login
                            </span>
                            </Link>
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/profile"}
                        className="dark:text-yellow-300">
                            <span className="flex-center space-x-2">
                                <FaRegUser/>
                                My Profile
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/profile"}
                        className="dark:text-yellow-300">
                            <span className="flex-center space-x-2">
                                <LuUser2/>
                                Dashboard
                            </span>
                        </Link>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem>
                        <Button variant="destructive" className="w-full">
                        Logout
                        </Button>
                    </DropdownMenuItem>

                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Link href={"/account"} className="dark:text-yellow-300">
                  All Posts
                </Link>
              </li>
              <li>
                <Link href={"/account"} className="dark:text-yellow-300">
                  Contacts
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}
