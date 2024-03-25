"use client"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Expenses() {
  const [id, setId] = useState("")
  const [amount, setAmount] = useState(0)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")


  useEffect(() => {
    fetch("http://localhost:8000/api/home").then(
      response => response.json()
      ).then(
        data => {
          setId(data.id)
          setAmount(data.amount)
          setName(data.name)
          setCategory(data.category)
          setDate(data.date)
        }
      )
  }, [])

  const transactions = [
    {
      id: {id},
      amount: {amount},
      name: {name},
      category: {category},
      date: {date}
    },
  ]


  return (
    <>
    <Navbar />
    <div className="ml-10 mt-7">
            <h1 className="text-2xl font-bold">Expenses</h1>
        </div>
    <div className="container mx-auto py-10">
    <Table>
  <TableCaption>A list of your recent transactions.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>ID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  </TableBody>
</Table>
      <Button variant="outline" className="mt-5">Add an item</Button>
    </div>
    </>
  )
}
