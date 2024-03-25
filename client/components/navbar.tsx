"use client"

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BellIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserButton } from "@clerk/nextjs";




export default function Navbar() {


  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap mt-5 ml-1 flex-col md:flex-row items-center">
      <a href="/dashboard" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src="/logo.png" alt="" width={50} height={50} />
        <span className="ml-3 text-xl">Casher</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/dashboard" className={cn("mr-5 hover:text-gray-900")}>Dashboard</Link>
        <Link href="/expenses"  className={cn("mr-5 hover:text-gray-900")}>Expenses</Link>
        <Link href="/analytics"  className={cn("mr-5 hover:text-gray-900")}>Analytics</Link>
        <Link href="/settings"  className={cn("mr-5 hover:text-gray-900")}>Settings</Link>
        
      </nav>
      
      <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar className="mr-5">
          <AvatarFallback><BellIcon /></AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="mr-5">
    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>You added your first expense!</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      <UserButton />
    </div>
  </header>
  )
  
}