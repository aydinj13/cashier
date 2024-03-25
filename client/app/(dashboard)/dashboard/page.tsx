"use client"

import Navbar from "@/components/navbar"
import { buttonVariants } from "@/components/ui/button"

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"






export default function Dashboard() {
  const today = new Date()

    return (
        <>
        <Navbar />
        <div className="ml-10 mt-7">
            <h1 className="text-2xl font-bold">Welcome to your Dashboard!</h1>
            <p className="mt-1 opacity-50 text-sm">{today.getMonth() + 1}/{today.getDate()}/{today.getFullYear()} • {today.getHours()}:{today.getMinutes() < 10 && "0"}{today.getMinutes()}</p>
        </div>
        <div className="container mx-auto py-10">
      <div className="mt-5">
        
    </div>
    </div>
  </>
    )
}